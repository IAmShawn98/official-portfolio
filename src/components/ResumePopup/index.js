// Dependencies.
import React from 'react';

// Component 'ResumePopup'.
function ResumePopup() {
    return (
        // ResumePopup Container.
        <>
            {/* Resume Popup Modal */}
            <div className="modal animated fadeIn slow" id="ResumePopup" tabindex="-1" role="dialog" aria-hidden="true">
                {/* Modal Center Content Container */}
                <div className="modal-dialog modal-dialog-centered" role="document">
                    {/* Modal Context Container */}
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            {/* Modal Heading Brand */}
                            <h5 className="modal-title" id="exampleModalLongTitle">
                                <i className="fa fa-file-pdf-o text-danger"></i> My Resume (PDF)
                            </h5>
                            {/* Modal Exit 'X' Icon */}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {/* Modal Content Body */}
                        <div className="modal-body">
                            {/* Iframe (With Embeded Resume) */}
                            <iframe title="Resume Document" id="EmbededResume" src="https://drive.google.com/file/d/1vEr_3gHJIihzJ4akq-qChDoQQ8qux83g/preview" width="740" height="750">
                                {/* Fallback text in case iframes don't work correctly on older web browsers */}
                                <p className="lead">
                                    It looks like the web browser you're using doesn't support iframes.
                                    Iframes are pieces of code the browser uses for things such as
                                    embeded content. Please upgrade your browser if you want
                                    to view this. Sorry about that!
                                </p>
                            </iframe>
                        </div>
                        {/* Modal Controls */}
                        <div className="modal-footer">
                            {/* Download Resume As PDF */}
                            <a href="https://drive.google.com/u/0/uc?id=1vEr_3gHJIihzJ4akq-qChDoQQ8qux83g&export=download">
                                <button type="button" className="btn btn-danger">
                                    <i className="fa fa-download" aria-hidden="true"></i> Download Resume (PDF)
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Do export.
export default ResumePopup;