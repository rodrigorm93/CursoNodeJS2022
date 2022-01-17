//callback: es una funcion que se manda como argumento a otra funcion
//no es mas que una funcion que se va a ejecutar cuando todo el procedimeinto termine


const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

//const base = 3;

console.clear();

console.log(process.argv)
console.log(argv)


//FORMA INCORRECTO DE HACERLO, AHORA UTILIZAREMOS LA LIBRERIA YARGS
//console.log(process.argv);
//const [,,arg3='base=5'] = process.argv;
//const [, base=5] = arg3.split('=');
//console.log(base);

crearArchivo( argv.base,argv.listar,argv.hasta )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));