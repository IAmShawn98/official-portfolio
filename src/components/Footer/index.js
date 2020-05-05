// Dependencies.
import React from 'react';

// Component 'Footer'.
function Footer() {
    return (
        // Footer Container.
        <footer id="footer" className="page-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-3 mt-md-0">
                        <h5 className="text-uppercase">Contact Info</h5>
                        Would you like to contact me for any reason? <br />
                        You can do so via phone or email. Otherwise,  <br />
                        check out my LinkedIn Profile and Github  <br />
                        for more information. If you don't hear back <br />
                        from me via phone please contact me by email or <br />
                        find me on LinkedIn. Thank you!
                        <br /> <br />
                        <p>
                            Email Me: shawnluther99@gmail.com
                        </p>
                        <p>
                            Call Me: 484-632-5178
                        </p>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3" />
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Social Media & News Articles</h5>
                        <ul className="list-unstyled">
                            <li>
                                <u>» <a target="_blank" href="https://www.bizjournals.com/philadelphia/news/2017/03/27/global-tax-sap-pathway-school-hiring-autism-worker.html" rel="noopener noreferrer">Philadelphia Business Journal</a></u>
                            </li>
                            <li>
                                <u>» <a target="_blank" href="https://www.linkedin.com/in/shawn-luther/" rel="noopener noreferrer">LinkedIn</a></u>
                            </li>
                            <li>
                                <u>» <a target="_blank" href="https://github.com/IAmShawn98" rel="noopener noreferrer">Github</a></u>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Shoutouts to These Awesome Resources</h5>
                        <ul className="list-unstyled">
                            <li>
                                <u>» <a target="_blank" href="https://www.transparenttextures.com/" rel="noopener noreferrer">transparenttextures.com</a></u>
                            </li>
                            <li>
                                <u>» <a target="_blank" href="https://bennettfeely.com/clippy/" rel="noopener noreferrer">bennettfeely.com</a></u>
                            </li>
                            <li>
                                <u>» <a target="_blank" href="https://cssgradient.io/" rel="noopener noreferrer">cssgradient.io</a></u>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Author Credit */}
            <div className="footer-copyright text-center py-3"> A Thing By
                <a href="https://www.linkedin.com/in/shawn-luther/" rel="noopener noreferrer"> Shawn Luther </a> |
                2019 - <span id="CurrentYear"></span>
            </div>
        </footer>
    );
}

// Do export.
export default Footer;