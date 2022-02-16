const process = require('process')

const {listarTareas, agregarTarea, actualizarTarea, eliminarTarea, filtrarTareas, buscarTarea} = require('./tareas')

const accion = process.argv[2];

switch (accion) {
    case 'listar':
        listarTareas()
        break;
    case 'agregar':
        let descripcion = process.argv[3];
        if(!descripcion){
            console.log("Debes agregar una descripcion");
        break}
        let nuevaTarea = {
            id : new Date().getTime(),
            descripcion,
            estado : "pendiente"
        }
        agregarTarea(nuevaTarea)
        break
    case 'actualizar':
        actualizarTarea(+process.argv[3])
        break
    case 'eliminar':
        eliminarTarea(+process.argv[3])
        break
    case "Filtrar" :
        filtrarTareas(process.argv[3])
        break
    case 'buscar' :
        buscarTarea(process.argv[3])
        break
    case undefined :
        console.log("Debes ejecutar una accion");
        break 
    default:
        console.log('Accion no permitida');
        break;
}


/* lo borro para hacer lo que viene del practico y agrego la posicion 1 y la 5 para abajo
let nuevaTarea = {
    id: new Date().getTime(),
    descripcion : 'Aprender Node',
    estado : 'en proceso' 
}*/

/*agregarTarea(nuevaTarea);
actualizarTarea(1644326749754);
eliminarTarea(1644327332545);
listarTareas();*/