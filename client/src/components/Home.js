import React from "react";

// import components
import LogoHeader from "./LogoHeader";
import SearchLayer from "./SearchLayer";

function Home(props) {
    return (
        <main>
            <section className="homeLayout">
                <LogoHeader />
                <SearchLayer id={props.id} getTheVideolink={props.getTheVideolink} />
            </section>
            <div className="grid-layout">
                <div className="box-design">
                    <img src="./pattern.png" alt="backgroundimage" />
                </div>
                <div className="headphones-design">
                    <img src="./headphonestra.png" alt="backgroundimage" />
                </div>
            </div>
        </main>
    );
}

export default Home;