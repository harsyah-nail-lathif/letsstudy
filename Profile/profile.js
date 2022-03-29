var socket = new io();

function profile() {
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    socket.emit("profile", username.value, email.value, phone.value);
}