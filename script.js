var titulo = document.getElementById("titulo")
var btn = document.querySelector("#btn")

function disparaAlerta(){
    alert("Ruan")
    titulo.innerText = "Ruan"
}

btn.addEventListener("click", disparaAlerta)