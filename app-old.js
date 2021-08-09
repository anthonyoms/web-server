const http = require('http');

//req = request : es lo que solicita el usuario.
//res = response : es lo que devuelve el servidor despues de procesar el request. 

http.createServer((req, res) => {

    
    res.write('Hola Mundo');
    res.end();

})
    .listen(8080);

console.log('Escuchando en el puerto', 8080);