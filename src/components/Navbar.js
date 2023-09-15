import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

import './Navbar.scss';

function Navbar() {
    const [isMenuShown, setIsMenuShown] = useState(false);
    const handleClick = () => setIsMenuShown(!isMenuShown);

    const closeMobileMenu = () => setIsMenuShown(false)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>Explore the world <TravelExploreIcon fontSize="large" /></Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {isMenuShown ? <CloseIcon style={{ fill: "#FFF" }} /> : <MenuIcon style={{ fill: "#FFF" }} />}
                    </div>
                    <ul className={isMenuShown ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/news' className="nav-links" onClick={closeMobileMenu}>News</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className="nav-links" onClick={closeMobileMenu}>Offers</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/ourTeam' className="nav-links" onClick={closeMobileMenu}>Our Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/sign-up' className="nav-links sign-in" onClick={closeMobileMenu}>Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;