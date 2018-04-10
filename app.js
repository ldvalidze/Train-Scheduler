$(document).ready(function (){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBXypnqNVunl8WZTKHXZ3gfpVOtSEq-xMg",
        authDomain: "train-scheduler-9a94b.firebaseapp.com",
        databaseURL: "https://train-scheduler-9a94b.firebaseio.com",
        projectId: "train-scheduler-9a94b",
        storageBucket: "",
        messagingSenderId: "270428440514"
    };

    firebase.initializeApp(config);

    var dataRef = firebase.database();

    var name = "";
    var destination = "";
    var trainTime = 0;
    var frequency = 0;

    $("#submit-train").on("click", function(event) {

        name = $("#train-name").val().trim();
        destination = $("#train-destination").val().trim();
        trainTime = $("#train-time").val().trim();
        frequency = $("#train-frequency").val().trim();
        dataRef.ref().push({
            name: name,
            destination: destination,
            trainTime: trainTime,
            frequency: frequency,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
    });

    dataRef.ref().on("child_added", function(childSnapshot) {

        // Log everything that's coming out of snapshot
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().destination);
        console.log(childSnapshot.val().trainTime);
        console.log(childSnapshot.val().frequency);
        console.log(childSnapshot.val().joinDate);
  
        // full list of items to the well
        $("#nameDisplay").append("<div class='row'> " + childSnapshot.val().name + "</div>");
        $("#destinationDisplay").append("<div class='row'> " + childSnapshot.val().destination + "</div>");
        $("#frequencyDisplay").append("<div class='row'> " + childSnapshot.val().frequency + "</div>");
        $("#nextDisplay").append("<div class='row'> " + childSnapshot.val().trainTime + "</div>");
        $("#minutesAwayDisplay").append("<div class='row'> " + childSnapshot.val().trainTime + "</div>");
        // Handle the errors
        }, function(errorObject) {
            console.log("Errors handled: " + errorObject.code);    
    });
})
