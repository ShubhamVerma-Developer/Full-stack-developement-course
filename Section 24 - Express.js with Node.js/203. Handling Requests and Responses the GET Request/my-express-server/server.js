const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send(`<h1>Hello world</h1>`);

});

app.listen(3000, function(){
    console.log("server connectd on port : 3000");
});