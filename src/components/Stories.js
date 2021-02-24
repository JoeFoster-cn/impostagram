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
                <h1>thomas</h1>
                <p id="timeAgo">8 MINUTES AGO</p>
                <h1>poppy</h1>
                <p id="timeAgo">2 MINUTES AGO</p>
                <h1>prince</h1>
                <p id="timeAgo">11 HOURS AGO</p>
                <h1>eva</h1>
                <p id="timeAgo">8 MINUTES AGO</p>
            </div>
            <div className="liveButtons">
                <button id="live1">LIVE</button>
                &nbsp; &nbsp;
                <button id="live2">LIVE</button>
            </div>
        </div>
    ) 
}

export default Stories;