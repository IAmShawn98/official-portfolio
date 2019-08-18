// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDk9DgoCWaoS_OiVmFzQio8WFmNTq-Q-IM",
    authDomain: "offical-portfolio.firebaseapp.com",
    databaseURL: "https://offical-portfolio.firebaseio.com",
    projectId: "offical-portfolio",
    storageBucket: "",
    messagingSenderId: "1077306770175",
    appId: "1:1077306770175:web:18d350384b2ec81b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the root of our database.
var database = firebase.database();

// All connections are stored in this location.
var connectionsRef = database.ref("/connections");

// Each time a new connection is made, update '/connections'.
var connectedRef = database.ref(".info/connected");

// When the connection state changes....
connectedRef.on("value", function (snap) {

    // If they are connected....
    if (snap.val()) {

        // Add user to the connections list.
        var con = connectionsRef.push(true);
        // Otherwise, remove them if they disconnect.
        con.onDisconnect().remove();
    }
});

// When the page is loaded or when a connection changes....
connectionsRef.on("value", function (snap) {
    // Populate the user count to the DOM.
    $(".users").text(snap.numChildren());
});


// Smooth Scroll to 'About Me'.
$("#btnFirstDive").click(function () {
    // Make the scroll wait a second so the IDS needed to load are present at the time of the scroll request.
    setTimeout(100);
    // Show 'about me' image.
    $("#deepDiveBackground").show();
    // Show 'about me' content.
    $(".second").show();
    // Show 'My Work' Content.
    $(".third").show();
    $(".aboutMeParagraph").show();
    // Animate a smooth scroll.
    $('html,body').animate({
        scrollTop: $(".second").offset().top
    }, 'slow'); // Do it slowly.

    // Base Development Technologies (Progress Animation Transition).
    $(".html").animate({
        width: "100%"
    }, 500);
    $(".css").animate({
        width: "100%"
    }, 500);
    $(".js").animate({
        width: "85%"
    }, 500);

    // Base Tools, Frameworks and Libraries (Progress Animation Transition).
    $(".vsCode").animate({
        width: "90%"
    }, 500);
    $(".bsFramework").animate({
        width: "85%"
    }, 500);
    $(".jQuery").animate({
        width: "50%"
    }, 500);
});

// Smooth Scroll to 'About Me'.
$("#linkDiveDeeper").click(function () {
    // Make the scroll wait a second so the IDS needed to load are present at the time of the scroll request.
    setTimeout(100);
    // Show 'about me' image.
    $("#deepDiveBackground").show();
    // Show 'about me' content.
    $(".second").show();
    // Show 'My Work' Content.
    $(".third").show();
    // Animate a smooth scroll.
    $('html,body').animate({
        scrollTop: $(".second").offset().top
    }, 'slow'); // Do it slowly.

    // Base Development Technologies (Progress Animation Transition).
    $(".html").animate({
        width: "100%"
    }, 500);
    $(".css").animate({
        width: "100%"
    }, 500);
    $(".js").animate({
        width: "85%"
    }, 500);

    // Base Tools, Frameworks and Libraries (Progress Animation Transition).
    $(".vsCode").animate({
        width: "90%"
    }, 500);
    $(".bsFramework").animate({
        width: "85%"
    }, 500);
    $(".jQuery").animate({
        width: "50%"
    }, 500);
});

// Smooth Scroll to 'My Work'.
$(".my-work").click(function () {
    // Make the scroll wait a second so the IDS needed to load are present at the time of the scroll request.
    setTimeout(100);
    // Show 'about me' image.
    $("#deepDiveBackground").show();
    // Show 'about me' content.
    $(".second").show();
    // Show 'My Work' Content.
    $(".third").show();
    // Animate a smooth scroll.
    $('html,body').animate({
        scrollTop: $(".third").offset().top
    }, 'slow'); // Do it slowly.

    // Base Development Technologies (Progress Animation Transition).
    $(".html").animate({
        width: "100%"
    }, 500);
    $(".css").animate({
        width: "100%"
    }, 500);
    $(".js").animate({
        width: "85%"
    }, 500);

    // Base Tools, Frameworks and Libraries (Progress Animation Transition).
    $(".vsCode").animate({
        width: "90%"
    }, 500);
    $(".bsFramework").animate({
        width: "85%"
    }, 500);
    $(".jQuery").animate({
        width: "50%"
    }, 500);
});

// Back to 'Home' Section.
$(".home").click(function () {
    // Make the scroll wait a second so the IDS needed to load are present at the time of the scroll request.
    setTimeout(100);
    // Animate a smooth scroll.
    $('html,body').animate({
        scrollTop: $(".first").offset().top
    }, 'slow'); // Do it slowly.
});

// Prevent Project Slider From Auto Scrolling.
$('.carousel').carousel({
    interval: false
});

// Get footer year dynamically with moment.
var currentYear = moment().format('YYYY');
// Append current year to footer.
document.getElementById("dynamicYear").textContent = currentYear;