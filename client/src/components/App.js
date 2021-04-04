import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import PlayVideo from "./PlayVideo";

function App() {

    const [youtubevideoID, setVideoId] = useState('');

    const globalVideoId = (videoId) => {
        setVideoId(videoId)

        console.log(youtubevideoID);
    }

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

export default App;
