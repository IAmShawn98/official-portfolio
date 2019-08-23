$(document).ready(function () {
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


    // Smooth Scroll to ---> 'About Me'.
    $('.linkDiveDeeper').on('click', function (event) {
        // Prevent Reloading.
        event.preventDefault()

        // Load the '.second' and '.third' classes
        // so that we can scroll to them.
        $(".second").show();
        $(".third").show();

        // Smooth Scroll Animate to the 'second' class.
        $('html,body').animate({
            scrollTop: $(".second").offset().top
        }, 'slow'); // Do it slowly.

        // Base Development Technologies (Progress Bar Animation Transition).

        // HTML Bar Progress.
        $(".html").animate({
            width: "90%"
        }, 500);
        // CSS Bar Progress.
        $(".css").animate({
            width: "78%"
        }, 500);
        // JS Bar Progress.
        $(".js").animate({
            width: "68%"
        }, 500);
        // BATCH Bar Progress.
        $(".batch").animate({
            width: "48%"
        }, 500);
        // VBS Bar Progress.
        $(".vbs").animate({
            width: "28%"
        }, 500);
        // cSharp Bar Progress.
        $(".cSharp").animate({
            width: "22%"
        }, 500);
        // Python Bar Progress.
        $(".python").animate({
            width: "10%"
        }, 500);

        // Base Tools, Frameworks and Libraries (Progress Bar Animation Transition).

        // VS Code Bar Progress.
        $(".vsCode").animate({
            width: "90%"
        }, 500);
        // Bootstrap Bar Progress.
        $(".bsFramework").animate({
            width: "85%"
        }, 500);
        // jQuery Bar Progress.
        $(".jQuery").animate({
            width: "50%"
        }, 500);
    });

    // Smooth Scroll to ---> 'My Work'.
    $('.my-work').on('click', function (event) {
        // Prevent Reloading.
        event.preventDefault()

        // Load the '.second' and '.third' classes
        // so that we can scroll to them.
        $(".second").show();
        $(".third").show();


        // Smooth Scroll Animate to the 'third' class.
        $('html,body').animate({
            scrollTop: $(".third").offset().top
        }, 'slow'); // Do it slowly.
    });

    // Smooth Scroll to ---> 'Back to the Top ^'.
    $('.home').on('click', function (event) {
        // Prevent Reloading.
        event.preventDefault()

        // To prevent jerkyness, wait a few seconds, then 
        // deload the second and third section classes.
        setTimeout(() => {
            // Deload the '.second' and '.third' class.
            // when scrolling back to the top section.
            $(".second").hide();
            $(".third").hide();
        }, 1000);

        // We're scroll to 'circle-brand' because that is a class
        // of the navbar, which will trigger our jQuery
        // scroll behavior to go back to the top.
        $('html,body').animate({
            scrollTop: $("#circle-brand").offset().top
        }, 'slow'); // Do it slowly.
    });

    // Prevent Project Slider From Auto Scrolling.
    $('.carousel').carousel({
        interval: false
    });

    // Get the Current Year.
    var currentYear = moment().format('YYYY');
    // Append Current Year to Footer.
    $("#dynamicYear").text(currentYear);

});