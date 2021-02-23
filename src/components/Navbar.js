function Navbar() {
    return (
        <div className="navbarCont">
            <div>
                <img className="instaLogo" src='../images/Instagram.png' />
            </div>
            <div className="searchBar">
                <input type="text"></input>

            </div>
            <div className="iconContainer">

                <i className="fas fa-home"></i>
                <i class="far fa-paper-plane"></i>
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <img src = "../images/Tommy.jpg" />
            </div>
        </div>
    )
}

export default Navbar;