const http = require('http');

http.createServer(router).listen(3000);

function router (req, res){
    console.log('nueva peticion');
    console.log(req.url);

    switch (req.url){
        case '/hola':
                let saludo = hola();
                res.write(saludo);
                res.end();
                break;

        default:
                res.write('erro 404: no se que quieres');
                res.end();
    }

    // res.writeHead(201, {'Content-Type': 'text/plain'});

    // // escribir respuesta al usuario
    // res.write('hola, ya se usar http de nodejs');
    // res.end();
}

function hola(){
    return 'hola que tal';
}

console.log('escuchando http en el puerto 3000');


