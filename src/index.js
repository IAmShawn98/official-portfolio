// Dependencies.
import React from "react"; // Define React.
import ReactDOM from "react-dom"; // Define React DOM.
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App"; // Import App Components.

// Import Service Worker Code.
import registerServiceWorker from './registerServiceWorker';

// Import Firebase Services.
import * as firebase from 'firebase';

// Firebase App Config.
var firebaseConfig = {
    apiKey: "AIzaSyARu596ziSRqlsGcjGfHosZ6aYzMDMReD0",
    authDomain: "iamshawn-projects.firebaseapp.com",
    databaseURL: "https://iamshawn-projects.firebaseio.com",
    projectId: "iamshawn-projects",
    storageBucket: "iamshawn-projects.appspot.com",
    messagingSenderId: "914547989048",
    appId: "1:914547989048:web:7c48c0d783f23df16ee4cd"
};

// Initialize Firebase.
firebase.initializeApp(firebaseConfig);

// Renders App Components in the 'DOM HTML Template', which is a child of the static 'public' folder.
ReactDOM.render(<App />, document.getElementById('root'));

// Runs Service Worker Function.
registerServiceWorker();

// If the user clicks on any of the following buttons and links, show all site sections.
["btnAboutMe", "SkillsAndProjects", "ContactInfo"].forEach(() => document.addEventListener("click", ShowContent));

// Show Sections if event any triggered ^.
function ShowContent() {
    document.getElementById("AboutMe").style.display = "block";
}

// Top Scroll Button.
let btnTopScroll = document.getElementById("TopScroll");

// Site Sections DOM Elements:
let AboutMe = document.getElementById("AboutMe");
let MyProjects = document.getElementById("MyProjects");
let footer = document.getElementById("footer");

// Top Scroll false visibility by default.
btnTopScroll.style.display = "none";

// Disable all sections by default.
AboutMe.style.display = "none";
MyProjects.style.display = "none";
footer.style.display = "none";

// Show/hide top scroll button if 20px document scrolled.
window.onscroll = () => { TopScroll() };

function TopScroll() {
    // Show if the user scrolls down 20px.
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTopScroll.style.display = "block";
        AboutMe.style.display = "block";
        MyProjects.style.display = "block";
        footer.style.display = "block";
    } else {
        // Hide if the user is at the top of the page at 0px.
        if (document.documentElement.scrollTop === 0) {
            btnTopScroll.style.display = "none";
            AboutMe.style.display = "none";
            MyProjects.style.display = "none";
            footer.style.display = "none";
        }

    }
}

// Automatically update footer year.
var date = new Date();
document.getElementById("CurrentYear").innerHTML = date.getFullYear();

// Keep Alive.
setInterval(() => {
    document.location.reload(true);
}, 1.2e+6); // Ping every 20 minutes.