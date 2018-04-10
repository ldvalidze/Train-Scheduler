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
    var friquency = 0;

  $("#submit-train").on("click", function(event) {
 
    name = $("#train-name").val().trim();
    destination = $("#train-destination").val().trim();
    trainTime = $("#train-time").val().trim();
    friquency = $("#friquency").val().trim();

    // Code for the push
    dataRef.ref().push({
      name: name,
      destination: destination,
      trainTime: trainTime,
      friquency: friquency,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
  });
})
