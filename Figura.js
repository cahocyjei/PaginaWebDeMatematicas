const lado = document.getElementById("valorMedida");
const resultado = document.getElementById("resultado");
const titulo = document.getElementById("figura");
var contenido = ""; 

function onCuadrado(){
    titulo.innerText = "CUADRADO";
    const box2 = document.getElementById("idCheck2");
   box2.checked = false;
   contenido = titulo.innerHTML;

}
function onCirculo(){
    titulo.innerText = "CIRCULO";
    const box1 = document.getElementById("idCheck1");
   box1.checked = false;
   contenido = titulo.innerHTML;
}

function calcularPerimetro(){

    if (contenido === 'CUADRADO') {
        resultado.innerText=`El perimetro del cuadrado es: ${lado.value * 4}`;
    }if (contenido === 'CIRCULO') {
        resultado.innerText = `El perimetro del circulo es: ${Math.round((Math.PI * 2) * lado.value)}`;
    }
}

function calcularArea(){

    if (contenido === 'CUADRADO') {
        resultado.innerText= `El Area del cuadrado es: ${lado.value * lado.value}`;
    }if (contenido === 'CIRCULO') {
        resultado.innerText =`El area del circulo es:${Math.round(Math.PI * Math.pow(lado.value,2))}`;
    }
    
}


function calcularMedia(){
    let suma = lista.reduce((sumaElement,element)=>sumaElement+element);
    const media = suma / lista.length;
    result.innerText = media;
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