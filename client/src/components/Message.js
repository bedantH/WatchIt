// component displays messages sent from the api
// import react
import React from 'react'

// export component
export default function Message(props) {
    // boolean variable used to check if the message was sent by the current user or not
    let isSentByCurrentUser = false;

    // opening the message object
    const { text, user } = props.message;
    // trimming any empty spaces in the username and converting it to lowercase
    const trimmedName = props.name.trim().toLowerCase();

    if (trimmedName === user) {
        isSentByCurrentUser = true;
    }

    // return component
    return (
        // inline conditions
        // if the user is equal to the current user then we will render a different component
        isSentByCurrentUser
            ? (
                <div className="displayChatUser">
                    <p className="name">{user}</p>
                    <div className="chat-display">
                        <p>{text}</p>
                    </div>
                </div>
            ) :
            (<div className="displayChatAno">
                <div className="chat-display-ano">
                    <p>{text}</p>
                </div>
                <p className="name">{user}</p>
            </div>)
    )
}
