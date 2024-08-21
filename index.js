const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnCopiar = document.querySelector (".btn-copiar");
const txtEncriptar = document.querySelector(".Ingresotexto");
const respuesta = document.querySelector(".rectangulo"); //corresponde al div por default con imagen y 2 párrafos
const visualizResult = document.querySelector ("visualizadorResultado");//corresponde al section que contiene la respuesta del encriptado/desencriptado
const resultadoencrip = document.querySelector (".resultadoencrip"); //corresponde al div que contiene los elementos de la respuesta
const resultado = document.querySelector(".traductor"); // corresponde al textarea en el que se verá la respuesta

txtEncriptar.addEventListener("input", function(event) {
    let text = event.target.value;
    
    // Eliminar mayúsculas y convertir a minúsculas
    text = text.toLowerCase();
    
    // Eliminar acentos
    text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    text = text.replace (/[^a-z\s]/g, '');
    
    // Actualizar el valor del textarea
    event.target.value = text;
});

btnEncriptar.addEventListener("click", function() {
    let textos = txtEncriptar.value;

    if (textos === "") {
        
        respuesta.style.display = "block"; // con block muestro elementos ocultos
        resultadoencrip.style.display = "none"; // con none oculto elementos

       
    } else {

        respuesta.style.display = "none"; 
        resultadoencrip.style.display = "block"; 
               
        let textoEncriptado = textos
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    resultado.value = textoEncriptado;
    
    btnCopiar.style.visibility = 'visible';
    btnEncriptar.style.visibility = 'hidden';
    btnDesencriptar.style.visibility = 'hidden';
    
}});

btnDesencriptar.addEventListener("click", function() {
    let textos = txtEncriptar.value;

    if (textos === "") {

        respuesta.style.display = "block"; // con block muestro elementos ocultos
        resultadoencrip.style.display = "none"; // con none oculto elementos

       
    } else {

        respuesta.style.display = "none"; 
        resultadoencrip.style.display = "block"; 

    
    let txtDesencrip = textos
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    resultado.value = txtDesencrip;
    btnCopiar.style.visibility = 'visible';
    btnEncriptar.style.visibility = 'hidden';
    btnDesencriptar.style.visibility = 'hidden';

}});

btnCopiar.addEventListener("click", function() {
    resultado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
    btnCopiar.style.visibility = 'hidden';
    btnEncriptar.style.visibility = 'visible';
    btnDesencriptar.style.visibility = 'visible';
    txtEncriptar.value = '';
    respuesta.style.display = "block";
    resultadoencrip.style.display = "none";

});

