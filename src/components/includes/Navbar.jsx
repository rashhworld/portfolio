import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

function Navbar({ scrollToDiv }) {
    const isHome = useLocation().pathname === '/';
    const [getNav, setNav] = useState(false);

    const generateNavItem = (text, target, icon) => {
        return (
            <li className="nav-item">
                {isHome ? (
                    <span className="nav-link text-white" role="button" onClick={() => { scrollToDiv(target); setNav(false); }}>
                        <i className={`fa-solid fa-${icon}`}></i> {text}
                    </span>
                ) : (
                    <Link className="nav-link text-white" role="button" onClick={() => setNav(false)} to={target}>
                        <i className={`fa-solid fa-${icon}`}></i> {text}
                    </Link>
                )}
            </li>
        );
    };

    return (
        <nav className="navbar navbar-expand-lg bg-dar fixed-top" data-bs-theme="dark">
            <div className="container">
                <Link className="navbar-brand fw-medium" to="/">RASHH <span className="text-warning">WORLD</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setNav(!getNav)}>
                    <i className="fa-solid fa-bars-staggered text-warning"></i>
                </button>
                <div className={`collapse navbar-collapse justify-content-end${getNav ? ' show' : ''}`} id="navbarNavDropdown">
                    <ul className="navbar-nav text-uppercase fw-medium">
                        {generateNavItem("About Us", "about", "at")}
                        {generateNavItem("Our Services", "service", "laptop-code")}
                        {generateNavItem("Our Projects", "project", "box-open")}
                        {generateNavItem("Contact Us", "contact", "phone")}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar