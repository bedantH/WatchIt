import React from 'react'

export default function Message(props) {
    let isSentByCurrentUser = false;

    const { text, user } = props.message;
    const trimmedName = props.name.trim().toLowerCase();

    console.log(text);
    console.log(user);

    if (trimmedName === user) {
        isSentByCurrentUser = true;
    }

    return (
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
