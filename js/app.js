/*
DOMContentLoaded sirve para controlar que primero se cargue TODO el documento
HTML, por ultimo javascript
*/


document
.addEventListener("DOMContentLoaded", function(){
//esta es zona segura
 //console.log(document.getElementById("txtNombre").value);
 //console.log(document.getElementById("txtApellido").value);

});

//añadiendo evento clic al boton mostrar
const btnMostrar = document.getElementById("btnMostrar");
btnMostrar.addEventListener("click", function(){
    //console.log("haciendo clic");
    //alert("hice clic");
    //recuperando info del formulario
    const nombres = document.getElementById("txtNombre").value;
    const apellido = document.getElementById("txtApellido").value;
    const cedula = document.getElementById("txtCedula").value;
    console.log('nombre' + nombres + ', apellidos' + apellido +  ', cedula' + cedula);
})


function hola(nombre, apellido){
console.log(nombre, apellido);
//codigo reutilizable
}