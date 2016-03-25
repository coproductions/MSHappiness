var express = require('express');
var fs = require('fs');
var port = process.env.port || 1337;
var path = require('path');
var app = express();
var dummyData = require('./dummyData.js');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.listen(port, function () {
    console.log('listening on port: ' + port);
});
