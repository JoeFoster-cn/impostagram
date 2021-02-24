import React from 'react';
import './Profileinfo.css'

const ProfileInfo = () => {
    return (
        <div className="profilePhoto">
            <img id="profileImage" src="../images/Tommy.jpg" alt="tommy"/>
            <span>
                <h1 id="userName">watchtheroom</h1>
                <p id="name">Tommy Wiseau</p>
            </span>
        </div>
        
    )
}

export default ProfileInfo;