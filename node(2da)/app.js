var http = require('http');//variable asociada a la libreria http
var fs = require('fs');//fileSync

http.createServer(function(req, res){//crea el servidor dentro de una funcion

    res.writeHead(200, {'Content-Type': 'Text/html'}); //tipo de contenido, tipo de archivo
    var html = fs.readFileSync(__dirname + '/index.html','utf8'); //le pasa el archivo y su path, el utf8 hace que el html regrese como string y poder modificarlo
    var message = 'Holiiisss..';
    html = html.replace('{Message}', message);//realiza el remplazo de la en el html 

    res.end(html);

}).listen(1337,'127.0.0.1');//se necesita un puerto y direccion ip