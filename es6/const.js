/** GLOBAL SCOPE VAR **/
const globalScopeConst = undefined;
globalScopeConst = 1;

function functionScope() {
  const functionScopeConst = "Function Scope Const";
}

console.log(functionScopeConst);

if (1 > 0) {
  let blockScopeConst = "Block Scope Const";
}

console.log(blockScopeConst);

/-------------------------------/;

const userData = {
  name: "Carmen",
  age: 30,
};

userData.age = 65;
userData.lastname = "Bonilla";

console.log(userData);
