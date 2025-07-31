import { tarea } from "../../modules/itemTarea/itemTarea.js";

// Recibe la base de datos y un callback para actualizar el panel derecho
export function tareas(tareasDb, onTareaClick) {
    let div = document.createElement('div');
    div.className = "div-tareas";

    // Recorremos la base de datos y creamos cada tarea
    tareasDb.forEach((e) => {
        const item = tarea(
            e.indice,
            e.titulo,
            e.estado,
            e.fechaAs,
            e.fechaEn,
            e.integrantes
        );

        // Cuando hagan click en la tarea, actualizamos el panel de info
        item.addEventListener("click", () => {
            onTareaClick(e);
        });

        div.appendChild(item);
    });

    return div;
}
