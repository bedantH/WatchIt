// import react
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import components
import Home from "./Home";
import PlayVideo from "./PlayVideo";

// App component
function App() {

    // id of the youtube video 
    const [youtubevideoID, setVideoId] = useState('');

    const globalVideoId = (videoId) => {
        setVideoId(videoId)
    }

    // return component code
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home getTheVideolink={globalVideoId} id={youtubevideoID} />
                </Route>
                <Route exact path="/play">
                    <PlayVideo videoId={youtubevideoID} />
                </Route>
            </Switch>
        </Router>
    );
}

// export component
export default App;
