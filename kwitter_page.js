const firebaseConfig = {
    apiKey: "AIzaSyCGCrTVIUrxMzpOwTCwRTxm6vU6UBquZsA",
    authDomain: "letschat-web-app-c7b6d.firebaseapp.com",
    databaseURL: "https://letschat-web-app-c7b6d-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app-c7b6d",
    storageBucket: "letschat-web-app-c7b6d.appspot.com",
    messagingSenderId: "436162552374",
    appId: "1:436162552374:web:720bc43a3b88584d96ee97",
    measurementId: "G-CW7SHWGW5Q"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name"+room_name);
  console.log("user name"+user_name);

  function logout() {
    localStorage.removeItem("Roomname");
    localStorage.removeItem("Username");
    window.location.replace("index.html");
}
function send() {
    msg = document.getElementById("msg").value;
    console.log("Message "+msg);
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0,
          dislike:0
    });
    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
   firebase_message_id = childKey;
   message_data = childData;
//Start code

//End code
} });  }); }
getData();