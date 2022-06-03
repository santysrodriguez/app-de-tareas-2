

const {listar,guardarTarea,filtrarPorEstado,} = require('./funcionesDeTareas');

const {argv}= require('process');
const accion = typeof argv[2] == 'string' ? argv[2].toLowerCase() : undefined;



switch (accion) {
    case 'listar':
        listar (); 
        break;
    case 'crear' : 
    let nuevaTarea = {
        titulo : argv[3],
        estado : 'pendiente'
    }
    if(argv[3] == undefined){
        console.log((`
        -------------------------------------------------------
        Atención  - tienes que agregar el titulo de la tarea.
        -------------------------------------------------------
        `)
        );
    }else{
        guardarTarea(nuevaTarea)
    console.log(`
    ------------------------------------------
    La tarea fue agregada con exito ;) 
    ------------------------------------------
    `);
    }
    
        break;
    case 'filtrar' :
        if(argv[3] == undefined){
            console.log((`
            -------------------------------------------------------
            Atención  - tienes que pasar uno de los siguentes estado :
            "pendiente"
            "en progreso"
            "terminada"
            -------------------------------------------------------
            `)
            );
        }else{
            filtrarPorEstado(argv[3])

        }
        break;
    case undefined :
        console.log(`
        ------------------------------------------
        Atención  - tienes que pasar una accion 
        ------------------------------------------
        `);
        break;
    default:console.log(`
    ------------------------------------------
        No entiendo qué quieres hacer. 
    ------------------------------------------
    `);
        break;
}





