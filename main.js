console.log(document.getElementById("encabezado1"));
// encabezado1.innerText= "DOM exercise";
encabezado1.innerHTML= "DOM exercise";
console.log(encabezado1.innerText);
let listas = document.getElementsByTagName("ul");

let elementos = document.getElementsByClassName("list-group-item")

let otroElemento = document.querySelector("ul>li");

let otrosElementos =document.querySelectorAll("ul>li");

console.log(listas.length);
console.log(listas[1]);
console.log(listas.item(1));