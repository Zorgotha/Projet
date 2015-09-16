var http = require('http'),
    fs = require('fs');
fs.readFile('./index.html', function (err, html){
	if(err){
		throw err;
	}
var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type": "text/html"});
    res.write(html);
    res.end();
   }).listen(8080);
});
//server.listen(8080);
//console.log("Server is listening");
