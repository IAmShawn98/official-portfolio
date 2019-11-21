// Dependencies.
import { Link, animateScroll as scroll } from "react-scroll";
import React from 'react';
import './style.css';

// Responsive Styles.
import './media/phone-320.css'; // smartphones, iPhone, portrait 480x320 phones.
import './media/nook-482.css'; // portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide.
import './media/tablet-642.css'; // portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones.
import './media/laptop-962.css'; // tablet, landscape iPad, lo-res laptops ands desktops. 
import './media/desktop-1026.css'; // big landscape tablets, laptops, and desktops.
import './media/highres-desktop-1282.css'; // hi-res laptops and desktops.

// Component 'Navbar'.
function Navbar() {
    return (
        // Navbar Container
        <nav className="navbar navbar-expand-lg navbar-dark primary-color">
            {/* Navbar Brand */}
            <a className="navbar-brand" href="/">Shawn Luther</a>
            {/* Navbar Mobile Collapse */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#AppNav" aria-expanded="false">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* Navbar Mobile Collapse Content Container */}
            <div className="collapse navbar-collapse" id="AppNav">
                {/* Social Circles Container*/}
                <ul className="navbar-nav ml-auto">
                    <div className="row">
                        <div className="col-md-12 offset-2 text-center">
                            {/* Social Circle Brand */}
                            <h2 id="SocialCircleLabel" className="text-white">My Social Circles</h2>
                            {/* Social Circle (Github) */}
                            <a className="hover-effect" target="_blank" rel="noopener noreferrer" href="https://github.com/IAmShawn98"><i className="fa fa-github mr-4 hvr-bounce-out" aria-hidden="true"></i></a>
                            {/* Social Circle (Linkedin) */}
                            <a className="hover-effect" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shawn-luther-a11109148/"><i className="fa fa-linkedin hvr-bounce-out" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </ul>
                {/* Navbar App Routing */}
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link hvr-grow text-white"
                            activeclassName="active" to="AboutMe"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            <span className="text-turk">&#123;</span> <i className="fa fa-info-circle" aria-hidden="true"></i> About Me <span className="text-turk">&#125;</span>
                        </Link>
                        {/* <a class="nav-link hvr-grow" href="/"><span className="text-turk">&#123;</span> <i class="fa fa-info-circle" aria-hidden="true"></i> About Me <span className="text-turk">&#125;</span></a> */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link hvr-grow text-white"
                            activeClass="active" to="MySkillsHeader"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            <span className="text-turk">&#123;</span> <i className="fa fa-code"></i> Skills & Projects <span className="text-turk">&#125;</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link hvr-grow text-white"
                            activeClass="active" to="footer"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            <span className="text-turk">&#123;</span> <i className="fa fa-address-card"></i> Contact <span className="text-turk">&#125;</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

// Do export.
export default Navbar;