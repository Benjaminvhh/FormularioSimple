"use strict";
var form = document.getElementById("form");
var resetForm = document.getElementById("form");
//inputs 
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var rut = document.getElementById("rut");
var correo = document.getElementById("correo");
var movil = document.getElementById("movil");
var info = document.getElementById("info");
var enviar = document.getElementById("enviar");
var limpiar = document.getElementById("limpiar");
//checkbox
var python = document.getElementById("python");
var java = document.getElementById("java");
var ts = document.getElementById("ts");
var php = document.getElementById("php");
var c = document.getElementById("c");
var cpp = document.getElementById("cpp");
//radio
var exp1 = document.getElementById("1");
var exp2 = document.getElementById("2");
var exp3 = document.getElementById("3");
var exp4 = document.getElementById("4");
var exp5 = document.getElementById("5");
//mensaje después de ingresar los datos correctamente
var mensaje = document.getElementById("mensaje");
//funcion validarRut
function validarRut(rut) {
    if (!rut.match(/^[0-9]+[-]{1}[0-9kK]{1}$/)) {
        return false;
    }
    return true;
}
function validarChecks() {
    if (python.checked || java.checked || ts.checked || php.checked || c.checked || cpp.checked) {
        return true;
    }
    return false;
}
function validarRadios() {
    if (exp1.checked || exp2.checked || exp3.checked || exp4.checked || exp5.checked) {
        return true;
    }
    return false;
}
form.addEventListener("submit", function (ev) {
    if (validarRut(rut.value) && validarRadios() && validarChecks()) {
        form.style.display = "none";
        mensaje.style.display = "block";
        mensaje.innerHTML = "hemos recibido sus datos, pronto nos estaremos comunicando con usted";
        mensaje.style.color = "#ff0000";
    }
    else {
        if (!validarRut(rut.value)) {
            form.style.display = "none";
            mensaje.style.display = "block";
            mensaje.innerHTML = "RUT inválido! (Formato RUT: XXXXXXXX-X sin puntos y con guión";
            mensaje.style.color = "#ff0000";
        }
        if (!validarRadios()) {
            form.style.display = "none";
            mensaje.style.display = "block";
            mensaje.innerHTML = "Elija al menos un lenguaje de programación";
            mensaje.style.color = "#ff0000";
        }
        if (!validarChecks()) {
            form.style.display = "none";
            mensaje.style.display = "block";
            mensaje.innerHTML = "Elija al menos una opción en experiencia laboral";
            mensaje.style.color = "#ff0000";
        }
    }
    ev.preventDefault();
});
function limpiarDatos() {
    resetForm.reset();
}
limpiar.addEventListener("click", function (ev) {
    limpiarDatos();
    ev.preventDefault();
});
