function hola (nombre){
    return new Promise(function (resolve, reject){
            
        setTimeout( function() {
                
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1000);

    });

}
function hablar(nombre){
    return new Promise((resolve, reject) => {
            
        setTimeout(function() {
            console.log('bla bla bla');
            // resolve(nombre);
            reject(nombre);
        },  100);
    })
}

function adios (nombre) {
    return new Promise ((resolve, reject) => {
            
        setTimeout(function() {

            console.log('adios ' + nombre);
            resolve(nombre);
            
        }, 1000);
    })
}

// ----

console.log('iniciando el proceso');
hola('carlos')
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('terminando el proceso');
    })
    .catch(err => {
        console.error('Hay un error');
        console.error(err);
        
    })



