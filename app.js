// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let indice = 0;
let lista = document.querySelector('#listaAmigos');


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
        actualizarLista();
    }
}

function limpiarInput(){
    let campo = document.querySelector('#amigo');
    campo.value = '';
}

function actualizarLista(){
    lista.innerHTML = '';
    for (i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
      } 
}

function sortearAmigo(){
    if(amigos.length == 0){
        alert("Agrega nombres de tus amigos")
    }else{
        if(amigos.length == 1){
            alert("Agrega minimo 2 nombres de tus amigos")
        }else{
            lista.innerHTML = '';
            let indice = Math.floor(Math.random()*amigos.length)+1;
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = `El amigo sorteado es: ${amigos[indice]}`;
        }
    }
}