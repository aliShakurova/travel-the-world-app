import React from "react";

import "./HeroSection.scss";

function HeroSection (props) {

    return (
        <div className="hero-container">
            {/* <video src='/videos/hero-video.mp4' autoPlay loop muted /> */}
            {props.children}
        </div>
    )
}

export default HeroSection;