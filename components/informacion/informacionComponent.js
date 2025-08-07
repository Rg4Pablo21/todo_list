import { formularios } from "../formulario/formularioComponent.js";

export function informaciones(tarea) {
    let contenedor = document.createElement('div');
    contenedor.className = "contenedor-informacion";

    let divBotones = document.createElement('div');
    divBotones.className = "div-botones";

    let btnTarea = document.createElement('button');
    btnTarea.className = "btn-tarea";
    btnTarea.innerText = "+ tarea";

    btnTarea.addEventListener("click", () => {
        document.body.appendChild(formularios(() => {
            console.log("Formulario cerrado.");
        }));
    });

    let btnArchivados = document.createElement('button');
    btnArchivados.className = "btn-archivados";
    btnArchivados.innerText = "Archivados";

    divBotones.appendChild(btnTarea);
    divBotones.appendChild(btnArchivados);

    let tarjeta = document.createElement('div');
    tarjeta.className = "div-informacion";

    let divEstado = document.createElement('div');
    divEstado.className = "estado-tarea";
    divEstado.innerText = tarea.estado;
    tarjeta.appendChild(divEstado);

    let titulo = document.createElement('h3');
    titulo.className = "titulo-asignacion";
    titulo.innerText = tarea.titulo;
    tarjeta.appendChild(titulo);

    let descripcion = document.createElement('p');
    descripcion.className = "descripcion-asignacion";
    descripcion.innerText = tarea.descripcion;
    tarjeta.appendChild(descripcion);

    let spanIntegrantes = document.createElement('span');
    spanIntegrantes.className = "span-integrantes";
    spanIntegrantes.innerText = "Integrantes";
    tarjeta.appendChild(spanIntegrantes);

    let divIntegrantes = document.createElement('div');
    divIntegrantes.className = "div-integrantes";
    tarea.integrantes.forEach(icono => {
        let divIntegrante = document.createElement('div');
        divIntegrante.className = "integrante";
        divIntegrante.innerText = icono;
        divIntegrantes.appendChild(divIntegrante);
    });
    tarjeta.appendChild(divIntegrantes);

    contenedor.appendChild(divBotones);
    contenedor.appendChild(tarjeta);

    return contenedor;
}
