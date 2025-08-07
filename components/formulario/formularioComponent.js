import { tareasDb } from "../../views/dashboardView.js";

export function formularios(cerrarModalCallback) {
        function obtenerFechaActual() {
        const hoy = new Date();
        const yyyy = hoy.getFullYear();
        const mm = String(hoy.getMonth() + 1).padStart(2, '0');
        const dd = String(hoy.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    }

    let overlay = document.createElement('div');
    overlay.className = 'modal-overlay';

    let modal = document.createElement('div');
    modal.className = 'modal';

    let formulario = document.createElement('form');
    formulario.className = 'formulario-tarea';

    let tituloFormulario = document.createElement('h2');
    tituloFormulario.textContent = "Agregar nueva tarea";

    // Campo: Título
    let inputTitulo = document.createElement('input');
    inputTitulo.type = "text";
    inputTitulo.placeholder = "Título de la tarea";
    inputTitulo.required = true;

    // Campo: Estado
    let selectEstado = document.createElement('select');
    ["pendiente", "En progreso", "completado"].forEach(estado => {
        let option = document.createElement('option');
        option.value = estado;
        option.textContent = estado;
        selectEstado.appendChild(option);
    });

    // Campo: Fecha de asignación (automática)
    let divFechaAs = document.createElement('div');
    let labelFechaAs = document.createElement('label');
    labelFechaAs.textContent = "📅 Fecha de asignación";
    labelFechaAs.style.fontWeight = "bold";

    let inputFechaAs = document.createElement('input');
    inputFechaAs.type = "date";
    inputFechaAs.required = true;
    inputFechaAs.value = obtenerFechaActual();   // ✅ fecha actual
    inputFechaAs.readOnly = true;                // ✅ solo lectura

    divFechaAs.appendChild(labelFechaAs);
    divFechaAs.appendChild(inputFechaAs);

    // Campo: Fecha de entrega
    let divFechaEn = document.createElement('div');
    let labelFechaEn = document.createElement('label');
    labelFechaEn.textContent = "📌 Fecha de entrega";
    labelFechaEn.style.fontWeight = "bold";

    let inputFechaEn = document.createElement('input');
    inputFechaEn.type = "date";
    inputFechaEn.required = true;
    inputFechaEn.min = obtenerFechaActual();     // ✅ mínimo: hoy

    divFechaEn.appendChild(labelFechaEn);
    divFechaEn.appendChild(inputFechaEn);

    // Campo: Descripción
    let inputDescripcion = document.createElement('textarea');
    inputDescripcion.placeholder = "Descripción de la tarea";
    inputDescripcion.required = true;

    // Botón agregar
    let btnAgregar = document.createElement('button');
    btnAgregar.type = "submit";
    btnAgregar.textContent = "Agregar tarea";

    // Botón cerrar
    let btnCerrar = document.createElement('span');
    btnCerrar.className = "cerrar-modal";
    btnCerrar.textContent = "×";
    btnCerrar.addEventListener("click", () => {
        overlay.remove();
        if (cerrarModalCallback) cerrarModalCallback();
    });

    // Armar formulario
    formulario.appendChild(tituloFormulario);
    formulario.appendChild(inputTitulo);
    formulario.appendChild(selectEstado);
    formulario.appendChild(divFechaAs);
    formulario.appendChild(divFechaEn);
    formulario.appendChild(inputDescripcion);
    formulario.appendChild(btnAgregar);

    modal.appendChild(btnCerrar);
    modal.appendChild(formulario);
    overlay.appendChild(modal);

    // Evento submit
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const nuevaTarea = {
            titulo: inputTitulo.value,
            estado: selectEstado.value,
            fechaAs: inputFechaAs.value,
            fechaEn: inputFechaEn.value,
            descripcion: inputDescripcion.value
        };

        tareasDb.push(nuevaTarea);
        console.log("✅ Tarea agregada:", nuevaTarea);
        overlay.remove();
        if (cerrarModalCallback) cerrarModalCallback();
    });

    return overlay;
}
