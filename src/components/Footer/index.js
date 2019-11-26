// Dependencies.
import React from 'react';
import './style.css';

// Responsive Styles.
import './media/phone-320.css'; // smartphones, iPhone, portrait 480x320 phones.
import './media/nook-482.css'; // portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide.
import './media/tablet-642.css'; // portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones.

// Component 'Footer'.
function Footer() {
    return (
        // Footer Container.
        <footer id="footer" class="page-footer font-small blue pt-4">
            <div class="container-fluid text-center text-md-left">
                <div class="row">
                    <div class="col-md-3 mt-md-0">
                        <h5 class="text-uppercase">Contact Info</h5>
                        Would you like to contact me for any reason? <br />
                        You can do so via phone or email. Otherwise,  <br />
                        check out my LinkedIn Profile and Github  <br />
                        for more information.
                        <br /> <br />
                        <p>
                            Email Me: shawnluther99@gmail.com
                        </p>
                        <p>
                            Call Me: 484-632-5178
                        </p>
                    </div>
                    <hr class="clearfix w-100 d-md-none pb-3" />
                    <div class="col-md-3 mb-md-0 mb-3">
                        <h5 class="text-uppercase">Social Media & News Articles</h5>
                        <ul class="list-unstyled">
                            <li>
                                <u><a target="_blank" href="https://www.bizjournals.com/philadelphia/news/2017/03/27/global-tax-sap-pathway-school-hiring-autism-worker.html" rel="noopener noreferrer">Philadelphia Business Journal</a></u>
                            </li>
                            <li>
                                <u><a target="_blank" href="https://www.linkedin.com/in/shawn-luther/" rel="noopener noreferrer">LinkedIn</a></u>
                            </li>
                            <li>
                                <u><a target="_blank" href="https://github.com/IAmShawn98" rel="noopener noreferrer">Github</a></u>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3 mb-md-0 mb-3">
                        <h5 class="text-uppercase">Shoutouts to These Awesome Resources</h5>
                        <ul class="list-unstyled">
                            <li>
                                <u><a target="_blank" href="https://www.transparenttextures.com/" rel="noopener noreferrer">transparenttextures.com</a></u>
                            </li>
                            <li>
                                <u><a target="_blank" href="https://bennettfeely.com/clippy/" rel="noopener noreferrer">bennettfeely.com</a></u>
                            </li>
                            <li>
                                <u><a target="_blank" href="https://cssgradient.io/" rel="noopener noreferrer">cssgradient.io</a></u>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Author Credit */}
            <div class="footer-copyright text-center py-3"> A Thing By
                <a href="https://www.linkedin.com/in/shawn-luther/" rel="noopener noreferrer"> Shawn Luther </a>
                2019
            </div>
        </footer>
    );
}

// Do export.
export default Footer;