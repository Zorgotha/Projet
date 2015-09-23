var https = require('https'),
    fs = require('fs');

//On donne la clé et le certificat.
var options = {
	key: fs.readFileSync('./key.pem'),
  	cert: fs.readFileSync('./cert.pem')
};

//Affichage de la page index.html et gestion d'erreur
fs.readFile('./index.html', function (err, html){
	if(err){
		throw err;
	}
var server = https.createServer(options, function(req,res){
    res.writeHead(200,{"Content-Type": "text/html"});
    res.write(html);
    res.end();
   }).listen(8000); //Ecoute le le port 8000
	console.log("Server is listening");
});

