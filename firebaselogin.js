function signup(){


}

function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    window.alert(username + " " + password); 
}

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