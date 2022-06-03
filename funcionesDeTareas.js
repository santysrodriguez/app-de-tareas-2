const fs = require('fs');


const leerJSON = () => {
    const tareasJSON = fs.readFileSync('./tareas.json','utf-8');
    const tareas = JSON.parse(tareasJSON);
     return tareas;

 }
const listar = () => {
    let tareas = leerJSON();
    mostrarTareas(tareas);
     
 }
 const escribirJSON =(tareas) => {
    let tareasConvertidas = JSON.stringify(tareas,null,3);
     fs.writeFileSync('./tareas.json',tareasConvertidas,'utf-8');
 }
 const guardarTarea = (tarea) => {
    let tareas = leerJSON();
    tareas.push(tarea);
    escribirJSON(tareas);

 }
 
 const filtrarPorEstado = (estado) => {
    let tareas = leerJSON();
    let tareasFiltradas = tareas.filter(tarea => tarea.estado.toLowerCase() === estado.toLowerCase());
    mostrarTareas(tareasFiltradas);

 }
 
 const mostrarTareas = (tareas) => {
    tareas.forEach((tarea,i)=> {
        console.log(`(${i + 1}) ${tarea.titulo} - ${tarea.estado}`);   
     });

 }
        


 module.exports ={
     listar,
     guardarTarea,
     filtrarPorEstado,
 }

