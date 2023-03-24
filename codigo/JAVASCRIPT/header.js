function modificarHomeLogeado(){
    const logeado=sessionStorage.getItem('login');
    let divInfo = document.getElementById('SignUpLogIn');
    if(logeado === 'true'){
        const usuario = JSON.parse(sessionStorage.getItem('usuario'));
        const h2Nombre = document.createElement('h2');
        h2Nombre.innerHTML = `Hola, ${usuario.nombre}!!!!!!!!!`;

        const enlacePerfil = document.createElement('a');
        enlacePerfil.href = '../HTML/perfil.html';
        enlacePerfil.textContent = `${usuario.nombre}`;


        divInfo.innerHTML = enlacePerfil.innerHTML;
        divInfo.textContent = `${usuario.nombre}`;
        divInfo.href = '../HTML/perfil.html';

        console.log(divInfo);


        const botonCerrarSesion = document.createElement('button');
        botonCerrarSesion.textContent = 'Cerrar sesión';
        botonCerrarSesion.id = 'SignUpLogIn2';

        botonCerrarSesion.onclick = function() {

            sessionStorage.removeItem('usuario');
            sessionStorage.removeItem('login');


            window.location.href = 'home.html';
            console.log(window.location.href);
        };
        console.log(botonCerrarSesion);
        headersection1.appendChild(botonCerrarSesion);

    }
    if(logeado === false){
        divInfo.innerHTML = `<p>Registro | Login<p>`;
        divInfo.href = '../HTML/registroLogin.html';
    }
}
/*
function menuhamb(){
    const menu_hamb = document.getElementById("menu_hamburguesa");
    const sidebar = document.getElementById("sidebar");

    menu_hamb.addEventListener('click', function() {
        menu_hamb.classList.toggle('is_active');
        sidebar.classList.toggle('is_active');
    });
}
*/
document.addEventListener("DOMContentLoaded", function() {

    fetch("header.html")
        .then((response) => response.text())
        .then((html) => {
            const headerElement = document.createElement("header");

            headerElement.innerHTML = html;

            document.body.insertBefore(headerElement, document.body.firstChild);
            //modificarHomeLogeado();
            menuhamb();
            modificarHomeLogeado();
        })
        .catch((error) => {
            console.warn("Error al cargar el header:", error);
        });
});