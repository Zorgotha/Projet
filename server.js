//Serveur https
var fs = require('fs');
var https = require('https');
var privateKey  = fs.readFileSync('./key.pem');
var certificate = fs.readFileSync('./cert.pem');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

app.use(express.static(__dirname));

var httpsServer = https.createServer(credentials, app);
console.log('HTTPS Server listening');

// spin up server
httpsServer.listen(8700);
