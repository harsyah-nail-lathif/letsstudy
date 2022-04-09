// function register(){
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;
//     var username = document.getElementById('username').value;
  
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//        // Signed in 
//         const user = userCredential.user;
  
//         set(ref(database, 'users/' + user.uid),{
//             username: username,
//             email: email
//         })
  
//         alert('user created!');
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
  
//         alert(errorMessage);
//       // ..
//       });
// }
// function login(){
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     window.alert(username + " " + password); 
// }

function slide() {
    var a = document.getElementById("loginsec");
    var b = document.getElementById("signupsec");
    a.style.left = "100%";
    b.style.left = "0%";
}

function reverseslide() {
    var a = document.getElementById("loginsec");
    var b = document.getElementById("signupsec");
    a.style.left = "0%";
    b.style.left = "100%";
}

function showlogin() {
    var a = document.getElementById("loginbox");
    var b = document.getElementById("itemprelogin");
    a.style.display = "contents";
    b.style.display = "none";
}