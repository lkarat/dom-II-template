const novoLi1 = document.createElement("li");
const novoLi2 = document.createElement("li");
console.log(novoLi1, novoLi2);


const novoTexto1 = document.createTextNode("Item 0")

const novoTexto2 = document.createTextNode("Item 5")

novoLi1.appendChild(novoTexto1)
novoLi2.appendChild(novoTexto2)

const currentUl = document.getElementById("lista");

currentUl.insertAdjacentElement("afterbegin", novoLi1)

currentUl.insertAdjacentElement("beforeend", novoLi2)



const listaFruta = document.getElementById("frutas");
console.log(listaFruta);

listaFruta.innerHTML += `<li> manga </li>`



