import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import ScrollToBottom from 'react-scroll-to-bottom';
import InfoBar from './InfoBar';
import Message from "./Message";

export default function Chat(props) {

    return (
        <section className="chat-layout">
            <div className="chat-area">
                <InfoBar roomName={props.roomName} />
                <ScrollToBottom className="messages">
                    {props.messages.map((message, i) => <div key={i}><Message message={message} name={props.currentUser} /></div>)}
                </ScrollToBottom>
                <div className="chat-input">
                    <input
                        className="chathere"
                        placeholder="Type your message here..."
                        value={props.message}
                        onChange={({ target: { value } }) => props.setMessage(value)}
                        onKeyPress={(event) => event.key === 'Enter' ? props.sendMessage(event, props.message) : null}>
                    </input>
                    <button className="chatSubmitBtn" onClick={e => props.sendMessage(e)} type="submit"><SendIcon /></button>
                </div>
            </div>
        </section>
    )
}
