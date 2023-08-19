function login(event){
    event.preventDefault()

    let email = document.getElementById("email").value
    let password = document.getElementById("pass").value
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user)
    swal("Good job!", "Successfully sign up!", "success");
    window.location.href = '../dashboard/dashboard.html';
    // ...
    })
    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    
    if(!email || !password){
      swal({
        title: "Field Empty",
        text: "Fill the input field",
        icon: "warning",
      })
    }
    else{
      swal({
        title: "Incorrect information",
        text: `${errorMessage}`,
        icon: "error",
        button: "Again",
      });
    }

    });

  document.getElementById("email").value = '';
   document.getElementById("pass").value = '';
   
}
function resturent(){
  location.href = "./registerResturent.html"
}