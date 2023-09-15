import React from "react";
import HorizontalCard from "./HorizontalCard";

import "./TravelDistanation.scss";

function TravelDistanation() {

    const advices = [
        { title: "Determining Goals and Desires", text: "Consider your interests. Write a list of activities that you enjoy. Brainstorm others that you would like to try for the first time. Narrow down your destination options by knowing exactly what you expect to be there waiting for you.", image: "/images/goals.png" },
        { title: "Evaluating Finances and Time", text: "Determine your budget. Figure out exactly how much you can afford to spend on travel, so that you aren’t breaking the bank for this trip. At the same time, determine what luxuries you can and can’t do without. With this info, whittle your list of preferred destinations down even further according to cost.", image: "/images/finances.png" },
        { title: "Considering Safety and Convenience", text: "Think about convenience. Research the realities of day-to-day life in your dream destinations, as well as any hurdles that you will have to overcome in order to get there. Then ask yourself how much hassle you are willing to endure in order to travel. Weigh this against the benefits of travelling there to make sure that your trip will still be a positive experience in the end. Consider things like", image: "/images/safety.png" },
        { title: "Making the Final Decision", text: "Review your final choices. If you’ve narrowed your list to a couple of choices instead of one stand-out, compare the two. Apply the same criteria that you used to eliminate other choices. Find out if one seems more sensible, doable, and enjoyable than the other.", image: "/images/decision.png" }
    ]

    return (
        <div className="travel-distanation-container">
            <h2 className="title">How to Choose a Travel Destination</h2>
            {advices.map(advice => <HorizontalCard data={advice}/>)}
        </div>
    )
}

export default TravelDistanation;