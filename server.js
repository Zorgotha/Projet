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

// Chargement de socket.io
var io = require('socket.io').listen(httpsServer);

// Quand on client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {

    socket.on('nouveau_client', function(pseudo) {
        socket.pseudo = pseudo;			// Récupère le pseudo envoyé du client au serveur
	console.log(pseudo + ' est connecté !');
	socket.emit('message', 'Vous êtes connecté !'); // Message connection
	socket.broadcast.emit('message', pseudo + ' vient de se connecter !'); //Affichage qui s'est connecté
    });

    socket.on('disconnect', function(socket){
	console.log('un client est déconnecté !');
    });
});


// spin up server 
httpsServer.listen(8700);
