import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbarCont">

            <img className="instaLogo" src='../images/Instagram.png' />

            <div className="searchbar">
                <input type="text"
                    value= "Search"
                    results ="0">
                        
                </input>
                
            </div>

            <div className="iconContainer">
                <i className="fas fa-home"></i>
                <i className="far fa-paper-plane"></i>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <img className="profilePic" src="../images/Tommy.jpg" />

            </div>
        </nav>
    )
}

export default Navbar;