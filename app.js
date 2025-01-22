// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    // agregamos el valor ingresado por el usuario y guardamos en la variable nombre
    let nombre = document.getElementById("amigo").value;
    //Aqui validamos si el usuario ingreso un nombre 
    if(nombre == ""){
        //Si no coloca nigun nombre lanzamos una alerta de que ingrese un nombre
        alert("Por favor, inserte un nombre");
    }else{
        amigos.push(nombre);
        limpiarInput();
    }
}

function limpiarInput(){
    let campo = document.querySelector('#amigo');
    campo.value = '';
}