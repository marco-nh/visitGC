function validarContraseñasRegistro(){
    let contraseña = document.getElementById('password').value;
    let repetirContraseña = document.getElementById('confirm-password').value;

    if(contraseña !== repetirContraseña){
        alert('Las contraseñas no son iguales');
        return false;
    }

    return true;

}

async function obtenerUsuarios(){
    const respuesta = await fetch('../JSON/usuarios.json');
    const datos = await respuesta.json();
    return datos.usuarios;
}

function validarUsuario(usuarios, correo, contraseña) {
    return usuarios.find(usuario => usuario.correo === correo && usuario.contraseña === contraseña);
}

document.getElementById('formularioLoginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const correo = document.getElementById('emailLogin').value;
    //console.log(correo);
    const contraseña = document.getElementById('passwordLogin').value;
    //console.log(contraseña);
    const usuarios = await obtenerUsuarios();
    const usuarioEncontrado = validarUsuario(usuarios, correo, contraseña);

    if (usuarioEncontrado) {
        sessionStorage.setItem('usuario', JSON.stringify(usuarioEncontrado));
        sessionStorage.setItem('login', 'true');
        window.location.href = 'home.html';
    } else {
        alert('Correo electrónico o contraseña incorrectos.');
    }
});

