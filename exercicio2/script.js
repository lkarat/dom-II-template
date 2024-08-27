const esconderSenha = (event) => {
    event.preventDefault()
    const capturaDeTipoDeSenha = document.getElementById("password")


    if (capturaDeTipoDeSenha.type === "text") {

        capturaDeTipoDeSenha.type = "password"
        event.target.innerHTML = "mostrar senha"



    } else {
        capturaDeTipoDeSenha.type = "text"
        event.target.innerHTML = "esconder senha"
    }

// document.getElementsByClassName("light")[0].setAttribute("class", "dark")
// // document.getElementsByClassName("light")[0].classList.add("dark")
// // document.getElementsByClassName("light")[0].classList.remove("light")

// console.log(document.getElementsByClassName("light")[0]);
// document.getElementsByClassName("light")[0].classList[0] = "dark"

}

const mudarCor = (event) => {
event.preventDefault()



if (event.target.innerHTML === "dark") {
    event.target.innerHTML = "light"
    document.getElementsByClassName("light")[0].setAttribute("class", "dark")
    
} else {
    event.target.innerHTML = "dark"
    document.getElementsByClassName("dark")[0].setAttribute("class", "light")
}


// const corBox = document.getElementsByClassName("light")[0]
// const corBox2 = document.getElementsByClassName("dark")[0]



// if (corBox.classList[0] === "light") {
//     corBox.setAttribute("class", "dark")
// } else if (corBox2.classList[0] === "dark") {
//     corBox.setAttribute("class", "light")
// }
console.log(event.target.innerHTML);


// document.getElementsByClassName("light")[0].setAttribute("class", "dark")

}

