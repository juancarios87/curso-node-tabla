const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra la tabla en la consola'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Muestra hasta donde quiero que se muestre la tabla en la consola'
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;

    // Exportamos este archivo para que pueda ser implementado por otros modulo:
    // En si estoy exportando el objeto que esta entre las lineas 1 & 19 que en este caso se llama "argv"
    
    module.exports = argv;