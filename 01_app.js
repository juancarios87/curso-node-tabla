const { required } = require('yargs');
const {crearArchivo} = require('./99_Helpers/01_multiplicar');
// Importamos el paquete "colors" de la siguiente forma
// Linea 6: Crea constante que se puede utilizar para implementar metodos del paquete.
// Linea 7: Utiliza el paquete "colores" y permite implementar sus caracteristicas ejemplo linea: 16
// const colors = require('colors');
require('colors');

// Importamos la informacion de archivo "yargs.js" de la siguiente manera:
const argv = require('./config/yargs')

console.clear();

crearArchivo(argv.base, argv.l, argv.h)
// Otra forma de implementar el paquete "colors" --> nombreArchivo.rainbow : [].rainbow
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch(err => console.log(err));