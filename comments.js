//Create a webserver
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var comments = [];

var server = http.createServer(function(req, res){
    if(req.url === '/'){
        fs.readFile('./index.html', function(err, data){
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.write('Internal Server Error');
                res.end();
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
        });
