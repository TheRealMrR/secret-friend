
 let listaAmigos = [];
 let amigoSorteado = [];

function agregarAmigo(){
    //Obtenemos el nombre del amigo 
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == ''){
        alert('Ingresa un Nombre para continuar');
    }else{
        listaAmigos.push(nombreAmigo);
        //Restablece a una caja vacia
        document.getElementById('amigo').value = ''; 
        //se llama a la funcion para ser postramada en pantalla
        actualizarLista(listaAmigos);
    } 

}


function actualizarLista(lista){
    let listaHTML = document.getElementById('listaAmigos');
     // inicia la lista en blanco para no tener duplicados
     listaHTML.innerHTML = '';
    //recorre todo el array y lo agrega a nuestro elemento html
    for (let i = 0; i < lista.length; i++) {
        listaHTML.innerHTML += `<li>${lista[i]}</li>`;
      }
     
}

function sortearAmigo(){
    let listaSorteados = document.getElementById('resultado');
    let numIndice = Math.floor(Math.random()*listaAmigos.length);

    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista. Por favor, agrega amigos antes de sortear.");
        return;
    }

    if (amigoSorteado.length >= listaAmigos.length) {
        alert("Todos los amigos han sido sorteados.");
        return;
    }else{
        if (amigoSorteado.includes(listaAmigos[numIndice])){
            return sortearAmigo();
        }else{
            amigoSorteado.push(listaAmigos[numIndice]);
            listaSorteados.innerHTML += `<li>${listaAmigos[numIndice]}</li>`;
        }
    }


}

