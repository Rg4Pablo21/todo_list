import { header } from "../components/header/headerComponent.js";
import { footer } from "../components/footer/footerComponent.js";
import { tareas } from "../components/tareas/tareasComponent.js";
import { informaciones } from "../components/informacion/informacionComponent.js";

// ---------------- BASE DE DATOS DE TAREAS ----------------
export const tareasDb = [   
    { 
        indice: 1,
        titulo: "Hola mundo1", 
        estado: "completado", 
        fechaAs: "17/05/2025", 
        fechaEn: "30/07/2025",
        descripcion: "Investigar sobre energías renovables consiste en buscar información sobre fuentes de energía que se obtienen de recursos naturales inagotables, como el sol, el viento, el agua o la biomasa. Implica conocer sus tipos, beneficios ambientales, formas de producción, tecnologías utilizadas y su importancia para reducir el uso de combustibles fósiles y combatir el cambio climático.",
        integrantes: ["😇", "😊", "😎"]
    },
    { 
        indice: 2,
        titulo: "Hola mundo2", 
        estado: "pendiente", 
        fechaAs: "18/05/2025", 
        fechaEn: "31/07/2025",
        descripcion: "Descripción detallada de la tarea Hola mundo2",
        integrantes: ["😇", "😎"]
    },
    { 
        indice: 3,
        titulo: "Hola mundo3", 
        estado: "en progreso", 
        fechaAs: "19/05/2025", 
        fechaEn: "01/08/2025",
        descripcion: "Descripción detallada de la tarea Hola mundo3",
        integrantes: ["😊"]
    }
];

export function dashboard() {
    let dashboard = document.createElement('section');
    dashboard.className = "dashboard";

    // Header
    dashboard.appendChild(header());

    // Contenedor de secciones
    let contenedor = document.createElement('section');
    contenedor.className = "contenedor-secciones";

    // Creamos el panel de información vacío al inicio
    const panelInformacion = informaciones(tareasDb[0]);

    // Creamos la lista de tareas pasándole el callback para actualizar el panel
    contenedor.appendChild(
        tareas(tareasDb, (tareaSeleccionada) => {
            contenedor.replaceChild(informaciones(tareaSeleccionada), panelInformacion);
        })
    );

    contenedor.appendChild(panelInformacion);
    dashboard.appendChild(contenedor);

    // Footer
    dashboard.appendChild(footer());

    return dashboard;
}

document.body.appendChild(dashboard());
