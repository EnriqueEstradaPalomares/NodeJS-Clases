var http = require('http');//variable asociada a la libreria http
var fs = require('fs');//fileSync

http.createServer(function(req, res){//crea el servidor dentro de una funcion

    res.writeHead(200, {'Content-Type': 'application/json'}); //tipo de contenido, tipo de archivo
    var obj = {                     //creacion de un objeto tipo JSON, pero no es Json
        firstname: 'John',
        lastname: 'Doe'
    };
    res.end(JSON.stringify(obj));//convierte el objeto a JSON

}).listen(1337,'127.0.0.1');//se necesita un puerto y direccion ip