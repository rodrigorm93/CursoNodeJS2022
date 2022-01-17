// npm install nodemon --save-dev : para instlar un paqueta que tenga dependecias solo en desarrollo


const fs = require('fs');

const crearArchivo = async(base = 5,listar=false,hasta=5) =>{

    try {

        console.log('==============================================');
        console.log(`============Tabla del: ${base} ===============`);
    
        let salida = '';
    
    
        for(let i = 1; i<=hasta; i++){
            salida += `${ base } X ${i} = ${ base * i }\n`;
        }
    
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

        if(listar){
            console.log(salida);
        }

    
        return `tabla-${base}.txt creado`;

       
        
    } catch (error) {
        
        throw error;
    }

  

}


module.exports = {
     crearArchivo
}