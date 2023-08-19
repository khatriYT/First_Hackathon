var uid;
var fileName;
var firebaseConfig = {
  apiKey: "AIzaSyB-EoVKwCNAS-oDujMRl2ycG7dCOqLlTgo",
  authDomain: "tifoodapp7.firebaseapp.com",
  projectId: "tifoodapp7",
  storageBucket: "tifoodapp7.appspot.com",
  messagingSenderId: "900358188384",
  appId: "1:900358188384:web:60d824b774001b770c4205"
};

firebase.initializeApp(firebaseConfig);

function start(){
  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        
        uid = user.uid;
         star(uid)
        
       
      } 
      else {
          location.href = "../../../../index.html"
          
      }
  
  })

}

function star(uid){

  var name = document.getElementById("name").value
  var price = document.getElementById("price").value
  var cetegory = document.getElementById("cetegory").value
  var delivery = document.getElementById("delivery").value

  var dishobj = {
    name: name,
    price: price,
    cetegory: cetegory,
    delivery: delivery,
    resuid: uid,
    filename: fileName,
  }
  


  var db = firebase.firestore().collection(`dishes`);
    db.add(dishobj)
        .then(() => {
          document.getElementById("name").value = ""
       document.getElementById("price").value = ""
        document.getElementById("cetegory").value = ""
       document.getElementById("delivery").value = ""

          swal({
            title: "ADDED",
            text: "added seccussfully",
            icon: "success",
          })
        })
        .catch((error) => {
          if(!name || !price || !cetegory || !deli){
            swal({
              title: "Field Empty",
              text: "Fill the input field",
              icon: "warning",
            })
          }
          else{
            swal({
              title: "Correct",
              text: "refresh the page",
              icon: "success",
           
        });

        document.getElementById("name").value = ""
       document.getElementById("price").value = ""
        document.getElementById("cetegory").value = ""
       document.getElementById("delivery").value = ""

  
      
    };
  })
}
function upload(){
  var img = document.getElementById("file").files[0];
  fileName = img.name
  
  var storageref = firebase.storage().ref("dish/"+fileName)

  storageref.put(img);
  start()
}
function logout() {
  firebase.auth().signOut().then(() => {
      location.href = "../../../index.html";
  }).catch((error) => {
      // An error happened.
  });
  return false
}

