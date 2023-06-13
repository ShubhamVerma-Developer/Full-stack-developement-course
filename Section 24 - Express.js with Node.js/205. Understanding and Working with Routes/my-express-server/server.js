const express = require("express");

const app = express();

app.get('/', function(req, res){
    res.send("<h1>Auto refresh server</h1>");
});

app.get("/home", function(req, res){
  res.send("<h1>this is home page</h1>");
});

app.get("/about", function(req, res){
    res.send("<h1>This is about page</h1>");
});

app.get("/contact", function(req, res){
    res.send("<h1>This is contact page</h1>");
});

app.get("/hobbies", function(req, res){
    res.send("<h1>my hobbies is playing cricket</h1>");
});

app.listen(3000, function(){
    console.log("server connectd on the port : 3000");
});