// import react
// component displays the logo with the name
import React from 'react';

// export component
export default function LogoHeader() {
    return (
        <div className="logo-display">
            <img className="logo-img" alt="logo" src="./logo.png" />
            <h1>WatchIt</h1>
        </div>
    )
}
