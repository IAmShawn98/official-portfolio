// Dependencies.
// import { Link } from "react-scroll";
import React from 'react';

// Component 'Navbar'.
function Navbar() {
    return (
        // Navbar Container.
        <div id="LandingPage">
            <nav className="navbar navbar-expand-lg navbar-dark bg-steel p-5">
                {/* Navbar Brand */}
                <a id="MainNavBrand" className="navbar-brand" href="/">Shawn Luther</a>
                {/* Mobile Collapse Icon (Hamburger) */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#NavToggle"
                    aria-controls="NavToggle" aria-expanded="false" aria-label="Toggle navigation">
                    {/* Hamburger Icon */}
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Navbar Mobile Collapse Container */}
                <div className="collapse navbar-collapse" id="NavToggle">
                    {/* Navbar Social Circles */}
                    <div id="ContainSocialCircles" className="text-center">
                        {/* Social Circles Brand */}
                        <h1 id="SocialCircleLabel" className="text-white font-weight-bold display-4 mb-3">My Social Circles</h1>
                        {/* GitHub Circle */}
                        <a href="https://github.com/IAmShawn98" target="_blank" rel="noopener noreferrer">
                            <button title="My Github Profile" className="hover-effect social-icon-github mr-4">
                                <i className="fab fa-github"></i>
                            </button>
                        </a>
                        {/* GitHub Circle */}
                        <a href="https://www.linkedin.com/in/shawn-luther-a11109148/" target="_blank" rel="noopener noreferrer">
                            <button title="My LinkedIn Profile" className="hover-effect social-icon-linkedin">
                                <i className="fab fa-linkedin"></i>
                            </button>
                        </a>
                    </div>
                    <ul id="SiteNavLinks" className="navbar-nav ml-auto nav-flex-icons">
                        {/* Item #1 - 'About Me' */}
                        <li className="nav-item">
                            <a className="nav-link hvr-grow text-white LinkLoadContent" href="#AboutMe">
                                <span className="text-info">&#123;</span> <i className="fa fa-info-circle" aria-hidden="true"></i> About Me <span className="text-info">&#125;</span>
                            </a>
                        </li>
                        {/* Item #2 - 'Skills & Projects' */}
                        <li className="nav-item">
                            <a className="nav-link hvr-grow text-white LinkLoadContent" href="#MyProjects">
                                <span className="text-info">&#123;</span> <i className="fa fa-code"></i> My Projects <span className="text-info">&#125;</span>
                            </a>
                        </li>
                        {/* Item #3 - 'Contact Info' */}
                        <li className="nav-item">
                            <a className="nav-link hvr-grow text-white LinkLoadContent" href="#footer">
                                <span className="text-info">&#123;</span> <i className="fa fa-address-card"></i> Contact <span className="text-info">&#125;</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

// Do export.
export default Navbar;