// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(){
    let friend=document.getElementById("amigo").value;
    if(friend==null || friend.trim()==""){
        alert("insertar un nombre, esta vacio");
        return;
    }

    let amigoInsertado = document.createElement("li");
    amigoInsertado.textContent = friend;
    document.getElementById("listaAmigos").appendChild(amigoInsertado);
    amigos.push(friend);
    document.getElementById("amigo").value = "";
}

function sortearAmigo(){
if(amigos.length<=0){
    alert("agrega amigos para sortear");
    return;
}
let numeroSorteo=Math.floor(Math.random()*amigos.length);
let amigoSorteado = amigos[numeroSorteo];
document.getElementById("resultado").innerText=amigoSorteado;

}