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


const imprimir = () =>{
    setTimeout(function(){
        console.log('Promesas')
    },0)
 
}

const id=2;

imprimir();

getEmpleados(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));


getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err));



getEmpleados(id)
    .then(empleado =>{
        getSalario(id)
        .then(salario =>{
            console.log('El empleado: ', empleado, 'Salario:', salario)
        })

        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))


//PROMESAS EN CADENA PARA DA SOLUCION A LO DE ARRIBA





getEmpleados(id)
    .then(empleado =>{ 
        nombre = empleado;
        return getSalario(id)
    
    })
    .then( salario => console.log('El empleado2: ', nombre, 'Salario:', salario)) //como estamos retornando una promesa podemos llamar a este then
    .catch(err => console.log(err))