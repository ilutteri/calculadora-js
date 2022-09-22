let numeroActual = [];
let operador = "0";
let operandoActual;
let memory = 0;

let screen = document.getElementById("screen");
let btnsNum = document.querySelectorAll(".num");
let btnsOperators = document.querySelectorAll(".operator");
let btnsMemory = document.querySelectorAll(".memory");
let squareRoot = document.getElementById("raiz");
let equals = document.getElementById("equals");
let clear = document.getElementById("clear");
let clearAll = document.getElementById("clearAll");
let erase = document.getElementById("erase");
let sign = document.getElementById("sign");

let operandos = {
  "+": function (num1, num2) {
    return num1 + num2;
  },
  "-": function (num1, num2) {
    return num1 - num2;
  },
  "x": function (num1, num2) {
    return num1 * num2;
  },
  "÷": function (num1, num2) {
    if(num2 == 0){
      return "ERROR"
    }
    return num1 / num2;
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
    refreshScreen(memory);
  },
}

const refreshScreen = (numero) => {
  screen.innerText = numero;
  return;
}

const clearScreen = () => {
  numeroActual = "0";
  refreshScreen(numeroActual);
  numeroActual = [];
  return
}



btnsNum.forEach((element) => {
  element.addEventListener("click", function () {
    let input = element.innerHTML;
    if (input === "." && numeroActual.length === 0) {
      numeroActual = "0";
    }
    if (
      numeroActual.length < 20 &&
      !(numeroActual.length === 0 && (input === "0"|| input === "00"))
      && !(input === "." && numeroActual.includes("."))
    ) {
      numeroActual += input;
      refreshScreen(numeroActual);
    }
  });
});


btnsOperators.forEach((element) => {
  element.addEventListener("click", function () {
    let input = element.innerHTML;
    operandoActual = input;
    operador = String(parseFloat(operador) + parseFloat(numeroActual));
    console.log(operador);
    numeroActual = [];
  });
});


squareRoot.addEventListener("click", function (){
  if(numeroActual <= 0) {
    numeroActual = "ERROR";
    refreshScreen(numeroActual);
    return
  }
  numeroActual = String(Math.sqrt(parseFloat(numeroActual)));
  refreshScreen(numeroActual.toString());
})

sign.addEventListener("click", function (){
  if(numeroActual !== "0" && numeroActual.length > 0){
    numeroActual = String(parseFloat(numeroActual) * -1);
    refreshScreen(numeroActual);
  }
  return
})

equals.addEventListener("click", function () {
  numeroActual = String(
    operandos[operandoActual](parseFloat(operador), parseFloat(numeroActual))
  );
  operador = "0";

  refreshScreen(numeroActual);
  return
});

clear.addEventListener("click", function (){
  clearScreen();
  return
})


clearAll.addEventListener("click", function () {
  numeroActual = [];
  operador = "0";
  operandoActual = [];
  refreshScreen("0");
  return
})

erase.addEventListener("click", function () {
  numeroActual = numeroActual.slice(0,-1);
  refreshScreen(numeroActual);
  if(numeroActual === "" || numeroActual.length === 0){
    numeroActual = "0";
    refreshScreen(numeroActual);
    numeroActual = [];
  }
  return
})

btnsMemory.forEach((element) => {
  element.addEventListener("click", function () {
    let input = element.innerHTML;
    if (input === "M+" || input === "M-") {
      memoryFunctions[input](numeroActual);
      return
    }else{
      memoryFunctions[input]();
      return
    }
  })
})