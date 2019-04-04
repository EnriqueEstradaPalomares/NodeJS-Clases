var http = require('http');//variable asociada a la libreria http
var fs = require('fs');//fileSync

http.createServer(function(req, res){//crea el servidor dentro de una funcion

    if(req.url === '/api'){
        res.writeHead(200, {'Content-Type': 'application/json'}); //tipo de contenido, tipo de archivo
        var obj = {                     //creacion de un objeto tipo JSON, pero no es Json
            firstname: 'John',
            lastname: 'Doe'
        };
    res.end(JSON.stringify(obj));//convierte el objeto a JSON
    }

    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'Text/html'}); //tipo de contenido, tipo de archivo
        var html = fs.readFileSync(__dirname + '/index.html','utf8'); //le pasa el archivo y su path, el utf8 hace que el html regrese como string y poder modificarlo
        var message = 'Holiiisss..';
        html = html.replace('{Message}', message);//realiza el remplazo de la en el html 
        res.end(html);
    }
    if(req.url == '/bio'){
        res.writeHead(200, {'Content-Type': 'Image/jpg'});
        var img = fs.readFileSync(__dirname + '/bio.jpg');
        res.end(img);
    }

}).listen(1337,'127.0.0.1');//se necesita un puerto y direccion ip