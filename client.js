
$(document).on('click', function(event){
    socket.emit('myClick', {id: event.target});
}

var socket = io.connect('http://localhost');

socket.on('myClick', function (data) {
    $(data.id).trigger('click');
}
