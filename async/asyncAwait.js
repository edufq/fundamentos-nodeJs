async function hola (nombre){
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
            resolve(nombre);
            //reject(nombre);
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
async function main(){
    let nombre = await hola('carlos');
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('termina el proceso');
}
console.log('comienza el proceso');
main();


