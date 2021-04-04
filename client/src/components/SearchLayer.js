import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import getYouTubeID from 'get-youtube-id';

export default function SearchLayer(props) {
    const [videoLink, setVideoLink] = useState();
    const [username, setUsername] = useState();
    const [room, setRoom] = useState();
    const [isBool, setBool] = useState(false);
    const [videoId, setVideoId] = useState();
    const userRef = useRef();
    const roomRef = useRef();
    const urlRef = useRef();

    const handleUserChange = (event) => {
        setUsername(userRef.current.value);
    }

    const handleRoomChange = () => {
        setRoom(roomRef.current.value);
    }

    const handleUrlChange = () => {
        setVideoLink(urlRef.current.value);
        setVideoId(getYouTubeID(urlRef.current.value));
        console.log(getYouTubeID(urlRef.current.value))

    }

    const handleClick = () => {
        if (urlRef.current.value === '' || userRef.current.value === '' || roomRef.current.value === '') {
            alert('Please enter the details.');
            setBool(true);
        } else {
            setBool(false);
        }
    }

    return (
        <div className="searchlayer">
            <form>
                <input ref={userRef} id="username" placeholder="Enter your name:" onChange={handleUserChange} required />
                <input ref={roomRef} id="roomId" placeholder="Enter the room ID:" onChange={handleRoomChange} required />
                <input ref={urlRef} id="videoLink" placeholder="Enter the youtube video URL:" onChange={handleUrlChange} required />
                <Link style={{ pointerEvents: isBool ? 'none' : 'initial' }} onClick={props.getTheVideolink(videoId), handleClick} to={`/play?videoId=${videoId}&name=${username}&roomId=${room}`}>Play</Link>
            </form>
        </div>
    )
}
