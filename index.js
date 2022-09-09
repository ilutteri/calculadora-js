let actual = [];
let operador = [];

function actualizarPantalla(){
    document.getElementById("pantalla").innerHTML = "<p>"+ actual.join('') + "</p>";
    return;
}

function agregarNum(num){
    if(actual.length <= 15 && !(actual.length == 0 && num == 0)){
        actual.push(num);
        actualizarPantalla();
    }
    return;
}

function suma(){
    if(operador.length > 0){
        actual += operador;
        actualizarPantalla();
    }
    let operador = actual;
    return;
}