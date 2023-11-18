var firstName = undefined;
var lastName = "Klein";

console.log(firstName + ", " + lastName);

console.log(`   ${firstName}, 
${lastName}`);

var firstName = "Jovan";
var lastName = "Perez";
//TEMPLATE LITERALS -> BACKTIP
console.log(`Nombre Completo: ${firstName} 
${lastName}`);

console.log(`${!firstName ? "Sin Nombre" : firstName}`);
