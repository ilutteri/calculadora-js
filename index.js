let numeroActual = [];
let operador = [];
let pantalla = document.getElementById("pantalla");
let operandoActual;
let btnsNum = document.querySelectorAll(".num");
let btnsOperators = document.querySelectorAll(".operator");
let igual = document.getElementById("igual");
let clear = document.getElementById("clear");

let operandos = {
  "+": function (numero1, numero2) {
    return numero1 + numero2;
  },
  "-": function (numero1, numero2) {
    return numero1 - numero2;
  },
  "*": function (numero1, numero2) {
    return numero1 * numero2;
  },
  "/": function (numero1, numero2) {
    return numero1 / numero2;
  },
};

function actualizarPantalla(numero) {
  pantalla.innerText = numero;
  return;
}


btnsNum.forEach((element) => {
  element.addEventListener("click", function () {
    let input = element.innerHTML;
    if(input === "." && numeroActual.length === 0){
        numeroActual = "0";
    }
    if (
      numeroActual.length < 20 &&
      !(numeroActual.length === 0 && input === "0") 
      && !(input === "." && numeroActual.includes("."))
    ) {
      numeroActual += input;
      actualizarPantalla(numeroActual);
    }
  });
});


btnsOperators.forEach((element) => {
  element.addEventListener("click", function () {
    let input = element.innerHTML;
    operandoActual = input;
    operador = numeroActual;
    numeroActual = [];
  });
});


igual.addEventListener("click", function () {
  numeroActual = String(
    operandos[operandoActual](parseFloat(operador), parseFloat(numeroActual))
  );
  actualizarPantalla(numeroActual);
});


clear.addEventListener("click", function(){
    numeroActual = [];
    operador = [];
    operadorActual= [];
    actualizarPantalla("0");
})