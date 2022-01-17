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



const getEmpleados = (id) =>{

    return new Promise( (resolve, reject) =>{

        const empleado = empleados.find (e => e.id === id)?.nombre;

        (empleado) 
            ? resolve(empleado)
            : reject('No existe empleado');

    });
}

const getSalario = (id) =>{

    return new Promise( (resolve, reject) =>{

        const salario = salarios.find (s=> s.id === id)?.salario;

        (salario) 
            ? resolve(salario)
            : reject('No existe salario');

    });
}

// transforma una funcion en una funcion asyncroina, lo que hace es retornar un promesa

const getInfoUsuarios = async(id) =>{
    
    try {

        const empleado = await getEmpleados(id)
        const salario = await getSalario(id)
    
        return `EL Empleado ${ empleado } Salario ${salario}`;
        
    } catch (error) {
       // return error //con throw llamo el reject d ela funcion asyncrona
       throw error;
    }
   

}


const id=3;

getInfoUsuarios(id)
    .then( msg => {
        console.log('Todo bien')
        console.log(msg)}
        )
    .catch( err => {
        console.log('Todo Mal')
        console.log(err)
    })

