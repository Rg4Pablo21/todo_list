export function tarea(indice, titulo, estado, fechaAs, fechaEn, listaIntegrantes) {
    // Contenedor principal
    let div = document.createElement('div');
    div.className = "tarea";

    // Número de la tarea
    let divNumero = document.createElement('div');
    divNumero.className = "div-numero";
    divNumero.textContent = indice;
    div.appendChild(divNumero);

    // Título de la tarea
    let tituloTarea = document.createElement('h3');
    tituloTarea.className = "tarea-titulo";
    tituloTarea.textContent = titulo;
    div.appendChild(tituloTarea);

    // Estado de la tarea
    let divEstado = document.createElement('div');
    divEstado.className = `tarea-estado ${estado.toLowerCase()}`; // ejemplo: completado, pendiente, etc.
    divEstado.textContent = estado;
    div.appendChild(divEstado);

    // Fecha de asignación
    let fechaAsignacion = document.createElement('span');
    fechaAsignacion.className = "tarea-fecha-asignacion";
    fechaAsignacion.textContent = fechaAs;
    div.appendChild(fechaAsignacion);

    // Fecha de entrega
    let fechaEntrega = document.createElement('span');
    fechaEntrega.className = "tarea-fecha-entrega";
    fechaEntrega.textContent = fechaEn;
    div.appendChild(fechaEntrega);

    // Listado de integrantes
    let divIntegrantes = document.createElement('div');
    divIntegrantes.className = "tarea-integrantes";
    listaIntegrantes.forEach(integrante => {
        let imgIntegrante = document.createElement('div');
        imgIntegrante.className = "integrante-icono";
        imgIntegrante.textContent = integrante; // puedes reemplazar por <img> si son imágenes
        divIntegrantes.appendChild(imgIntegrante);
    });
    div.appendChild(divIntegrantes);

    // Botón eliminar
    let btnEliminar = document.createElement('div');
    btnEliminar.className = "tarea-eliminar";
    btnEliminar.innerHTML = "❌";
    div.appendChild(btnEliminar);

    return div;
}
