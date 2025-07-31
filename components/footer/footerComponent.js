export function footer() {
    let footer = document.createElement('footer');

    let hr = document.createElement('hr');
    footer.appendChild(hr);

    let divContenido = document.createElement('div');
    divContenido.className = "footer-contenido";

    let spanVacio = document.createElement('span');
    divContenido.appendChild(spanVacio);

    let enlace = document.createElement('a');
    enlace.className = "footer-github";
    enlace.href = "https://github.com/Rg4Pablo21/todo_list.git";
    enlace.innerText = "GitHub";
    enlace.target = "_blank";
    divContenido.appendChild(enlace);

    footer.appendChild(divContenido);

    return footer;
}
