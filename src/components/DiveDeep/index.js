// Dependencies.
import React from 'react';

// Component 'DiveDeep'.
function DiveDeep() {
    return (
        // DiveDeep Container.
        <div id="DiveDeep" className="container-fluid text-center">
            {/* My Profile Picture */}
            <img id="iamshawn-profile" className="img-thumbnail z-depth-1-half" alt="iamshawn.jpg" src="../../assets/misc/iamshawn.jpg" />
            {/* Dive Deep Label */}
            <h1 id="DiveDeepLabel" className="display-4 text-white">Dive Deeper!</h1>
            {/* Dive Deep ('About Me' Link) */}
            <a id="btnAboutMe" href="#AboutMe" className="btn btn-info hvr-icon-down">
                About Me <i className="fas fa-angle-double-down hvr-icon"></i>
            </a>
        </div>
    );
}

// Do export.
export default DiveDeep;