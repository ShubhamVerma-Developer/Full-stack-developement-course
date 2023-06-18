const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=sehore&units=metric&appid=0d18f50e149b25b88753da950059cdf1";
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
         const weatherData =  JSON.parse(data);
         const temp = weatherData.main.feels_like;
         const icon = weatherData.weather[0].icon;
         const imgUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        //  console.log(temp);
         const weatherDescription = weatherData.weather[0].description;
        //  console.log(weatherDescription);

        // res.send("<h1>The Tempreture of the Sehore is : "+ temp + " degree celcius </br> The description is : " + weatherDescription + "</h1>");
           res.write("<h1>The Weather is currently " + weatherDescription+" </h1>");
           res.write("<h1>The Tempreture of the Sehore is : " + temp +"</h1>");
           res.write("<img src=" + imgUrl + ">");
        });
    });
    // res.send("server is running");
});

app.listen(3000, function(req, res){
  console.log("server running on port : 3000");
});