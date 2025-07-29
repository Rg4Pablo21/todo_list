import { header } from "../components/header/headerComponent.js";
import { footer } from "../components/footer/footerComponent.js";

export function dashboard(){

    let seccion = document.createElement('section');
    
    //header
    seccion.appendChild(header())
    seccion.appendChild(footer())

    return seccion
}

document.body.appendChild(dashboard());
