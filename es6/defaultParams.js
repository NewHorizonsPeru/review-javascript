/** PROGRAMACIÓN IMPERATIVA **/
function printMessage(message) {
  message = typeof message !== "undefined" ? message : "Valor por Defecto";
  console.log(message);
}

printMessage(undefined);

/** DEFAULT PARAMS **/
/** PROGRAMACION DECLARATIVA **/
function printMessage(message = "Default Value") {
  console.log(message);
}

printMessage(null);
