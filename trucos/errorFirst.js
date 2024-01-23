function asincrona (callback){
    setTimeout(function(){
        try{
            let a = 3 + z;
            callback(null, a)
        } catch (e) {
            callback(e);
        }
    }, 1000);
}

    asincrona(function(err, dato){
        if(err) {
            console.error('tenemos un eror');
            console.error(err);
            return false;

            // throw err;  // solamente para las funciones sincronas sirve el throw
        }

        console.log('todo ha ido bien');
    })




