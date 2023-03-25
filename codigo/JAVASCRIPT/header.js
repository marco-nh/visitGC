function modificarHomeLogeado(){
    const logeado=sessionStorage.getItem('login');
    let divInfo = document.getElementById('SignUpLogIn');
    let divInfo_mov = document.getElementById('SignUpLogIn_mov');
    var navig = document.getElementById('navigation');
    console.log(divInfo_mov);
    if(logeado === 'true'){
        const usuario = JSON.parse(sessionStorage.getItem('usuario'));

        const enlacePerfil = document.createElement('a');
        enlacePerfil.href = '../HTML/perfil.html';
        enlacePerfil.textContent = `${usuario.nombre}`;

        const enlacePerfil_mov = document.createElement('a');
        enlacePerfil_mov.href = '../HTML/perfil.html';
        enlacePerfil_mov.textContent = `${usuario.nombre}`;

        divInfo.innerHTML = enlacePerfil.innerHTML;
        divInfo.textContent = `${usuario.nombre}`;
        divInfo.href = '../HTML/perfil.html';

        divInfo_mov.innerHTML = `<a id="signName"href="../HTML/perfil.html">${usuario.nombre}</a>`;



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
        SignUpLogIn_mov.appendChild(botonCerrarSesion);

    }
    if(logeado === false){
        divInfo.innerHTML = `<p>Registro | Login<p>`;
        divInfo.href = '../HTML/registroLogin.html';
    }
}

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


function menuhamb(){
    const menu_hamb = document.getElementById("menu_hamburguesa");
    const sidebar = document.getElementById("sidebar");

    menu_hamb.addEventListener('click', function() {
        menu_hamb.classList.toggle('is_active');
        sidebar.classList.toggle('is_active');
    });
}