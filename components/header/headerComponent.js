export function header(){
    let header = document.createElement('header');
    

    let h1 = document.createElement('h1');
    h1.innerText="😎 Todo-list";
    header.appendChild(h1);

    let divTareas = document.createElement('div');
    divTareas.className = "div-tareas";
    header.appendChild(divTareas);

    let texto = document.createElement('span')
    texto.innerText="Pendientes"
    texto.className="texto"
    divTareas.appendChild(texto)
    

    let numero= document.createElement('span')
    numero.innerText="8"
    numero.className="numero"
    divTareas.appendChild(numero);

    

    let divLogoUsuario = document.createElement('div');
    divLogoUsuario.className="div-logo";

    let img = document.createElement('img')
    img.src= "https://static.vecteezy.com/system/resources/previews/014/018/579/non_2x/ms-365-logo-on-transparent-background-free-vector.jpg"
    img.className="logo-img";

    divLogoUsuario.appendChild(img);
    header.appendChild(divLogoUsuario);


 


    return header;

}