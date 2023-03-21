let map;
function inicializarMapa(){
    map = L.map('mapa').setView([28.09973, -15.41343], 10);


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 18
    }).addTo(map);

}


function agregarMarcador(lat, lng, nombre, descripcion){
    const marcador = L.marker([lat, lng]).addTo(map);
    marcador.nombreLugar = nombre;
    marcador.descripcionLugar=descripcion;

    
    marcador.on('mouseover', function (e) {
        const divInfoLugar = document.getElementById('mostrarDescripcion');
       
        const h2Nombre = document.createElement('h2');
        h2Nombre.innerHTML = e.target.nombreLugar;
        divInfoLugar.appendChild(h2Nombre); 
    
        const pDescripcion = document.createElement('p');
        pDescripcion.innerHTML = e.target.descripcionLugar;
        divInfoLugar.appendChild(pDescripcion);
    });


    
    marcador.on('mouseout', function () {
        const divInfoLugar = document.getElementById('mostrarDescripcion');
        divInfoLugar.textContent = '';
    });

    marcador.on('dblclick', function () {
        window.location.href = `lugar.html?lat=${lat}&lng=${lng}`;
    });

    marcador.on('click', function () {
        window.location.href = `lugar.html?lat=${lat}&lng=${lng}`;
    });
}

function modificarHomeLogeado(){
    const logeado=sessionStorage.getItem('login');
    if(logeado === 'true'){
        const usuario = JSON.parse(sessionStorage.getItem('usuario'));
        const h2Nombre = document.createElement('h2');
        h2Nombre.innerHTML = `Hola, ${usuario.nombre}!!!!!!!!!`;
        mainContainer.appendChild(h2Nombre);

        const enlacePerfil = document.createElement('a');
        enlacePerfil.href = '../HTML/perfil.html';
        enlacePerfil.textContent = 'Mi perfil';
        mainContainer.appendChild(enlacePerfil);

        const botonCerrarSesion = document.createElement('button');
        botonCerrarSesion.textContent = 'Cerrar sesión';


        botonCerrarSesion.onclick = function() {
        
            sessionStorage.removeItem('usuario');
            sessionStorage.removeItem('login');

   
            window.location.href = 'home.html';
        };

        mainContainer.appendChild(botonCerrarSesion);

    }

}

async function obtenerLugares(){
    const respuesta = await fetch('../JSON/lugares.json');
    const datos = await respuesta.json();
    return datos.lugares;
}

document.addEventListener("DOMContentLoaded", function() {

    inicializarMapa();
    modificarHomeLogeado();

    (async () => {
        const lugares = await obtenerLugares();
      
        if (lugares) {
          lugares.forEach(lugar => {
            agregarMarcador(lugar.latitud, lugar.longitud, lugar.nombre, lugar.informacion1);
          });
        }
      })();

});