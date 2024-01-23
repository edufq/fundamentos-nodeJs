function otrFuncion (){
    seRompe();
}

function seRompe(){
    return 3 + Z;
}

function seRompeAsincrono(cb){
    setTimeout(function() {
        try {
            return 3 + z;
        } catch (err) {
            console.error('erro en mi funcion');
            cb(err);
        }
        
    })
}

try {
    // otrFuncion();
    seRompeAsincrono(function () {
        console.log('hay error');
    });
} catch (err) {
    console.error('hubo un error');
    console.error(err.message);
    console.log('lo hemos capturado');
}


console.log('esto esta al final')


