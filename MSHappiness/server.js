var express = require('express');
var fs = require('fs');
var port = process.env.port || 1337;
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var dummyData = require('./dummyData.js');

//designating public folder contents to be served up to the client
app.use(express.static(__dirname + '/public'));

//this allows js objects with key value pairs to be passed as the body in post requests
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

//sends the index file over
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


// GET method route example
app.get('/test1', function (req, res) {
    res.send(dummyData.people);
});

app.post('/building', function (req, res) {
    // building number will be available under req.body console.log to check how that looks
    console.log(req.body);
    res.send('gotit');
});

app.post('/question:id', function (req, res) {
    //id will be available as a string under req.params.id, so to make it a number just Number(req.params.id)
    console.log(req.params.id);
    console.log(req.body);
    //here we need to send this to the db and get back some info for now I am only making something up
    var dummyData = {
        "happy": 5,
        "unhappy": 3,
        "neutral": 2
    };
    res.send(dummyData);
});

// POST method route example, posts and logs that which the user puts into the input field
app.post('/test2', function (req, res) {
    console.log(req.body.text);
    res.send('thanks');
});

app.listen(port, function () {
    console.log('listening on port: ' + port);
});
