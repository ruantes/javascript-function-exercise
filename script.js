var titulo = document.getElementById("titulo")
var btn = document.querySelector("#btn")

function disparaAlerta(){
    var body = document.querySelector("body")
body.classList.toggle("dark-mode")

if (btn.innerText == "Ativar"){
    btn.innerText = "Desativar"
}else {
    btn.innerText = "Ativar"
}
}

btn.addEventListener("click", disparaAlerta)