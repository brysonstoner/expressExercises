var express = require("express");
var app = express();
var bodyParser = require("body-parser");



// app.get('/', function (req, res) {
//     res.send('mongo.html')
//     console.log("listening on port 3000");
//   })

app.use("/", (req, res) => {
    res.sendFile(__dirname + "/mongo.html");
   });


//This might be a huge undertaking, but I'm confident you can do it. As best you can on your own, get an express server 
//connected to a mongo database. Create, Read, Update, and Delete some data. Keep the data structure simple, like a collection
