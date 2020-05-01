// Dependencies.
import React from 'react';

// Component 'IntroRibbon'.
function IntroRibbon() {
    return (
        // IntroRibbon Container.
        <>
            {/* Desktop Ribbon */}
            <div id="IntroRibbon-d" className="alert text-center text-white" role="alert">
                Welcome to my official site! I am Shawn Luther — A Web Developer! <i className="fa fa-wrench" aria-hidden="true"></i>
            </div>

            {/* Mobile Ribbon */}
            <div id="IntroRibbon-m" className="alert alert-primary" role="alert">
                Welcome to my official site! I am Shawn Luther — A Web Developer! <i className="fa fa-wrench" aria-hidden="true"></i>
            </div>
        </>
    );
}

// Do export.
export default IntroRibbon;