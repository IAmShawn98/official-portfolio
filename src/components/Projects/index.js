// Dependencies.
import React from 'react';

// Component 'AboutMe'.
function Projects() {
    return (
        // AboutMe Container.
        <>
            <div id="MyProjects">
                {/* Gradient Animated Jumbotron Container */}
                <div id="MyProjectsHeader" class="jumbotron text-center">
                    {/* 'My Projects' Context */}
                    <h1 class="card-title display-3"><strong>&lt; My Projects &gt;</strong></h1>
                    <p class="lead card-text">
                        This is a short preview of six notable projects from work, school, and personal.<br />
                        You can check them out by clicking on 'View Live' at the bottom of each project card<br />
                        or by scrolling down on your phone and tapping on any of the projects. <br />
                        There is also the option of viewing them on github by clicking or tapping <br />
                        'View On Github', which will also give you access to <br />other past projects
                    </p>
                    {/* LinkedIn Profile */}
                    <a class="fa-lg p-4 m-2 li-ic hvr-grow"><i class="fab fa-linkedin-in text-white display-4"></i></a>
                    {/* Github Profile */}
                    <a class="fa-lg p-4 m-2 tw-ic hvr-grow"><i class="fab fa-github text-white display-4"></i></a>
                </div>
                <h1 className="text-white text-center display-4 mb-4">
                    <i class="fa fa-star text-warning" aria-hidden="true"></i> <i class="fa fa-star text-warning" aria-hidden="true"></i>  Projects <i class="fa fa-star text-warning" aria-hidden="true"></i> <i class="fa fa-star text-warning" aria-hidden="true"></i>
                    <hr />
                </h1>
                <div className="row p-0 m-0">
                    {/* Project - 'GTM QuickShare' */}
                    <div class="card mx-auto project">
                        {/* <!-- Project Card --> */}
                        <img class="card-img-top" src="./assets/project-thumbnails/gtmQuickShare.png" alt="Card image cap" />
                        {/* <!-- Porject Content --> */}
                        <div class="card-body">
                            {/* <!-- Porject Name --> */}
                            <h4 class="card-title text-primary"><a>GTM QuickShare</a></h4>
                            {/* <!-- Project Excerpt --> */}
                            <p class="card-text text-info">GTM QuickShare is a file repository that specializes in maintaining your teams versioned tax software. We provide space to store and manage your files, bridging the gap between you and your clients. We keep all of your files categorized and organized, synchronously!</p>
                            {/* <!-- Link to Github & Live Project--> */}
                            <a target="_blank" href="https://gtm-quickshare.herokuapp.com/" rel="noopener noreferrer">
                                <button type="button" class="btn btn-outline-success waves-effect p-2 mr-2 ">View Live</button>
                            </a>
                            <a target="_blank" href="https://github.com/IAmShawn98/official-portfolio" rel="noopener noreferrer">
                                <button type="button" class="btn btn-outline-primary waves-effect p-2 m-0 ">View On Github</button>
                            </a>
                        </div>
                    </div>
                    {/* <!-- Project - 'Mongo Web Scraper' --> */}
                    <div class="card mx-auto project">
                        {/* <!-- Project Card --> */}
                        <img class="card-img-top" src="./assets/project-thumbnails/scraper.png" alt="Card image cap" />
                        {/* <!-- Project Content --> */}
                        <div class="card-body">
                            {/* <!-- Project Name --> */}
                            <h4 class="card-title text-primary"><a>Mongo Web Scraper</a></h4>
                            {/* <!-- Project Excerpt --> */}
                            <p class="card-text text-info">Scrape the latest news from the New York Times and save your favorite news articles.</p>
                            {/* <!-- Link to Github & Live Project--> */}
                            <a target="_blank" href="https://web-scraper-sl.herokuapp.com/" rel="noopener noreferrer">
                                <button type="button" class="btn btn-outline-success waves-effect p-2 mr-2 ">View Live</button>
                            </a>
                            <a target="_blank" href="https://github.com/IAmShawn98/web-scraper" rel="noopener noreferrer">
                                <button type="button" class="btn btn-outline-primary waves-effect p-2 m-0 ">View On Github</button>
                            </a>
                        </div>
                    </div>
                    {/* <!-- Project - 'LocoBounce' --> */}
                    <div class="card mx-auto project">
                        {/* <!-- Project Card --> */}
                        <img class="card-img-top" src="./assets/project-thumbnails/LocoBounce.png" alt="Card image cap" />
                        {/* <!-- Project Content --> */}
                        <div class="card-body">
                            {/* <!-- Project Title --> */}
                            <h4 class="card-title text-primary"><a>LocoBounce</a></h4>
                            {/* <!-- Project Excerpt --> */}
                            <p class="card-text text-info">LocoBounce is an app for people looking to relocate to any city all around the world. We have a dataset including a wide variety of tools and statistics that are essential to know before taking your next big trip.</p>
                            {/* <!-- Link to Github & Live Project--> */}
                            <a target="_blank" href="https://locobounce.herokuapp.com/" rel="noopener noreferrer">
                                <button type="button" class="btn btn-outline-success waves-effect p-2 mr-2 ">View Live</button>
                            </a>
                            <a target="_blank" href="https://github.com/IAmShawn98/LocoBounce" rel="noopener noreferrer">
                                <button type="button" class="btn btn-outline-primary waves-effect p-2 m-0 ">View On Github</button>
                            </a>
                        </div>
                    </div>
                    {/* <!-- Project - 'Trivia Game' --> */}
                    <div class="card mx-auto project">
                        {/* <!-- Project Card --> */}
                        <img class="card-img-top" src="./assets/project-thumbnails/triviaGame.png" alt="Card image cap" />
                        {/* <!-- Project Contemt --> */}
                        <div class="card-body">
                            {/* <!-- Project Title --> */}
                            <h4 class="card-title text-primary"><a>90s Trivia Game</a></h4>
                            {/* <!-- Project Excerpt --> */}
                            <p class="card-text text-info">Test your knowledge of classic 1990s Nickelodeon cartoons!</p>
                            {/* <!-- Link to Github & Live Project--> */}
                            <a target="_blank" href="https://iamshawn98.github.io/TriviaGame/" rel="noopener noreferrer">
                                <button type="button" class="btn btn-outline-success waves-effect p-2 mr-2 ">View Live</button>
                            </a>
                            <a target="_blank" href="https://github.com/IAmShawn98/TriviaGame" rel="noopener noreferrer">
                                <button type="button" class="btn btn-outline-primary waves-effect p-2 m-0 ">View On Github</button>
                            </a>
                        </div>
                    </div>
                    {/* <!-- Project - 'Hangman, Basically!' --> */}
                    <div class="card mx-auto project">
                        {/* <!-- Project Card --> */}
                        <img class="card-img-top" src="./assets/project-thumbnails/wordGuessGame.png" alt="Card image cap" />
                        {/* <!-- Project Content --> */}
                        <div class="card-body">
                            {/* <!-- Project Name --> */}
                            <h4 class="card- text-primary"><a>Hangman, Basically!</a></h4>
                            {/* <!-- Project Excerpt --> */}
                            <p class="card-text text-info">The game is simple, guess words correctly, secure high win streaks, and stop Hangman from meeting his tragic fate. You have a limited number of guesses to make, so be sure to choose letters wisely!</p>
                            {/* <!-- Link to Github & Live Project--> */}
                            <a target="_blank" href="https://iamshawn98.github.io/word-guess-game/" rel="noopener noreferrer">
                                <button type="button" class="btn btn-outline-success waves-effect p-2 mr-2 ">View Live</button>
                            </a>
                            <a target="_blank" href="https://github.com/IAmShawn98/word-guess-game" rel="noopener noreferrer">
                                <button type="button" class="btn btn-outline-primary waves-effect p-2 m-0 ">View On Github</button>
                            </a>
                        </div>
                    </div>
                    {/* <!-- Project - 'Bamazon' --> */}
                    <div class="card mx-auto project">
                        {/* <!-- Project Card --> */}
                        <img class="card-img-top" src="./assets/project-thumbnails/bamazonCLI.png" alt="Card image cap" />
                        {/* <!-- Project Content --> */}
                        <div class="card-body">
                            {/* <!-- Project Title --> */}
                            <h4 class="card-title text-primary"><a>Bamazon Storefront</a></h4>
                            {/* <!-- Project Excerpt --> */}
                            <p class="card-text text-info">Bamazon CLI (command line interface) is an Amazon-like storefront created using Node js and MYSQL that allows you to buy, manage, and supervise your very own store!</p>
                            {/* <!-- Link to Github & Live Project--> */}
                            <a target="_blank" href="https://www.youtube.com/watch?v=gGFVIu9c62k&feature=youtu.be" rel="noopener noreferrer">
                                <button type="button" class="btn btn-outline-success waves-effect p-2 mr-2 ">View Live</button>
                            </a>
                            <a target="_blank" href="https://github.com/IAmShawn98/bamazon-cli-app" rel="noopener noreferrer">
                                <button type="button" class="btn btn-outline-primary waves-effect p-2 m-0 ">View On Github</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
// Do export.
export default Projects;