var uid;
var status;
var user;

var firebaseConfig = {
    apiKey: "AIzaSyB-EoVKwCNAS-oDujMRl2ycG7dCOqLlTgo",
    authDomain: "tifoodapp7.firebaseapp.com",
    projectId: "tifoodapp7",
    storageBucket: "tifoodapp7.appspot.com",
    messagingSenderId: "900358188384",
    appId: "1:900358188384:web:60d824b774001b770c4205"
};


firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
    user = user;
     uid = user.uid;

     var db = firebase.firestore();

  db.collection("users").doc(user.uid).get().then((snap) => {
        
    status = snap.data().status;
     Start()
      
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
     
      // ...
      
    } else {
    location.href = "../index.html"
    }
  });
function Start(){

    if( status == "resturent"){
        location.href = "./ResturentDashboard/ResturentDash.html"
  
    }
    else if( status == "user"){
      location.href = "./UserDashboard/userdash.html"
    }
    else{
        console.log("x")
    }
}

  
