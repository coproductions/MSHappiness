var express = require('express');
var fs = require('fs');
var port = process.env.port || 1337;
var path = require('path');
var app = express();
var publicPath = "c:/users\v-codumb\documents\visual studio 2015\Projects/Ms";
app.get('/', function (req, res) {
  //  res.sendFile('/index.html');
    res.sendFile(__dirname+'/public/index.html');
   // res.send('hello');
 // res.sendFile('c:\Users\v-codumb\Documents\Visual Studio 2015\Projects\MSHappiness\MSHappiness\public\index.html');
});
app.listen(port, function () {
    console.log('listening on port: ' + port);
});
