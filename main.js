const { Socket } = require("dgram");

function login(){
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    socket.emit("login", username.value, password.value);
}

socket.io("login", (good, stuff) =>{
    if(good == "success"){
        var lb = document.getElementById("loginbox");
        lb.style.display = "none";
    }else{

    }
});