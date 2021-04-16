console.log("hola de nuevo")

var mes = "Abril";
console.log(mes);

var dia = 12;

console.log("dia-tipo",typeof(dia));
//esto es un comentario
var esFestivo=false;
console.log("tipo",typeof(esFestivo));

/*
mas comentarios
 */

// console.dir(document);
// document.title="nuevo titulo"

console.log(document.head)

console.log(document.getElementById("titulo"))

var titulo = document.getElementById("titulo");
titulo.textContent="Nuevo titulo"
titulo.innerText="Nuevo nuevo titulo"
titulo.innerHTML= "<span>JS</span>"

var items = document.getElementsByClassName("list")

console.log(items)

items[2].textContent="tres"

var itemsTN =document.getElementsByTagName("li");
console.log(itemsTN)
itemsTN[1].textContent="Dos"

function suma(a,b){
    document.getElementById("resultado").innerText=a+b
    alert("Hiciste clic en suma")
}

var imprimir= function(dato){
    document.getElementById("valor").innerText=dato
}

var aumentar=function(){
    localStorage.contador++
    imprimir(localStorage.contador)
}

var reiniciar=function(){
    localStorage.contador=0
    imprimir(localStorage.contador)
}

var eliminar=function(){
    localStorage.removeItem("contador");
    imprimir(localStorage.contador)
}

if(typeof(Storage) != "undefined"){
    if(localStorage.contador){
        imprimir(localStorage.contador)
    }else{
        localStorage.contador=0;
    }
}











