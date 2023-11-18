/** ARRAY DE VALORES => LISTA DE VALORES **/
var values = [
  "Arequipa",
  "Lima",
  "Chimbote",
  "Huaraz",
  "Trujillo",
  "Chiclayo",
  "Juaja",
];

function printValues(a, b, c, d, e, f, g) {
  console.log(a, b, c, d, e, f, g);
}

printValues(...values);

const array_1 = [1, 2, 3];
const array_2 = [4, 5, 6];
const array_merge = [...array_1, ...array_2];
console.log(array_merge);
