
//Miguel Ángel Sainz Ayuso

function catchform(){

    var write = document.getElementById("cuadro");
    write.style.backgroundColor = texto.value;
}
var texto = document.getElementById("text");
texto.addEventListener("input", catchform);         

