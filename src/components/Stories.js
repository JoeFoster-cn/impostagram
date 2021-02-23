import React from 'react';
import './Stories.css'

const Stories = () => {
    return (
        <div className="storiesContainer">
            <p className="Stories">Stories</p>
            <p className="Watch">Watch All</p>
            <StoryExamples/>
        </div>
    )
} 

const StoryExamples = () => {
    return (
        <div className="storyExamples">
            <span className="example1">
                <img src="/example1.jpg" alt="example1"/>
                <h1> TEST NAME </h1>
                <p className="timeAgo">8 MINUTES AGO</p>
                <button className="live">LIVE</button>
            </span>
        </div>
    ) 
}

export default Stories;