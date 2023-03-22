function rellenarDatos(){
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    
    document.getElementById("titulo").innerHTML = "Hola, "+usuario.nombre;
    document.getElementById("name").value = usuario.nombre;
    document.getElementById("password").value = usuario.contraseña;
    document.getElementById("language").value = usuario.idioma;


}
document.addEventListener("DOMContentLoaded", function() {

    rellenarDatos();

})