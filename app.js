// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let indice = 0;
let lista = document.querySelector('#listaAmigos');

//funcion para agregar el amigo a la lista
function agregarAmigo(){
    // agregamos el valor ingresado por el usuario y guardamos en la variable nombre
    let nombre = document.getElementById("amigo").value;
    //Aqui validamos si el usuario ingreso un nombre 
    if(nombre == ""){
        //Si no coloca nigun nombre lanzamos una alerta de que ingrese un nombre
        alert("Por favor, inserte un nombre");
    }else{
        // agregamos los nombres colocados en la lista
        amigos.push(nombre);
        limpiarInput();
        actualizarLista();
    }
}

//funcion para limpiar el campo donde escribimos el nombre
function limpiarInput(){
    let campo = document.querySelector('#amigo');
    campo.value = '';
}

//funcion para actiualizar la lista
function actualizarLista(){
    lista.innerHTML = '';
    //iteramos o recorremos la lista y mostramos los nombres en una lista en el html
    for (i = 0; i < amigos.length; i++) {
        //agregamos nombres a la lista del html
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
      } 
}

//funcion para sortear el amigo
function sortearAmigo(){
    //validamos que la lista tenga nombres de los amigos al momento de sortear
    if(amigos.length == 0){
        //en caso de que no tenga nombres mostramos una alerta
        alert("Agrega nombres de tus amigos")
    }else{
        // validamos que la lista tenga mas de un nombre, ya que si solo sorteamos un nombre siempre saldra el mismo
        if(amigos.length == 1){
            alert("Agrega minimo 2 nombres de tus amigos")
        }else{
            // generamos un numero aleatorio entre la cantidad de nombres añadidos en la lista
            lista.innerHTML = '';
            let indice = Math.floor(Math.random()*amigos.length)+1;

            // mostramos el nombre del amigo secreto en el html
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = `El amigo sorteado es: ${amigos[indice]}`;
        }
    }
}