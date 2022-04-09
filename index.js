const mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const express = require('express');
const app = express();
const http = require("http");
const { getuid } = require('process');
const server = http.createServer(app);
const io = require("socket.io")(server);
server.listen(2020);

app.get('/', (req, res)=> {
    res.sendFile(__dirname + "/prelogin.html");
});
app.get('/forgot_password', (req, res)=> {
    res.sendFile(__dirname + "/forgot_password.html");
});
app.get('/Home/home.html', (req, res)=> {
    res.sendFile(__dirname + "/Home/home.html");
});
app.get('/Statistik/statistik.html', (req, res)=> {
    res.sendFile(__dirname + "/Statistik/statistik.html");
});
app.get('/HomeWork/homework.html', (req, res)=> {
    res.sendFile(__dirname + "/HomeWork/homework.html");
});
app.get('/Profile/profile.html', (req, res)=> {
    res.sendFile(__dirname + "/Profile/profile.html");
});
app.get('/main.js', (req, res)=> {
    res.sendFile(__dirname + "/main.js");
});
app.get('/firebaselogin.js', (req, res)=> {
    res.sendFile(__dirname + "/firebaselogin.js");
});

app.use("/pict", express.static(__dirname +"/pict"));
app.use("/vendor", express.static(__dirname +"/vendor"));
app.use("/img", express.static(__dirname +"/img"));

app.use("/Home", express.static(__dirname +"/Home"));
app.use("/Statistik", express.static(__dirname +"/Statistik"));
app.use("/HomeWork", express.static(__dirname +"/HomeWork"));
app.use("/Profile", express.static(__dirname +"/Profile"));

io.on("connection", (socket) =>{
    mongo.connect(url, (err, db)=> {
        var projectDb = db.db("LetsStudy");
        var dbu = projectDb.collection("users");

        socket.on("login", (u, p) => {
            console.log(u, p);
            var search = {"username" : username, "password" : password}
            dbu.find(search).toArray((err, result) => {
                console.log(result);
                if(!err && result.length > 0){
                    socket.emit("login", "success", result);
                    socket.lala = true;
                }else{
                    socket.emit("login", "you're wrong bro. try again", null)
                }
            });
        });

        socket.on("register", (u, p)=>{
            console.log(u, p);
            db.users.insertOne({
                username: getuid.username,
                password: getuid.password
            })

        socket.on("dissconnect", () => {
        });
        socket.on("uiStateChange", (item, property) =>{
            console.log(item + ' was change to' + property)
        });
    });
});
});
