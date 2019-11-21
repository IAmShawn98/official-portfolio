// Dependencies.
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


// Component 'Jumbotron'.
function Jumbotron() {
    return (
        // "Jumbotron" Container. I promise it started out as a Jumbotron, but an alert worked better!
        <div id="alertBubble" class="alert alert-primary text-center" role="alert">
            {/* Alert Content */}
            <h4 id="bubbleBrand" className="mt-2">
                Welcome to my official portfolio! I am Shawn Luther — A Full Stack Web Developer! <i class="fa fa-wrench" aria-hidden="true"></i>
            </h4>
        </div>
    );
}

// Do export.
export default Jumbotron;
