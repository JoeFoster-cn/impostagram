import React, {Component} from 'react'
import './Footer.css'


function Footer() {
    return (
        <nav className="footer-nav">
            <div className="links">
                <p>About - Help - Press - API - Jobs - Privacy - Terms</p>
                <p>Locations - Top Accounts - Hashtags - Language</p>
            </div>
            <div className="copyright">
                <i className="fa fa-copyright" aria-hidden="true"></i>
                <p>2020 INSTAGRAM FROM FACEBOOK</p>
            </div>

        </nav>
    )
}
export default Footer;