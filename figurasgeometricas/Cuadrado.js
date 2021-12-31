function perimetroC(){
const lado = document.getElementById("idCuadrado");
const result = document.getElementById("idParrafo");
const input = lado.value;
const perimetro = input * 4;
result.innerText= "El perimetro del cuadrado es: " + perimetro;
}
function areaC(){
    const lado = document.getElementById("idCuadrado");
    const result = document.getElementById("idParrafo");
    const ar= lado.value;
    const area = ar * ar;
    result.innerText = "El area del cuadrado es: " + area;
}