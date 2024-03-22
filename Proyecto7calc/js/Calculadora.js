let resultado = document.getElementById('resultado');

function asignar(valor) {
    resultado.value += valor;
}

function calcular() {
    resultado.value = eval(resultado.value);
}

function limpiar() {
    resultado.value = "";
}

function potencia() {
    resultado.value = Math.pow(parseFloat(resultado.value), 2);
}

function logaritmoNatural() {
    resultado.value = Math.log(parseFloat(resultado.value));
}

function seno() {
    resultado.value = Math.sin(parseFloat(resultado.value));
}

function raizCuadrada() {
    resultado.value = Math.sqrt(parseFloat(resultado.value));
}