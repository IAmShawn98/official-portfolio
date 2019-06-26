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

    // If they are connected..
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
    $("#users").text(snap.numChildren());
});