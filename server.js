const express = require("express");
const bodyParser = require('body-parser');
const { urlencoded, text } = require('body-parser');
const cors = require('cors');
const app = express();

// Intialize socket.io
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server, {
	cors: {
		origin: "https://watch-it-youtube.netlify.app",
		methods: ["GET", "POST"],
		allowedHeaders: ["Access-Control-Allow-Origin"],
	}
})

// Users storage
const { addUser, removeUser, getUser, getUsersInRoom, getConcurrentUser } = require('./Users')

// Creating an io connection
io.on("connection", (socket) => {
	console.log('a user connected');

	// Events for chat room
	socket.on('join', (name, room, videoLink) => {
		const { error, user } = addUser({ id: socket.id, name: name, room: room, videoLink: videoLink });

		if (error) {
			return error;
		}

		socket.join(room);
		socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}` });
		socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined` });
		socket.emit('message', { user: 'admin', text: "1. Everyone click play at the same time" });
		socket.emit('message', { user: 'admin', text: "2. Everyone click pause at the same time" });
		socket.emit('message', { user: 'admin', text: "And you are good to go in sync now" });

		io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

		let conUser = getConcurrentUser(user.videoLink, user.name);
		// console.log(conUser);
	});

	socket.on('sendMessage', (message) => {
		const user = getUser(socket.id);

		// console.log({ message, user });
		io.to(user.room).emit('message', { user: user.name, text: message });
	});

	// Youtube embedded player events
	socket.on('event', (msg) => {
		const user = getUser(socket.id);
		io.to(user.room).emit('event', msg);
		if (msg == 'play') {
			io.to(user.room).emit('message', { user: 'admin', text: `${user.name} played the video.` })
		}
		else if (msg == 'pause') {
			io.to(user.room).emit('message', { user: 'admin', text: `${user.name} paused the video.` })
		}
	});

	// seek to secs syncing for all the users
	socket.on('seektoEvent', (time) => {
		const user = getUser(socket.id);
		console.log(time);
		io.to(user.room).emit('seektoEvent', time);
	});

	socket.on('deleteUser', () => {
		const user = removeUser(socket.id);

		if (user) {
			io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
			io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
		}
		console.log('user disconnected');
	})

	socket.on('disconnect', () => {
		const user = removeUser(socket.id);

		if (user) {
			io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
			io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
		}
	});
});


// Setting up server
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
	console.log(`Request_Endpoint: ${req.method} ${req.url}`);
	next();
});


app.get('/', (req, res) => {
	res.send('Server is up and running!!');
})

server.listen(process.env.PORT || 5000, () => {
	console.log('socket succesfully connected');
});