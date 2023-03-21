let map;
function inicializarMapa(latitud, longitud){
    map = L.map('mapa').setView([latitud, longitud], 20);
    

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 18
    }).addTo(map);

    L.marker([latitud, longitud]).addTo(map);
}

function obtenerParametrosURL(){
    const parametroURL = new URLSearchParams(window.location.search);
    const latitud = parseFloat(parametroURL.get("lat"));
    const longitud = parseFloat(parametroURL.get("lng"));
    return {latitud, longitud};

}



async function obtenerLugares(){
    const respuesta = await fetch('../JSON/lugares.json');
    const datos = await respuesta.json();
    return datos.lugares;
}

async function obtenerLugarPorCoordenadas(latitud, longitud) {
    const lugares = await obtenerLugares();
  
    if (lugares) {
      const lugarEncontrado = lugares.find(lugar => {
        return lugar.latitud === latitud && lugar.longitud === longitud;
      });
  
      if (lugarEncontrado) {
        return lugarEncontrado;
      } else {
        console.error("No se encontró un lugar con las coordenadas proporcionadas");
      }
    } else {
      console.error("No se pudieron cargar los lugares");
    }
}

function rellenarHTML(lugar){
    const titulo=document.getElementById("titulo");
    titulo.textContent = lugar.nombre;

    const info1=document.getElementById("info1");
    info1.textContent = lugar.informacion1;

    const info2=document.getElementById("info2");
    info2.textContent = lugar.informacion2;

    const lugarFoto=document.getElementById("fotoLugar");
    const imagen = document.createElement("img");
    imagen.src=lugar.foto;
    lugarFoto.appendChild(imagen);

}
document.addEventListener("DOMContentLoaded", function() {

    
    const {latitud , longitud } = obtenerParametrosURL();
    inicializarMapa(latitud, longitud);
    (async () => {
        const lugar = await obtenerLugarPorCoordenadas(latitud, longitud);
        //console.log(lugar.nombre);
        rellenarHTML(lugar);
    })();
   
    

});