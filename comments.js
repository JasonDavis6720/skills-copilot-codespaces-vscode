//Create a webserver
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var comments = [];

var server = http.createServer(function(req, res){
    if(req.url === '/'){
        fs.readFile('./index.html', function(err,
