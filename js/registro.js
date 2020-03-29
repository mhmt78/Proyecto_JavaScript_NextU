// Hemos omitido los acentos en los comentarios por compatibilidad

function limpiarErrores(){
  var errores = document.getElementsByClassName("text-danger");
  for(var i = 0; i < errores.length; i++){
    errores[i].innerHTML = "";
  }
}

function validar(formulario) {

  limpiarErrores();

  if (formulario.nombres.value.trim().length <= 2) {
    document.getElementById("errornombres").innerText= "Este campo es obligatorio (minimo 03 caracteres)";
    formulario.nombres.focus();
    return false;
  }

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerText = "Campo invalido";
    formulario.email.focus();
    return false;
  }

  if (formulario.contrasena.value.trim().length < 7 ) {
    document.getElementById("errorContrasena").innerText = "Campo no puede ser menor a 7 caracteres";
    formulario.contrasena.focus();
    return false;
  }

  if (formulario.contrasena.value != formulario.confirmacion.value) {
    document.getElementById("errorConfirmacion").innerText = "Campo no coincide con contraseña";
    formulario.confirmacion.focus();
    return false;
  }

  if (formulario.tipo.value == "-1") {
    document.getElementById("errorTipo").innerText = "Campo es obligatorio";
    formulario.tipo.focus();
    return false;
  }

  if (!formulario.acepto.checked) {
    document.getElementById("errorAcepto").innerText = "Debe aceptar los términos y condiciones";
    return false;
  }

  alert("Datos ingresados correctamente");
}
