import React from 'react';
import './Stories.css'

const Stories = () => {
    return (
        <div className="storiesContainer">
            <p id="stories">Stories</p>
            <p id="watch">Watch All</p>
            <StoryExamples/>
        </div>
    )
} 

const StoryExamples = () => {
    return (
        <div className="storyExamples">
            <div className="images">
                <img className="img1" src="../images/example1.jpg" alt="example1"/>
                <img className="img2" src="../images/example2.jpg" alt="example2"/>
                <img className="img3" src="../images/example3.jpg" alt="example3"/>
                <img className="img4" src="../images/example4.jpg" alt="example4"/>
            </div>
            <div className="info">
                <h1>Tommy Wiseau</h1>
                <p id="timeAgo">8 MINUTES AGO</p>
                <h1>Tommy Wiseau</h1>
                <p id="timeAgo">8 MINUTES AGO</p>
                <h1>Tommy Wiseau</h1>
                <p id="timeAgo">8 MINUTES AGO</p>
                <h1>Tommy Wiseau</h1>
                <p id="timeAgo">8 MINUTES AGO</p>
            </div>
            {/* <div className="liveButtons">
                <button id="live">LIVE</button>
                <button id="live">LIVE</button>
                <button id="live">LIVE</button>
                <button id="live">LIVE</button>
            </div> */}
                {/* <h1> Tommy Wiseau </h1>
                <p className="timeAgo">8 MINUTES AGO</p>
                <button className="live">LIVE</button>
            </span> */}
                
                {/* <h1> The Queen </h1>
                <p className="timeAgo">6 MINUTES AGO</p>
                <button className="live">LIVE</button>
            </span> */}
        </div>
    ) 
}

export default Stories;