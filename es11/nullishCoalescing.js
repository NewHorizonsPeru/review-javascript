/**
 *  || -> VALIDA NULL, UNDEFINED, FALSE Y 0
 *  ?? -> VALIDA NULL O UNDEFINED
 * **/
const user = {
  name: "David",
  lastName: "Toledo",
};
const lastName = user.fullName ?? "";
console.log(lastName);
const roleName = (user.role ?? {}).name ?? "Sin Definir";
console.log(roleName);

/**

console.log(user.role.id);
const value = false;

console.log(value || "Pedro");
console.log(value ?? "Pedro");

**/
