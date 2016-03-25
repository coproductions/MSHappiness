var express = require('express');
var fs = require('fs');
var port = process.env.port || 1337;
var path = require('path');
var app = express();
var dum = fs.readFileSync(__dirname + "/dummyData.json", 'utf8');
var dummyData = require('./dummyData.js');

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/public/index.html');
});
app.listen(port, function () {
    console.log('listening on port: ' + port);
});
