import React from "react";

// import components
import LogoHeader from "./LogoHeader";
import SearchLayer from "./SearchLayer";

function Home(props) {
    return (
        <section className="homeLayout">
            <LogoHeader />
            <SearchLayer id={props.id} getTheVideolink={props.getTheVideolink} />
            <div className="footer">
                <p>Note: If you don't enter any url and click on search no video will get played.</p>
                <p>Disclaimer: There is still some bugs out there so... yeah</p>
                <p>Tip: <br />
                    1. Before playing the Video let everyone in the room check their controls to avoid any errors <br />
                    Thanks for visiting!
                </p>
            </div>
        </section>
    );
}

export default Home;