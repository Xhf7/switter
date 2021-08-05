var firebaseConfig = {
      apiKey: "AIzaSyCoMELURbGB7Fxrv9MjTqcF8yvYJwoxO1E",
      authDomain: "switter-the-swettest.firebaseapp.com",
      databaseURL: "https://switter-the-swettest-default-rtdb.firebaseio.com",
      projectId: "switter-the-swettest",
      storageBucket: "switter-the-swettest.appspot.com",
      messagingSenderId: "350133518585",
      appId: "1:350133518585:web:e86bf4fa606a5c9a866228"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);  
//ADD YOUR FIREBASE LINKS HERE

    user_name = localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML = "Salut! " + user_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
