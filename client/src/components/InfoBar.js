import React from 'react'

export default function InfoBar(props) {
    return (
        <header className="chat-infobar">
            <p>{`Room Code: ${props.roomName}`}</p>
        </header>
    )
}
