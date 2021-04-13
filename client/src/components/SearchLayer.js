// import react
import React, { useRef, useState } from "react";
// import link
import { Link } from "react-router-dom";
// import getYoutubeID => returns a parsed ID from a youtube video URL
import getYouTubeID from 'get-youtube-id';

// export component
export default function SearchLayer(props) {
    const [videoLink, setVideoLink] = useState();
    const [username, setUsername] = useState();
    const [room, setRoom] = useState();
    const [isBool, setBool] = useState(false);
    const [videoId, setVideoId] = useState();
    const userRef = useRef();
    const roomRef = useRef();
    const urlRef = useRef();

    // change the state of username when it is changed
    const handleUserChange = (event) => {
        setUsername(userRef.current.value);
    }

    // change the state of room Id / room name when it is changed
    const handleRoomChange = () => {
        setRoom(roomRef.current.value);
    }

    // change the state of the URL when it is changed
    const handleUrlChange = () => {
        setVideoLink(urlRef.current.value);
        setVideoId(getYouTubeID(urlRef.current.value));
    }

    // if the content of the three inputs in null then display error
    const handleClick = () => {
        if (urlRef.current.value === '' || userRef.current.value === '' || roomRef.current.value === '') {
            alert('Please enter the details.');
            setBool(true);
        } else {
            setBool(false);
        }
    }

    // return component
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
