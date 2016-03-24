var http = require('http');
var express = require('express');
var fs = require('fs');
var port = process.env.port || 1337;

var app = express();

app.get('/', function (req, res){
    res.send("hello");
})

app.listen(port, function () {
    console.log('listening on port: ' + port);
});
//test2