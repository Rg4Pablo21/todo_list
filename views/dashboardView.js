import { header } from "../components/header/headerComponent.js";

export function dashboard(){

    let seccion = document.createElement('section');


    //header
    seccion.appendChild(header())

    return seccion
}

document.body.appendChild(dashboard());
