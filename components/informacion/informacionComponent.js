export function informaciones(tarea) {
    // Contenedor general
    let contenedor = document.createElement('div');
    contenedor.className = "contenedor-informacion";

    // ---------------- BOTONES SUPERIORES ----------------
    let divBotones = document.createElement('div');
    divBotones.className = "div-botones";

    // Botón + tarea
    let btnTarea = document.createElement('button');
    btnTarea.className = "btn-tarea";
    btnTarea.innerText = "+ tarea";

    // Botón archivados
    let btnArchivados = document.createElement('button');
    btnArchivados.className = "btn-archivados";
    btnArchivados.innerText = "Archivados";

    divBotones.appendChild(btnTarea);
    divBotones.appendChild(btnArchivados);

    // ---------------- TARJETA DE INFORMACIÓN ----------------
    let tarjeta = document.createElement('div');
    tarjeta.className = "div-informacion";

    // Estado
    let divEstado = document.createElement('div');
    divEstado.className = "estado-tarea";
    divEstado.innerText = tarea.estado;
    tarjeta.appendChild(divEstado);

    // Título
    let titulo = document.createElement('h3');
    titulo.className = "titulo-asignacion";
    titulo.innerText = tarea.titulo;
    tarjeta.appendChild(titulo);

    // Descripción
    let descripcion = document.createElement('p');
    descripcion.className = "descripcion-asignacion";
    descripcion.innerText = tarea.descripcion;
    tarjeta.appendChild(descripcion);

    // Integrantes
    let spanIntegrantes = document.createElement('span');
    spanIntegrantes.className = "span-integrantes";
    spanIntegrantes.innerText = "Integrantes";
    tarjeta.appendChild(spanIntegrantes);

    // Lista de integrantes
    let divIntegrantes = document.createElement('div');
    divIntegrantes.className = "div-integrantes";
    tarea.integrantes.forEach(icono => {
        let divIntegrante = document.createElement('div');
        divIntegrante.className = "integrante";
        divIntegrante.innerText = icono;
        divIntegrantes.appendChild(divIntegrante);
    });
    tarjeta.appendChild(divIntegrantes);

    // Añadimos todo al contenedor principal
    contenedor.appendChild(divBotones);
    contenedor.appendChild(tarjeta);

    return contenedor;
}
