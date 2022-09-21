let numeroActual = [];
let operador = [];
let operandoActual;
let memory = 0;

let pantalla = document.getElementById("pantalla");
let btnsNum = document.querySelectorAll(".num");
let btnsOperators = document.querySelectorAll(".operator");
let btnsMemory = document.querySelectorAll(".memory");
let igual = document.getElementById("igual");
let clear = document.getElementById("clear");

let operandos = {
  "+": function (numero1, numero2) {
    return numero1 + numero2;
  },
  "-": function (numero1, numero2) {
    return numero1 - numero2;
  },
  "x": function (numero1, numero2) {
    return numero1 * numero2;
  },
  "÷": function (numero1, numero2) {
    return numero1 / numero2;
  },
};

let memoryFunctions = {
  "M+": function (numero) {
    memory += parseFloat(numero);
    numeroActual = [];
  },
  "M-": function (numero) {
    memory -= parseFloat(numero);
    numeroActual = [];
  },
  "MC": function () {
    memory = 0;
  },
  "MR": function () {
    numeroActual = memory;
    actualizarPantalla(memory);
  },
}

function actualizarPantalla(numero) {
  pantalla.innerText = numero;
  return;
}


btnsNum.forEach((element) => {
  element.addEventListener("click", function () {
    let input = element.innerHTML;
    if (input === "." && numeroActual.length === 0) {
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


clear.addEventListener("click", function () {
  numeroActual = [];
  operador = [];
  operadorActual = [];
  actualizarPantalla("0");
})

btnsMemory.forEach((element) => {
  element.addEventListener("click", function () {
    let input = element.innerHTML;
    if (input === "M+" || input === "M-") {
      memoryFunctions[input](numeroActual);
    }else{
      memoryFunctions[input]();
    }
  })
})