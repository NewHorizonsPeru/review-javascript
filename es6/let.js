/** GLOBAL SCOPE LET **/
console.log(globalScopeLet);
let globalScopeLet = "Global Scope Let";

function functionScope() {
  let functionScopeLet = "Function Scope Let";
}

console.log(functionScopeLet);

if (1 > 0) {
  let blockScopeLet = "Block Scope Let";
}

console.log(blockScopeLet);
