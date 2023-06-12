import analyzer from './analyzer.js';

// //TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textarea= document.querySelector("textarea[name='user-input']"); 
textarea.addEventListener("keyup",function(){ 
    const contenido = textarea.value;
    
    const contarCaracteres = analyzer.getCharacterCount(contenido);
    document.getElementById("contarCaracteres").innerHTML = contarCaracteres;

    const contarPalabras = analyzer.getWordCount(contenido);
    document.getElementById("contarPalabras").innerHTML = contarPalabras;

    const sinCaracteres = analyzer.getCharacterCountExcludingSpaces(contenido);
    document.getElementById("sinCaracteres").innerHTML = sinCaracteres;

    const longitudPromedio = analyzer.getAverageWordLength(contenido);
    document.getElementById("longitudPromedio").innerHTML = longitudPromedio;

    const contarNumeros = analyzer.getNumberCount(contenido);
    document.getElementById("contarNumeros").innerHTML = contarNumeros;

    const sumaNumeros = analyzer.getNumberSum(contenido);
    document.getElementById("sumaNumeros").innerHTML = sumaNumeros;   
})   

const button= document.getElementById("reset-button"); 
button.addEventListener("click",()=>{ 
    const textarea = document.querySelector("textarea[name='user-input']");
    textarea.value='';
});