// Dependencies.
import React from 'react';

// Component 'AboutMe'.
function AboutMe() {
    return (
        // AboutMe Container.
        <>
            <div id="AboutMe">
                {/* 'About Me' Mobile */}
                <div id="AboutMeMobile">
                    <div className="jumbotron text-white bg-info">
                        {/* My Profile 2 Mobile */}
                        <img id="iamshawn-profile3" className="img-thumbnail" alt="iamshawn3.jpg" src="../../assets/misc/iamshawn2.jpg" />
                        <h2 className="mt-4 text-center">Shawn Luther</h2>
                        {/* Animated FadeIn Resume Link */}
                        <div className="text-center">
                            <div className="hvr-grow">
                                <a href="https://drive.google.com/file/d/1vEr_3gHJIihzJ4akq-qChDoQQ8qux83g/view" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-file-pdf-o text-danger"></i>
                                    <span className="text-white"> My Resume</span>
                                </a>
                            </div>
                        </div>
                        <hr className="bg-white" />
                        <h4 className="text-center">
                            A Bit About Me.... <span role="img" aria-label="CoolEmoji">😎</span>
                        </h4>
                        <p className="lead">
                            "I'm just a young developer with a passion for creation! I have always taken interested in the complexities of video games, computers, and of course, websites! After making my first "game" in Batch at the age of twelve I've been coding ever since. My first program was a multiple-choice quiz game. I looked up, “How to Make A Game In 15 Minutes” because I wanted to learn something quickly (I was being lazy). Funny thing is, I stumbled across a video titled, “How to make a computer game in 15 minutes!” by YouTube user ‘Ben Montoya’. He provided a simple tutorial with source code available to follow. I downloaded it, played it, and learned how it worked. This led to the creation of my first program, and the beginning of my journey into the realm of programming. This website was created to showcase my work and give you a concise breakdown of my most notable projects currently available. When I'm not coding, I'm either playing video games, hanging with friends, or on a good day, going out to eat, which is one of my favorite things to do!"
                       </p>
                    </div>
                    {/* Tech Details Context */}
                    <div className="lead text-white animated fadeInRight mt-5 text-center">
                        <p id="TechDetailsMobile" className="lead">
                            <h4 id="MyEducationHeading">My Stack</h4>
                            In 2019 I graduated from the University of Pennsylvania's LPS Coding Bootcamp with a certificate in Full Stack Development. Prior to going to school I mentored with a developer for two years building user interfaces for upcoming app features. The two cards down below represent tech I use interchangeably for different projects.
                        </p>
                    </div>
                    {/* Double Right Arrow 'Seperator' */}
                    <p className="display-4 text-center text-white">
                        <i className="fas fa-angle-double-down hover-effect"></i>
                    </p>
                    <div className="row">
                        {/* Front End Skills Card */}
                        <div className="col-xs-6 col-md-6 hvr-grow mb-2">
                            <div id="SkillsFrontEndMobile" className="card text-center animated fadeInLeft slow">
                                <div className="card-body">
                                    <img className="card-img-top" src="/assets/site-backgrounds/frontend.png" alt="frontend.png" />
                                    <ul className="TechCards">
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>JavaScript</li>
                                        <li>Bootstrap v4.4.1+</li>
                                        <li>jQuery</li>
                                        <li>Animate.css</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Back End Skills Card */}
                        <div className="col-xs-6 col-md-6 hvr-grow">
                            <div id="SkillsFrontEndMobile" className="card text-center animated fadeInLeft">
                                <div className="card-body">
                                    <img className="card-img-top" src="/assets/site-backgrounds/backend.png" alt="backend.png" />
                                    <ul className="TechCards">
                                        <li>React</li>
                                        <li>Node</li>
                                        <li>Express</li>
                                        <li>Firebase</li>
                                        <li>MongoDB</li>
                                        <li>MySQL</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Next Section ==> 'My Projects' Button Mobile */}
                    <div className="col-xs-12 text-white text-center">
                        <h4>Dive Even Deeper!</h4>
                        <p>
                            Click the button below to get a good look at some of my best work.
                            This list is always being updated to keep up with different
                            projects. If you want to see even more, check out my <a className="text-info" target="_blank" rel="noopener noreferrer" href="https://github.com/IAmShawn98">Github Profile</a>!
                        </p>
                        <button className="btn btn-info">My Projects</button>
                    </div>
                </div>

                {/* 'About Me' Jumbotron */}
                <div id="JumboAbout" className="container-fluid mb-4">
                    {/* Jumbotron Content Container */}
                    <div className="container mt-4">
                        {/* 'About Me' Context row */}
                        <div className="row">
                            {/* About Me Content Span */}
                            <div id="AboutContext">
                                <h2>A Bit About Me.... <span role="img" aria-label="CoolEmoji">😎</span></h2>
                                <p className="lead">
                                    "I'm just a young developer with a passion for creation! I have always taken interested in the complexities of video games, computers, and of course, websites! After making my first "game" in Batch at the age of twelve I've been coding ever since. My first program was a multiple-choice quiz game. I looked up, “How to Make A Game In 15 Minutes” because I wanted to learn something quickly (I was being lazy). Funny thing is, I stumbled across a video titled, “How to make a computer game in 15 minutes!” by YouTube user ‘Ben Montoya’. He provided a simple tutorial with source code available to follow. I downloaded it, played it, and learned how it worked. This led to the creation of my first program, and the beginning of my journey into the realm of programming. This website was created to showcase my work and give you a concise breakdown of my most notable projects currently available. When I'm not coding, I'm either playing video games, hanging with friends, or on a good day, going out to eat, which is one of my favorite things to do!"
                                </p>
                            </div>
                            {/* My Profile 2 */}
                            <div className="col-sm">
                                <img id="iamshawn-profile2" className="img-thumbnail" alt="iamshawn2.jpg" src="../../assets/misc/iamshawn2.jpg" />
                            </div>
                        </div>
                        {/* My Profile Name Tag */}
                        <div className="row">
                            <div className="col-sm-4">
                                <h1 className="display-4 mt-4 text-center">Shawn Luther</h1>
                            </div>
                            {/* Animated FadeIn Resume Link */}
                            <div className="animated fadeInRight fast row">
                                <div className="social-link-resume p-2 ml-5 hvr-grow">
                                    <a data-toggle="modal" data-target="#ResumePopup" href="#ResumePopup" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-file-pdf-o text-danger"></i>
                                        <span className="text-white"> My Resume</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Skill Card Container */}
                <div className="container">
                    {/* Next Section ==> 'My Projects' Button */}
                    <button id="ViewProjectsBtn" className="hvr-icon-down">
                        <i className="fas fa-arrow-down hvr-icon mr-3"></i>
                    </button>
                    <div className="row">
                        {/* Front End Skills Card */}
                        <div className="col-sm-4 hvr-grow">
                            <div id="SkillsFrontEnd" className="card text-center animated fadeInLeft slow">
                                <div className="card-body">
                                    <img className="card-img-top" src="/assets/site-backgrounds/frontend.png" alt="frontend.png" />
                                    <ul className="TechCards">
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>JavaScript</li>
                                        <li>Bootstrap v4.4.1+</li>
                                        <li>jQuery</li>
                                        <li>Animate.css</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Back End Skills Card */}
                        <div className="col-sm-4 hvr-grow">
                            <div id="SkillsFrontEnd" className="card text-center animated fadeInLeft">
                                <div className="card-body">
                                    <img className="card-img-top" src="/assets/site-backgrounds/backend.png" alt="backend.png" />
                                    <ul className="TechCards">
                                        <li>React</li>
                                        <li>Node</li>
                                        <li>Express</li>
                                        <li>Firebase</li>
                                        <li>MongoDB</li>
                                        <li>MySQL</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Tech Card Details */}
                        <div className="col-sm-4 mt-5">
                            <div className="col-sm-1 float-left p-5">
                                {/* Double Right Arrow 'Seperator' */}
                                <p id="TechDetailsSeperator" className="lead text-white">
                                    <i className="fas fa-angle-double-left hover-effect"></i>
                                </p>
                            </div>
                            {/* Tech Details Context */}
                            <div className="lead text-white animated fadeInRight mt-5">
                                <p id="TechDetails" className="lead">
                                    <h4 id="MyEducationHeading">Education & Stack</h4>
                                    In 2019 I graduated from the University of Pennsylvania's LPS Coding Bootcamp with a certificate in Full Stack Development. Prior to going to school I mentored with a developer for two years building user interfaces for upcoming app features. The two cards to the left represent tech I use interchangeably for different projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Do export.
export default AboutMe;