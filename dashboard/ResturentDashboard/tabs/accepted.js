var firebaseConfig = {
    apiKey: "AIzaSyB-EoVKwCNAS-oDujMRl2ycG7dCOqLlTgo",
    authDomain: "tifoodapp7.firebaseapp.com",
    projectId: "tifoodapp7",
    storageBucket: "tifoodapp7.appspot.com",
    messagingSenderId: "900358188384",
    appId: "1:900358188384:web:60d824b774001b770c4205"
  };
  var pok;
  firebase.initializeApp(firebaseConfig);
  var uid;
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      
      uid = user.uid;
    start(user)
    console.log("1")
      
     
    } 
    else {
        location.href = "../../../../index.html"
        
    }



})

function start(user){
    console.log(user.uid)

    var docRef = firebase.firestore().collection("pending").where("resUid", "==", user.uid).where("status", "==", "accepted")
    docRef.get()
    .then(function(snapshot){
        
        snapshot.forEach(function(data, index){
         
            var obj = data.data()
                console.log(obj)
            
            

            
                
                document.getElementById("div").innerHTML += `
                <div class="col col py-3 px-lg-5" style="border: solid 1px black; border-radius: 10px;" >

                <span class="titel" style="display: block; font-weight: bolder;">${obj.titel}</span>
                <span class="titel" style="display: block; ">Cetegery : ${obj.cetegory}</span>
                <span class="titel" style="display: block; ">Deleviery : ${obj.delivery}</span>
                <span class="titel" style="display: block; font-weight: bolder;">price : ${obj.price}</span>

                
                
                <button class="btn btn-sm btn-success " style="float: right;" id="${data.id}" onclick="del(this)"> Delivered</button>

            </div>

           `
            
             


            })


    })
}

function del (i){
    var db = firebase.firestore();

db.collection("pending").doc(i.id).update({status: "delivered"});
swal({
    titel: "good Job",
    text: "please refresh",
    icon: "success",
    button: "next",
})

    
    
}
function logout() {
    firebase.auth().signOut().then(() => {
        location.href = "../../../index.html";
    }).catch((error) => {
        // An error happened.
    });
    return false
}