var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var email = document.getElementById('email');
var password = document.getElementById('password')
var fechaNacimiento = document.getElementById('fechaNacimiento')
var pais = document.getElementById('pais');
var terminos = document.getElementById('terminos');



var error = document.getElementById('error');
error.style.color ='red' ;


function enviarFormulario(){
   console.log('Enviando formulario...');

   


   var mensajesError = [];

   if(nombre.value === null || nombre.value === '') {
      
    mensajesError.push('Ingresa tu nombre*');
   
   }
   if(apellido.value === null || apellido.value === '') {

      mensajesError.push('Ingresa tu apellido*')
   }
   if(email.value === null || email.value === '') {

      mensajesError.push('Ingresa tu Email*')
   }
   if(password.value === null || password.value === '') {

      mensajesError.push('Ingresa tu contraseña*')
   }
   if(fechaNacimiento.value === null || fechaNacimiento.value === '') {

      mensajesError.push('Ingresa tu fecha de nacimiento*')
   }
   if(pais.value === null || pais.value === '') {

      mensajesError.push('Ingresa tu pais*')
   }
   if(terminos.checked == false) {
      mensajesError.push('Aceptar Términos y condiciones*');
   } else {
      mensajesError.push = "none";
   }

   

   
   
   

   error.innerHTML = mensajesError.join('<br>');

   return false;
}


