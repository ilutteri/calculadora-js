let actual = [];
let operador;
let operadorIgual = undefined;
let auxIgual = undefined;
let resultado = [];
let operandoGlobal;

var operaciones = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
    '*': function(a, b) { return a * b },
    '/': function(a, b) { if(b != 0) {
                             return a / b;      
                        } else {
                            return "ERROR";
                        }}
};

function convertirANumero(arr = []) {
    let num = parseFloat(arr.join(''));
    return num;
}

function convertirAArreglo(num){
    let arr = num.toString().split('');
    return arr;
}

function actualizarPantalla(number = ''){
    if(number == "NaN") number = 'ERROR';
    document.getElementById("pantalla").innerHTML = "<p>"+ number + "</p>";
    return;
}

function agregarNum(num){
    if(actual.length <= 19 && !(actual.length == 1 && num == 0)){
        actual.push(num);
        actualizarPantalla(actual.join(''));
    }
    return;
}

function borrarTodo(){
    actual = [];
    operador = undefined;
    resultado = [];
    operadorIgual = undefined;
    auxIgual = undefined;
    actualizarPantalla(0);
    return;
}


function operacion(operando = ''){
    if(operador) {
        console.log(operandoGlobal)
        let resultado = operaciones[operandoGlobal](operador,convertirANumero(actual));
        actualizarPantalla(resultado.toString());
        operador = resultado;
        actual = [];
    } else {
        operador = convertirANumero(actual);
        operadorIgual = undefined;
        operandoGlobal = operando;
        actual = [];
    }
}


function igual() {
    if(!operandoGlobal){
        actualizarPantalla(actual.join(''));
    } else {
        if(!operadorIgual){
            operadorIgual = operador;
            operador = undefined;
            auxIgual = convertirANumero(actual);
        }
        actual = convertirAArreglo(operaciones[operandoGlobal](operadorIgual, convertirANumero(actual)));
        actualizarPantalla(actual.join(''));
        operadorIgual = auxIgual;
        return;
    }
}