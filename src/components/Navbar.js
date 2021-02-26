import './Navbar.css'
import React from 'react';

function Navbar() {
    return (
        <nav className="navbarCont">

            <img alt="alt" className="instaLogo" src='../images/Instagram.png' />
            <div className="searchbar">
                <input type="text"
                    placeholder= "Search">
                </input>
            </div>
            <div className="iconContainer">
                <i className="fas fa-home"></i>
                <i className="far fa-paper-plane"></i>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <img alt="alt" className="profilePic" src="../images/Tommy.jpg" />
            </div>                   
            <div className="inbox">
                <i className="fas fa-inbox"></i>
                </div>    
        </nav>
    )
}

export default Navbar;