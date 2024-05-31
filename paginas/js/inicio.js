var email = document.getElementById('Email');
var contraseña = document.getElementById('Contraseña');

var error = document.getElementById('error');
error.style.color ='red' ;




function enviarFormulario(){
    console.log('Enviando formulario...');

    var mensajesError = [];


    if (email.value === null || email.value === ''){
        mensajesError.push('Ingresa tu email*');

    }

    if(contraseña.value === null || contraseña.value === ''){
        mensajesError.push('Ingresa tu contraseña*');

    }


    error.innerHTML = mensajesError.join('<br>');
    return false;

}