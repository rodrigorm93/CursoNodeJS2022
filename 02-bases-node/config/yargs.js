const argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption:true, //nos exige que ingresemos la base
                        describe: 'Es la  base de la tabla de multiplicar'
                    })
                    .option('l',{
                        alias: 'listar',
                        type: 'boolean',
                        default:false,
                        describe: 'Muestra la tabla'

                    })
                    .option('h',{
                        alias: 'hasta',
                        type: 'number',
                        default:5,
                        describe: 'Limite de multiplicaciones'

                    })

                    .check((argv, options) =>{ //vamos a verificar que base sea un
                        if(isNaN(argv.base)){//vamos a verificar que base sea un numero y es requerida
                            throw 'La base tiene que ser un numero'
                        }
                        //si no hay errores regresamos un true
                        return true;

                    })
                    .argv;

module.exports = argv;