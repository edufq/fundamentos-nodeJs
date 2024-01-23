const { exec, spawn } = require('child_process');
// // const exec = require('child_process').exec;

// exec('node modulos/consola.js', (err, stdout, stderr) => {
//     if (err){
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// })


// --
let proceso = spawn('cmd.exe', ['/c','dir']);
console.log(proceso.id);
console.log(proceso.connected);

proceso.stdout.on('data', function (dato){

    console.log('¿ esta muerto?');
    console.log(proceso.killed);
    console.log(dato.toString());
});

proceso.on('exit', function(){
    console.log('el proceso termino');
});



