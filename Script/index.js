'use strict'
var formulario = document.querySelector('#form');

formulario.addEventListener('submit', function LocalStorage (){
    /** Evento escuchar a un formulario con un boton submit */

    let nombre = document.querySelector('#nombre').value;
    let correo = document.querySelector('#correo').value;
    let genero =document.querySelector('#genero').value;
    let mensaje =document.querySelector('#mensaje').value;
   //Mandar a la localStorage

    localStorage.setItem("nombre",nombre )
    localStorage.setItem("correo",correo)
    localStorage.setItem("genero",genero)
    localStorage.setItem("mensaje",mensaje)
    //Invocar función 
    ObtenerLocalStorage()
}
);

function ObtenerLocalStorage() {
/**Lamar los dato  */
    let nombreGuardado = localStorage.getItem("nombre")
    let correoGuardado = localStorage.getItem("correo")
    let generoGuardado = localStorage.getItem("genero")

    alert(`Bienvenido: ${nombreGuardado}`)
    console.log(correoGuardado)
}



