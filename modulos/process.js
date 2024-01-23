// const p = require('process');

process.on('beforeExit', () => {
    console.log('el proceso va a terminar');
});


process.on('exit', () => {
    console.log('el proceso acabó');
    setTimeout(() => {
        console.log('esto no se va a ver');
    }, 0);
});

process.on('uncaughtException', (err, origen) => {
    console.error('vaya hay un error');
    // console.error(err);
    setTimeout(() => {
        console.log('esto viene de las excepciones');
    }, 0);
});

console.log('esto si se va a ver');

// process.on('uncaughtRejection')

funccionqeunoexiste();
