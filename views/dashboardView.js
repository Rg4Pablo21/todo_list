import { header } from "../components/header/headerComponent.js";
import { footer } from "../components/footer/footerComponent.js";
import { tareas } from "../components/tareas/tareasComponent.js";
import { informaciones } from "../components/informacion/informacionComponent.js";

export function dashboard() {
    let dashboard = document.createElement('section');
    dashboard.className = "dashboard";

    // Header
    dashboard.appendChild(header());

    // Contenedor para las dos secciones
    let contenedor = document.createElement('section');
    contenedor.className = "contenedor-secciones";

    // Añadimos las dos secciones dentro del contenedor
    contenedor.appendChild(tareas());
    contenedor.appendChild(informaciones());

    dashboard.appendChild(contenedor);

    // Footer
    dashboard.appendChild(footer());

    return dashboard;
}

document.body.appendChild(dashboard());
