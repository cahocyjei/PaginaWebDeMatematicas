const lado = document.getElementById("idCuadrado");
const resultado = document.getElementById("idParrafo");
const titulo = document.getElementById("nameFigure");
var contenido = "";

function onCheCua(){
    titulo.innerText = "CUADRADO";
    const cheCir = document.getElementById("idCheCir");
   cheCir.checked = false;
   contenido = titulo.innerHTML;

}
function onCheCir(){
    titulo.innerText = "CIRCULO";
    const cheCua = document.getElementById("idCheCua");
   cheCua.checked = false;
   contenido = titulo.innerHTML;
}

function calcularPerimetro(){

    if (contenido === 'CUADRADO') {
        let perimetro = lado.value * 4;
        resultado.innerText= "El perimetro del cuadrado es: " + perimetro;
    }if (contenido === 'CIRCULO') {
        let perimetro= Math.round((Math.PI * 2) * lado.value);
        resultado.innerText = "El perimetro del circulo es: " + perimetro;
    }
}

function calcularArea(){

    if (contenido === 'CUADRADO') {
        let area = lado.value * lado.value;
        resultado.innerText= "El Area del cuadrado es: " + area;
    }if (contenido === 'CIRCULO') {
        let area = Math.round(Math.PI * Math.pow(lado.value,2));
        resultado.innerText = "El area del circulo es: " + area;
    }
    
}

const lista = [200,600,500,800].sort((a,b)=>{
    if (a === b) {
        return 0;
    }if (a < b) {
        return -1
    }else{
        return 1;
    }
});

function calcularMedia(){
    let suma = lista.reduce((sumaElement,element)=>sumaElement+element);
    const media = suma / lista.length;
    return media;
}

function esPar(){
    if (lista.length % 2 === 0) {
        return true;        
    }else{
        return false;
    }
}
function calcularMediana(){
    if (esPar()) {
        return (lista[(lista.length/2)-1] + lista[lista.length/2])/2; 
    }else{
        return lista[parseInt(lista.length/2)];
    }
}
const array = [1,1,2,2,3,4,2,3,5,5,1,2];
function calcularModa(){
    const listCount = array.reduce((contadorNum, num)=>{
        contadorNum[num] = (contadorNum[num] || 0) + 1;
        return contadorNum;
    },{});
    const array2 =  Object.entries(listCount).sort((elementA,ElementB)=>{
        return elementA[1] - ElementB[1];
    });
    const moda = array2[array2.length - 1];
    return moda;
    
}