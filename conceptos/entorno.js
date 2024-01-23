let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'no tengo web';

console.log('HOLA ' + nombre);
console.log('mi web era ' + web);