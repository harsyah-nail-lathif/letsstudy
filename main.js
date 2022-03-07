// const { Socket } = require("dgram");

var socket = new io();

function login() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    socket.emit("login", username.value, password.value);
}

socket.on("login", (good, stuff) => {
    console.log(good);
    if (good == "success") {
        var lb = document.getElementById("loginbox");
        var ls = document.getElementById("image")
        lb.style.display = "none";
        ls.style.display = "none";
    } else {
        
    }
});

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