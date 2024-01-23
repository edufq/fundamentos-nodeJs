function hola (nombre , miCallback){
    setTimeout( function() {
            
        console.log('Hola soy una funcion asincrona ' + nombre);
        miCallback(nombre);
    }, 1000);

}

function adios (nombre, otroCallback) {
    setTimeout(function() {

        console.log('adios soy una funcion asincrona ' + nombre);
        otroCallback();
        
    }, 1000);
}

console.log('iniciando proceso...');
hola('carlos', function(nombre) {
    adios(nombre, function () {
        console.log('terminando proceso');
    });
});

// hola('carlos', function() {});
// adios('carlos', function() {});
