// import packages / components 

import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { useLocation } from 'react-router-dom';
import queryString from "query-string";
import $ from 'jquery';
import { io } from "socket.io-client";
import Chat from './Chat';
import UsersList from './UsersList';

// Define socket
let socket;

// Component function
function PlayVideo() {
    const [player, setPlayer] = useState();
    const [currentTime, setTime] = useState();
    const [id, setId] = useState();
    const [username, setName] = useState();
    const [roomName, setRoomName] = useState();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState();
    const [users, setUsers] = useState([]);
    const location = useLocation();

    // connecting to socket
    // setting up messages (admin and user both)
    useEffect(() => {
        const { name, roomId, videoId } = queryString.parse(location.search);
        setId(videoId);
        setName(name);
        setRoomName(roomId);

        // establishing connection with socket.io
        socket = io('http://localhost:5000');

        // join the room entered by the user
        socket.emit('join', name, roomId, videoId);

        // get all the messages
        socket.on('message', (message) => {
            // add new message to the messages array
            setMessages(messages => [...messages, message]);

            // play the notification tone
            if (message.user !== name && name !== undefined) {
                var audioPlay = new Audio('message.mp3');
                audioPlay.play();
            }
        });

        // get all the users present in a particular room
        socket.on('roomData', ({ users }) => {
            setUsers(users);
        });
    }, [location.search]);


    // Youtube Embedded Player options
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
            origin: 'http://localhost:3000'
        },
    };

    // set the state of the player to pause when it is loaded completely
    const onReady = (e) => {
        // setting the player variable to control the player without using event.target everytime
        setPlayer(e.target);

        // emit control events
        socket.emit('event', 'startVideo');
        socket.on('event', (msg) => {
            if (msg === 'startVideo') {
                e.target.pauseVideo();
            }
        })

        setInterval(() => {
            var fraction = e.target.getCurrentTime() / e.target.getDuration() * 100;
            setTime(fraction.toString());
        }, 200);
    }

    // play video event
    const playVideo = () => {
        socket.emit('event', 'play');
        socket.on('event', (msg) => {
            if (msg === 'play') {
                player.playVideo();
            }
        });
    }

    // pause video event
    const pauseVideo = () => {
        socket.emit('event', 'pause');
        socket.on('event', (msg) => {
            if (msg === 'pause') {
                player.pauseVideo();
            }
        });
    }

    // forward and backward timeline change event
    const clickTimeLine = (event) => {
        const timeline = $(".timeline").offset();
        var seekToSecs = (event.pageX - timeline.left) / 500 * player.getDuration();
        socket.emit('seektoEvent', seekToSecs);
        socket.on('seektoEvent', (seekToSecs) => {
            player.seekTo(seekToSecs);
        })
    };

    // send message event
    const sendMessage = (event) => {
        event.preventDefault();
        setMessage('');

        // emit message event and send it to the API
        if (message) {
            socket.emit('sendMessage', message);
        }
    }

    // leave room event
    useEffect(() => {
        return () => {
            socket.emit('deleteUser');
        }
    }, []);

    // return component code
    return (
        <main className="App">
            <audio id="audio">
                <source src="./message.mp3" />
            </audio>
            <section className="iframe-embedded">
                <YouTube videoId={id} opts={opts} onReady={onReady} />
                <div className="controlPanels">
                    <div className="videoPPC">
                        <button className="pauseBtn" onClick={pauseVideo}><PauseIcon /></button>
                        <button className="playBtn" onClick={playVideo}><PlayArrowIcon /></button>
                    </div>
                    <div className="timeline">
                        <div draggable className="pointer" style={{ left: `${currentTime}%` }}></div>
                        <div onClick={clickTimeLine} className="timeline-bar"></div>
                    </div>
                </div>
            </section>
            <Chat messages={messages} message={message} roomName={roomName} currentUser={username} sendMessage={sendMessage} setMessage={setMessage} />
            <UsersList users={users} />
        </main>
    );
}

// export component
export default PlayVideo;