const tareas = require ('./tareas.json');
const fs = require("fs");

const guardarJSON = (tareas) => {
    fs.writeFileSync('./tareas.json', JSON.stringify(tareas, null,3));
    return null}
    // funciona para no tener que poner esa parte en todos los demas, osea el fs.write etc para no tener que colocarlo en todos lados. Se borra eso y directamente pondrias el guardarJson

module.exports = {
    listarTareas: () =>{
        tareas.forEach((tarea, index) => {
            console.log(`${index + 1}-${tarea.descripcion} - estado: ${tarea.estado} - ID: ${tarea.id}`);
        });
        return null
    },
     agregarTarea : (tarea) => {
        tareas.push(tarea);
        console.log(tareas);
        guardarJSON()
        return console.log('Tarea agregada');
    },
    
    actualizarTarea : (id) => {

        let check = tareas.filter(tarea => tarea.id === id);
        if (check.length === 0) {
            return console.log('ID inexistente');
        } 

        let tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.estado = 'Completado';
                return tarea
            }
            return tarea
        })
        guardarJSON(tareasActualizadas)
        return console.log('Tareas Actualizadas');
    },
    
    eliminarTarea : (id) => {
        let tareasFiltradas = tareas.filter(tarea =>{
            return tarea.id !== id
        })
        guardarJSON(tareasFiltradas)
        return (console.log('Tarea eliminada'));
    },
    filtrarTareas : (estado => {
        let estadosValidos =[ 'Completado', 'En proceso', 'Pendiente'];

        if(!estadosValidos.includes(estado)){
            return console.log('Estado no valido', estadosValidos);
        }
        let tareasFiltradas = tarea.filter((tarea) => {
        return tarea.estado === estado
        });
        tareasFiltradas.forEach((tarea, index) => {
            console.log(`${index + 1} - ${tarea.descripcion} - estado: ${tarea.estado} - ID: ${tarea.id}`);
        })
        return null
    },
    buscarTarea : (keyWord => {
        let resultado = tareas.find(tarea => {
            return tarea.descripcion.toLowerCase().includes(keyWord.toLowerCase())
        })
        return console.log(resultado);
    })
}