let form:any = document.getElementById("form");
let resetForm = <HTMLFormElement>document.getElementById("form");

//inputs 
let nombre:any = document.getElementById("nombre");
let apellidos:any = document.getElementById("apellidos");
let rut:any = document.getElementById("rut");
let correo:any = document.getElementById("correo");
let movil:any = document.getElementById("movil");
let info:any = document.getElementById("info");
let enviar:any = document.getElementById("enviar");
let limpiar:any = document.getElementById("limpiar");
//checkbox
let python:any = document.getElementById("python") ;
let java:any = document.getElementById("java");
let ts:any = document.getElementById("ts") ;
let php:any = document.getElementById("php");
let c:any = document.getElementById("c") ;
let cpp:any = document.getElementById("cpp") ;
//radio
let exp1:any = document.getElementById("1");
let exp2:any = document.getElementById("2");
let exp3:any = document.getElementById("3");
let exp4:any = document.getElementById("4");
let exp5:any = document.getElementById("5");


//mensaje después de ingresar los datos correctamente
let mensaje:any= document.getElementById("mensaje");


//funcion validarRut
function validarRut(rut:string): boolean{
    if(!rut.match(/^[0-9]+[-]{1}[0-9kK]{1}$/)){
        return false;
    }
    return true;
}

function validarChecks(): boolean {
    if(python.checked || java.checked || ts.checked || php.checked || c.checked || cpp.checked){
        return true;
    }
    return false;
    
}
function validarRadios(): boolean {
    if(exp1.checked || exp2.checked || exp3.checked || exp4.checked || exp5.checked){
        return true;
    }
    return false;
}
form.addEventListener("submit",function(ev:any) {
        if(validarRut(rut.value) && validarRadios() && validarChecks()){
            form.style.display="none";
            mensaje.style.display="block";
            mensaje.innerHTML="hemos recibido sus datos, pronto nos estaremos comunicando con usted";
            mensaje.style.color="#ff0000";
        } else{
            if(!validarRut(rut.value)){
                form.style.display="none";
                mensaje.style.display="block";
                mensaje.innerHTML="RUT inválido! (Formato RUT: XXXXXXXX-X sin puntos y con guión";
                mensaje.style.color="#ff0000";
            }
            if(!validarRadios()){
                form.style.display="none";
                mensaje.style.display="block";
                mensaje.innerHTML="Elija al menos un lenguaje de programación";
                mensaje.style.color="#ff0000";
            }
            if(!validarChecks()){
                form.style.display="none";
                mensaje.style.display="block";
                mensaje.innerHTML="Elija al menos una opción en experiencia laboral";
                mensaje.style.color="#ff0000";
            }

        }

    
        ev.preventDefault();
    })

function limpiarDatos() : void{
    resetForm.reset();
}
 limpiar.addEventListener("click",function(ev:any){
    limpiarDatos();


    ev.preventDefault();
 })

