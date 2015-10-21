
$(document).on('click', function(event){
    socket.emit('myClick', {id: event.target});
}

var socket = io.connect('https://localhost:8700');

socket.on('myClick', function (data) {
    $(data.id).trigger('click');
}
