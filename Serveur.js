var http = require('http');
var server = http.createServer(function(req,res){
    res.writeHead(200);
    res.end("hello world\n");
});

server.listen(8080);
console.log("Server is listening");
