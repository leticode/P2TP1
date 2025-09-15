var dni = document.getElementById("dni");
var email = document.getElementById("email");
var telefono = document.getElementById("telefono");
var calle = document.getElementById("calle");
var error = document.getElementById("error");
error.style.color;
function enviarFormulario() {
  var mensajesError = [];
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexNumero = /^\d{10,11}$/;
  if (dni.value.length < 7 || dni.value.length > 8) {
    mensajesError.push("ingrese un DNI valido");
  }
  if (!/^\d+$/.test(dni.value)) {
    mensajesError.push("El DNI debe contener solo números");
  }

  if (!regexEmail.test(email.value)) {
    mensajesError.push("El email no es válido");
  }
  if (!regexNumero.test(telefono.value)) {
    mensajesError.push("El numero no es válido");
  }
  error.innerHTML = mensajesError.join(", ");

  return false;
}
