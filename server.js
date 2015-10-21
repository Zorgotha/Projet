//Serveur https
var require;
var __dirname;
var fs = require('fs');
var https = require('https');
var privateKey = fs.readFileSync('./key.pem');
var certificate = fs.readFileSync('./cert.pem');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

app.use(express.static(__dirname));

var httpsServer = https.createServer(credentials, app);
console.log('HTTPS Server listening');

// Chargement de socket.io
var io = require('socket.io').listen(httpsServer);
var nbrUsers = 0;

// Quand on client se connecte
io.sockets.on('connection', function (socket) {
    
    "use strict";
    nbrUsers++; // Compter le nb de connexion
    socket.on('nouveau_client', function (pseudo) {
        socket.pseudo = pseudo; // Récupère le pseudo envoyé du client au serveur
        console.log(pseudo + ' est connecté !');
        socket.emit('message', 'Vous êtes connecté !'); // Message connection
        socket.broadcast.emit('NvClient', pseudo + ' vient de se connecter !'); //Affichage qui s'est connecté
    });

    socket.on('myClick', function (data) {
        socket.broadcast.emit('myClick', data);
    });

    socket.on('disconnect', function () {
	nbrUsers--; // COmpter le nb de joueurs apres les decos.
        console.log('un client est déconnecté !');
    });
});
httpsServer.listen(8700); //spin up server
