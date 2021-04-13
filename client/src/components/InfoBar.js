// import react
import React from 'react'

// export component
export default function InfoBar(props) {
    return (
        <header className="chat-infobar">
            <p>{`Room Code: ${props.roomName}`}</p>
        </header>
    )
}
