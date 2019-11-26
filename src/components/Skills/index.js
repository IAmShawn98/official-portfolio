// Dependencies.
import ReactTooltip from 'react-tooltip'
import React from 'react';
import './style.css';

// Responsive Styles.
import './media/phone-320.css'; // smartphones, iPhone, portrait 480x320 phones.
import './media/nook-482.css'; // portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide.
import './media/tablet-642.css'; // portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones.
import './media/laptop-962.css'; // tablet, landscape iPad, lo-res laptops ands desktops. 
import './media/desktop-1026.css'; // big landscape tablets, laptops, and desktops.
import './media/highres-desktop-1282.css'; // hi-res laptops and desktops.

// Component app routing.
function Skills() {
    return (
        <div id="MySkillsContainer">
            <div id="MySkillsHeader" className="jumbotron jumbotron-fluid p-4 m-0">
                <div className="container-fluid text-center hover-effect">
                    <i className="fa fa-language fa-5x mt-5" aria-hidden="true"></i>
                    <h1 id="SkillsText" className="display-4 mt-3">My SKill Set.</h1>
                    <p className="lead">
                        Click on any of the icons below to view my tech skills, resume, and
                        most notable projects to date!
                    </p>
                </div>
            </div>
            <nav id="SkillLinks" className="navbar navbar-expand-lg navbar-dark primary-color mb-5">
                <ul className="navbar-nav mx-auto nav nav-tabs">
                    <li data-tip="Full Stack Skills + Resume (PDF)" className="nav-item">
                        <a className="nav-link m-4 StackTab hvr-bounce-in" id="home-tab" data-toggle="tab" href="#MySkills" rel="noopener noreferrer">
                            <i className="fa fa-server fa-2x p-5" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li data-tip="My Work (Projects)" className="nav-item">
                        <a className="nav-link m-4 StackTab hvr-bounce-in" id="profile-tab" data-toggle="tab" href="#ProjectSlider" rel="noopener noreferrer">
                            <i className="fa fa-desktop fa-2x p-5" aria-hidden="true"></i>
                        </a>
                    </li>
                    <ReactTooltip />
                </ul>
            </nav>
            <div className="container tab-content">
                <div className="tab-pane fade show active" id="MySkills">
                    <div className="row">
                        <div className="card StackType animated bounceIn mr-5">
                            <div className="card-body text-white">
                                <div className="text-center">
                                    <i className="fa fa-paint-brush mb-2 fa-3x"></i>
                                    <h4 className="card-title">Front-End Development</h4>
                                    <hr />
                                </div>
                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>JavaScript</li>
                                    <li>Bootstrap</li>
                                    <li>jQuery</li>
                                    <li>Animate.css</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card StackType animated bounceIn">
                            <div className="card-body text-white">
                                <div className="text-center">
                                    <i className="fa fa-cogs mb-2 fa-3x" aria-hidden="true"></i>
                                    <h4 className="card-title">Back-End Development</h4>
                                    <hr />
                                </div>
                                <ul>
                                    <li>React.js</li>
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>Handlebars</li>
                                    <li>MongoDB</li>
                                    <li>MySQL</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div id="MyResumeLabel" className="animated bounceIn">
                            <div className="text-white">
                                <h1>My Resume</h1>
                            </div>
                        </div>
                    </div>
                    <iframe id="EmbededResume" className="animated bounceIn" src="https://drive.google.com/file/d/1vEr_3gHJIihzJ4akq-qChDoQQ8qux83g/preview" width="740" height="750">
                        <p className="lead">
                            It looks like the web browser you're using does not support iframes.
                            Iframes are pieces of code the browser uses for things such as
                            embeded content. Please upgrade your browser if you want
                            to view this. Sorry about that!
                        </p>
                    </iframe>
                </div>
                <div className="tab-pane fade" id="ProjectSlider">
                    <div id="ProjectContainer" className="jumbotron jumbotron m-0 sm-shadow">
                        <div className="animated bounceIn container">
                            <h2 className="display-4 text-white">My Projects!</h2>
                            <p className="lead text-white">
                                This is a short preview of each of my six most proud projects from school, work, and personal.
                                You can cycle through the list by tapping the small blue circles at the bottom of the project
                                cards or by swiping left or right on the screen. If you want to view more of my work, please
                                visit my <a className="text-danger" href="https://github.com/IAmShawn98">Github</a> or <a className="text-danger" href="https://www.linkedin.com/in/shawn-luther-a11109148/">LinkedIn</a> for more information.
                            </p>
                        </div>

                        <div className="tab-pane fade show" id="home">
                            <div id="carouselExampleControls" className="animated bounceIn carousel slide" data-interval="false">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="card project">
                                                    <a target="_blank" href="https://iamshawn98.github.io/gtm-quickshare/index.html">
                                                        <div className="card-img-top quickshare"></div>
                                                    </a>
                                                    <div className="card-body">
                                                        <h4 className="card-title text-primary"><a>GTM QuickShare</a></h4>
                                                        <p className="card-text">
                                                            GTM QuickShare is an internal file repository built to house your
                                                            teams Excel Macros, Workbooks, user guides, documentation, and
                                                            any piece of software that needs constant attention.
                                                        </p>
                                                        <a target="_blank" href="https://iamshawn98.github.io/gtm-quickshare/index.html">
                                                            <button type="button" className="btn btn-outline-success waves-effect p-2">
                                                                View Live
                                                        </button>
                                                        </a>
                                                        <a target="_blank" href="https://github.com/IAmShawn98/gtm-quickshare">
                                                            <button type="button" className="btn btn-outline-info waves-effect p-2">
                                                                View Github Source
                                                        </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="card project">
                                                    <a target="_blank" href="https://locobounce.herokuapp.com/">
                                                        <div className="card-img-top locobounce"></div>
                                                    </a>
                                                    <div className="card-body">
                                                        <h4 className="text-primary"><a>LocoBounce</a></h4>
                                                        <p className="card-text">
                                                            LocoBounce is an app for people looking to relocate to any city all around the world.
                                                            We have a dataset including a wide variety of tools and statistics that are
                                                            essential to know before taking your next big trip.
                                                        </p>
                                                        <a target="_blank" href="https://locobounce.herokuapp.com/">
                                                            <button type="button" className="btn btn-outline-success waves-effect p-2">
                                                                View Live
                                                        </button>
                                                        </a>
                                                        <a target="_blank" href="https://github.com/IAmShawn98/LocoBounce">
                                                            <button type="button" className="btn btn-outline-info waves-effect p-2">
                                                                View Github Source
                                                        </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="card project">
                                                    <a target="_blank" href="https://locobounce.herokuapp.com/">
                                                        <div className="card-img-top mongoscraper"></div>
                                                    </a>
                                                    <div className="card-body">
                                                        <h4 className="text-primary"><a>Mongo Web Scraper</a></h4>
                                                        <p className="card-text">
                                                            Scrape the latest news from the New York Times and save your favorite news articles.
                                                        </p>
                                                        <a target="_blank" href="https://locobounce.herokuapp.com/">
                                                            <button type="button" className="btn btn-outline-success waves-effect p-2">
                                                                View Live
                                                        </button>
                                                        </a>
                                                        <a target="_blank" href="https://github.com/IAmShawn98/LocoBounce">
                                                            <button type="button" className="btn btn-outline-info waves-effect p-2">
                                                                View Github Source
                                                        </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="card project">
                                                    <a target="_blank" href="https://iamshawn98.github.io/TriviaGame/">
                                                        <div className="card-img-top triviagame"></div>
                                                    </a>
                                                    <div className="card-body">
                                                        <h4 className="text-primary"><a>90s Nick Trivia Game</a></h4>
                                                        <p className="card-text">
                                                            Test your knowledge of classic 1990s Nickelodeon cartoons!
                                                        </p>
                                                        <a target="_blank" href="https://iamshawn98.github.io/TriviaGame/">
                                                            <button type="button" className="btn btn-outline-success waves-effect p-2">
                                                                View Live
                                                        </button>
                                                        </a>
                                                        <a target="_blank" href="https://github.com/IAmShawn98/TriviaGame">
                                                            <button type="button" className="btn btn-outline-info waves-effect p-2">
                                                                View Github Source
                                                        </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="card project">
                                                    <a target="_blank" href="https://iamshawn98.github.io/word-guess-game/">
                                                        <div className="card-img-top wordguessgame"></div>
                                                    </a>
                                                    <div className="card-body">
                                                        <h4 className="text-primary"><a>Hangman, Basically</a></h4>
                                                        <p className="card-text">
                                                            The game is simple, guess words correctly, secure high win streaks,
                                                            and stop Hangman from meeting his tragic fate. You have a limited
                                                            number of guesses to make, so be sure to choose letters wisely!
                                                        </p>
                                                        <a target="_blank" href="https://iamshawn98.github.io/word-guess-game/">
                                                            <button type="button" className="btn btn-outline-success waves-effect p-2">
                                                                View Live
                                                        </button>
                                                        </a>
                                                        <a target="_blank" href="https://github.com/IAmShawn98/word-guess-game">
                                                            <button type="button" className="btn btn-outline-info waves-effect p-2">
                                                                View Github Source
                                                        </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="card project">
                                                    <a target="_blank" href="https://www.youtube.com/watch?v=gGFVIu9c62k&feature=youtu.be">
                                                        <div className="card-img-top bamazon"></div>
                                                    </a>
                                                    <div className="card-body">
                                                        <h4 className="text-primary"><a>Bamazon Storefront</a></h4>
                                                        <p className="card-text">
                                                            Bamazon CLI (command line interface) is an Amazon-like storefront
                                                            created using Node js and MYSQL that allows you to buy, manage,
                                                            and supervise your very own store!
                                                        </p>
                                                        <a target="_blank" href="https://www.youtube.com/watch?v=gGFVIu9c62k&feature=youtu.be">
                                                            <button type="button" className="btn btn-outline-success waves-effect p-2">
                                                                View Live
                                                        </button>
                                                        </a>
                                                        <a target="_blank" href="https://github.com/IAmShawn98/bamazon-cli-app">
                                                            <button type="button" className="btn btn-outline-info waves-effect p-2">
                                                                View Github Source
                                                        </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="btn btn-primary carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="btn btn-primary carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a> */}
                                <ol className="carousel-indicators">
                                    <li id="prev" className="carousel-control-prev" href="#carouselExampleControls" data-slide="prev" data-slide-to="0" className="active"></li>
                                    <li id="next" className="carousel-control-next" href="#carouselExampleControls" data-slide="next" data-slide-to="1" className=""></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Do export.
export default Skills;