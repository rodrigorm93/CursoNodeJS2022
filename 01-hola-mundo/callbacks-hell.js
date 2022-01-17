//callback: es una funcion que se manda como argumento a otra funcion

const empleados = [
    {
        id: 1,
        nombre: 'Rodrigo'
    },
    {
        id: 2,
        nombre: 'Juan'
    },
    {
        id: 3,
        nombre: 'Pedro'
    }
]


const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }

]



const getEmpleados = (id, callback) =>{

    const empleado = empleados.find (e => e.id === id)?.nombre

    if (empleado){

        callback(null,empleado); 

    }else{
        callback( `EL empleado ${ id } No existe`);
    }

   

}

const getSalario = (id,callback) =>{

    const salario = salarios.find(s => s.id === id)?.salario; // para revisar si existe el salio se imprime

    if (salario){
        callback(null,salario);
    }else{
        callback( `EL Salario ${ id } No existe`);
    }

}



const id = 3;

getEmpleados(id, (err,empleado) =>{

    if (err){
        console.log('Error')
        return console.log(err)
    }
    getSalario(id, (err,salario) =>{

        if(err){
            console.log('Error')
            return console.log(err)
        }
    
        console.log('El empleado:', empleado, 'Salario: ', salario)
    })
})


