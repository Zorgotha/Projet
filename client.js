var socket = io.connect('https://localhost:8700');

socket.on('click', function (data) {
    socket.emit('myClick',data);
})

socket.on('myClick', function(data){
	//Redessiner le canvas pour chaque client.
})

socket.on('message', function(message) {
	alert(message);
})

socket.on('NvClient', function(pseudo) {
	alert(pseudo);
})

// On demande le pseudo au visiteur...
var pseudo = prompt('Quel est votre pseudo ?');
// Et on l'envoie avec le signal "petit_nouveau" (pour le différencier de "message")
socket.emit('nouveau_client', pseudo);
