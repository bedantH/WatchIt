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

let socket;

function PlayVideo() {
    const [player, setPlayer] = useState();
    const [currentTime, setTime] = useState();
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [roomName, setRoomName] = useState();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState();
    const [users, setUsers] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const { name, roomId, videoId } = queryString.parse(location.search);
        setId(videoId);
        setName(name);
        setRoomName(roomId);
        console.log(name);

        socket = io('http://localhost:5000');
        socket.emit('join', name, roomId);
        console.log(socket);
    }, []);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(messages => [...messages, message]);
        });

        socket.on('roomData', ({ users }) => {
            setUsers(users);
        });
    }, []);

    // Youtube Embedded Player options
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
            origin: 'http://localhost:3000'
        },
    };

    const onReady = (e) => {
        setPlayer(e.target);
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

    const playVideo = () => {
        console.log(socket)
        socket.emit('event', 'play');
        socket.on('event', (msg) => {
            if (msg === 'play') {
                player.playVideo();
            }
        });
    }

    const pauseVideo = () => {
        socket.emit('event', 'pause');
        socket.on('event', (msg) => {
            if (msg === 'pause') {
                player.pauseVideo();
            }
        });
    }

    const clickTimeLine = (event) => {
        const timeline = $(".timeline").offset();
        var seekToSecs = (event.pageX - timeline.left) / 500 * player.getDuration();
        socket.emit('seektoEvent', seekToSecs);
        socket.on('seektoEvent', (seekToSecs) => {
            player.seekTo(seekToSecs);
        })
    };

    const sendMessage = (event) => {
        event.preventDefault();
        setMessage('');

        if (message) {
            socket.emit('sendMessage', message);
        }
    }

    return (
        <main className="App">
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
            <Chat messages={messages} message={message} roomName={roomName} currentUser={name} sendMessage={sendMessage} setMessage={setMessage} />
            <UsersList users={users} />
        </main>
    );
}

export default PlayVideo;