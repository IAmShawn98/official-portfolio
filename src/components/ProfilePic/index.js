// Dependencies.
import { Link } from "react-scroll";
import React from 'react';

// Default Styles.
import './style.css';

// Responsive Styles.
import './media/phone-320.css'; // smartphones, iPhone, portrait 480x320 phones.
import './media/nook-482.css'; // portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide.
import './media/tablet-642.css'; // portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones.
import './media/laptop-962.css'; // tablet, landscape iPad, lo-res laptops ands desktops. 
import './media/desktop-1026.css'; // big landscape tablets, laptops, and desktops.
import './media/highres-desktop-1282.css'; // hi-res laptops and desktops.


// Component 'ProfilePic'.
function ProfilePic() {
    return (
        <>
            {/* Image of Shawn */}
            <img id="ProfilePic" src="https://github.com/IAmShawn98/official-portfolio/blob/master/src/assets/images/iamshawn.jpg?raw=true" class="img-thumbnail mx-auto d-block" alt="iamshawn.jpg" />

            {/* Dive Deeper (Label & Button) */}
            <div className="row mx-auto d-block text-center text-white">
                <div id="DiveDeeper" className="col-md-12">
                    <h1 id="DeepDiveText" className="display-4">Dive Deeper!</h1>
                    <Link className="nav-link hvr-grow text-white"
                        activeClass="active" to="AboutMe"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        <button className="btn btn-info mx-auto d-block hvr-icon-sink">
                            About Me <i class="fa fa-arrow-circle-o-down hvr-icon"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

// Do export.
export default ProfilePic;