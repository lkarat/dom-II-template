const segurandoShift = (event) => {
    console.log(event.shiftKey);
    const paragrafo = document.getElementById("mensagem")



    if (event.shiftKey === true) {
        paragrafo.innerHTML = "ATENÇÃO: SEGURANDO SHIFT"

    } else {
        paragrafo.innerHTML = " "
        
    }
    

}