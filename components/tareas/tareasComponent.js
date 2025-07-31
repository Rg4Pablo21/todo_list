import { tarea } from "../../modules/itemTarea/itemTarea.js";

// Base de datos de tareas
let tareasDb = [
    { 
        indice: 1,
        titulo: "Hola mundo1", 
        estado: "completado", 
        fechaAs: "17/05/2025", 
        fechaEn: "30/07/2025",
        integrantes: ["😇", "😊", "😎"]
    },
    { 
        indice: 2,
        titulo: "Hola mundo2", 
        estado: "pendiente", 
        fechaAs: "18/05/2025", 
        fechaEn: "31/07/2025",
        integrantes: ["😇", "😎"]
    },
    { 
        indice: 3,
        titulo: "Hola mundo3", 
        estado: "en progreso", 
        fechaAs: "19/05/2025", 
        fechaEn: "01/08/2025",
        integrantes: ["😊"]
    }
];

export function tareas() {
    let div = document.createElement('div');
    div.className = "div-tareas";

    // Recorremos la base de datos y creamos cada tarea
    tareasDb.forEach((e) => {
        div.appendChild(
            tarea(
                e.indice,
                e.titulo,
                e.estado,
                e.fechaAs,
                e.fechaEn,
                e.integrantes
            )
        );
    });

    return div;
}
