
 let listaAmigos = [];

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
        amigoHtml(listaAmigos);
    } 

}


function amigoHtml(lista){
    let listaHTML = document.getElementById('listaAmigos');
     // inicia la lista en blanco para no tener duplicados
     listaHTML.innerHTML = '';
    //recorre todo el array y lo agrega a nuestro elemnto html
    for (let i = 0; i < lista.length; i++) {
        listaHTML.innerHTML += `<li>${lista[i]}</li>`;
      }
     
}


    