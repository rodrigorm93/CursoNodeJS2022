const { readlink } = require('fs');
const { resolve } = require('path');

require('colors');


const mostrarMenu = () =>{

    return new Promise(resolve =>{

        console.clear();

        console.log('========================='.green);
        console.log(' SELECIONES UNA OPCION '.green);
        console.log('=========================\n'.green);

        console.log(`${ '1.'.green } Crear una tarea`);
        console.log(`${ '2.'.green } Listar una Tarea`);
        console.log(`${ '3.'.green } Listar Tareas completadas`);
        console.log(`${ '4.'.green } Listar Tareas pendientes`);
        console.log(`${ '5.'.green } Completar tarea(s)`);
        console.log(`${ '6.'.green } Borrar tarea`);
        console.log(`${ '0.'.green } Salir`);

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        //callback: son funciones que se van a ejecutar cone sto termine    
        readLine.question('Seleciones un opcion: ', (opt) =>{
           // console.log({opt});
            readLine.close();
            resolve(opt);
        })


    });

}

const pause = () =>{

    return new Promise(resolve =>{

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        //callback: son funciones que se van a ejecutar cone sto termine    
        readLine.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) =>{
            readLine.close();
            resolve();
        })


    });
    


}

module.exports ={
    mostrarMenu,
    pause
}
