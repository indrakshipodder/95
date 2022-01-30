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
 
  user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
            room_name = document.getElementById("room_name").value;

            firebase.database().ref("/").child(room_name).update({
                 purpose: "Adding Room Name"
           });
   
           localStorage.setItem("Roomname",room_name);
       
           window.location = "kwitter_page.html";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
           console.log("room_name - " + Room_names);
           row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
           document.getElementById("output").innerHTML += row;
     //End code
     });});}
getData();
function redirectToroomname(name){
     console.log(name);
     localStorage.setItem("Roomname",name);
     window.location = "kwitter_page.html";
}
function logout() {
     localStorage.removeItem("Username");
     localStorage.removeItem("Roomname");
     window.location = "index.html";
}