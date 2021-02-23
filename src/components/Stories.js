import React from 'react';
import './Stories.css'


const Stories = () => {
    return (
        <div className="storiesContainer">
            <p className="Stories">Stories</p>
            <p classname="Watch">Watch All</p>
            <storyExamples/>
        </div>
    )
}

const storyExamples = () => {
    return (
        <div className="storyExamples">
            <p>test</p>
            <img src="/example1.jpg" alt="example1"/>
        </div>
    ) 
}

export default Stories;