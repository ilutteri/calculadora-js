let actual = [];
let operador = [];
let resultado = [];
let operando;

var operandos = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
};

function convertirANumero(arr) {
    let num = parseFloat(arr.join(''));
    return num;
}

function convertirAArreglo(num){
    let arr = num.toString().split('');
    return arr;
}

function actualizarPantalla(){
    document.getElementById("pantalla").innerHTML = "<p>"+ actual.join('') + "</p>";
    return;
}

function agregarNum(num){
    if(actual.length <= 19 && !(actual.length == 0 && num == 0)){
        actual.push(num);
        actualizarPantalla();
    }
    return;
}

function borrarTodo(){
    actual = [];
    operador = [];
    resultado = [];
    document.getElementById("pantalla").innerHTML = "<p> 0 </p>";
    return;
}

function suma(){
    if(operador > 0){
        let suma = operador + convertirANumero(actual);
        actual = convertirAArreglo(suma);
        resultado = convertirAArreglo(suma);
        operador = suma;
        actualizarPantalla();
        actual = [];
        operando = '+';
        return;
    }else{
        resultado = actual;
        operador = convertirANumero(actual);
        actual = [];
        return;
    }
}

function resta(){
    if(operador> 0){
        let resta = operador - convertirANumero(actual);
        actual = convertirAArreglo(resta);
        resultado = convertirAArreglo(resta);
        operador = resta;
        actualizarPantalla();
        operando = '-';
        actual = [];
    }else{
        resultado = actual;
        operador = convertirANumero(actual);
        actual = [];
    }
}

function igual() {
    actual = convertirAArreglo(operandos[operando](convertirANumero(actual), operador));
    actualizarPantalla();
    return;
}