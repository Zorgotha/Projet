var https = require('https'),
    fs = require('fs');

var options = {
	key: fs.readFileSync('./PrivateKey.pem'),
	cert: fs.readFileSync('./cert.pem')
};

fs.readFile('./index.html', function (err, html){
	if(err){
		throw err;
	}
var server = https.createServer(options, function(req,res){
    res.writeHead(200,{"Content-Type": "text/html"});
    res.write(html);
    res.end();
   }).listen(8000);
});
//server.listen(8080);
//console.log("Server is listening");
