/** GLOBAL SCOPE VAR **/
var globalScopeVar = "Global Scope Var";

/** FUNCTION SCOPE VAR **/
function functionScope() {
  var functionScopeVar = "Function Scope Var";
  console.log(globalScopeVar);
}

console.log(functionScopeVar);

functionScope();

if (1 === 0) {
  var blockScopeVar = "Block Scope Var";
}

console.log(blockScopeVar);

/------------------------------------------------/;

var blockScopeVar = undefined;
if (1 === 0) {
  blockScopeVar = "Block Scope Var";
}

console.log(blockScopeVar);

{
  //codigo
}
