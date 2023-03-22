let map;
function inicializarMapa(){
    map = L.map('mapaHome', {zoomControl: false}).setView([28.09973, -15.41343], 10);


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(map);
    L.control.zoom({position: "bottomright"}).addTo(map);
}


function agregarMarcador(lat, lng, nombre, descripcion){
    const marcador = L.marker([lat, lng]).addTo(map);
    marcador.nombreLugar = nombre;
    marcador.descripcionLugar=descripcion;

    const divInfoLugar = document.getElementById('titulo_h2');
    const divInfoDescripcion = document.getElementById('descripcionLugar');

    marcador.on('mouseover', function (e) {
        //Habría que cambiar los iconos por otras cosas pero se lo encargo a Victoria :9 (porque es la playita y la estrella
        //(lo puedo cambiar yo quizas)

        divInfoLugar.innerHTML = e.target.nombreLugar;
        divInfoDescripcion.innerHTML = e.target.descripcionLugar;
    });



    marcador.on('mouseout', function () {
    });

    marcador.on('dblclick', function () {
        window.location.href = `lugar.html?lat=${lat}&lng=${lng}`;
    });

    marcador.on('click', function () {
        window.location.href = `lugar.html?lat=${lat}&lng=${lng}`;
    });
}


async function obtenerLugares(){
    const respuesta = await fetch('../JSON/lugares.json');
    const datos = await respuesta.json();
    return datos.lugares;
}

window.addEventListener("DOMContentLoaded", function() {

    inicializarMapa();

    (async () => {
        const lugares = await obtenerLugares();

        if (lugares) {
            lugares.forEach(lugar => {
                agregarMarcador(lugar.latitud, lugar.longitud, lugar.nombre, lugar.informacion1);
            });
        }
    })();

});