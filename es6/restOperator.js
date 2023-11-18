// resto (lo restante)
var arrayCountries = ["Perú", "Chile", "Brasil", "Argentina", "Colombia"];

const [peru, chile, ...rest] = arrayCountries;
console.log(rest);

const userData = {
  id: 789456,
  email: "admin@newhorizons.edu.pe",
  phoneNumber: "987654321",
};

const { email, ...resto } = userData;
console.log(resto);

/** LISTA DE VALORES => ARRAY DE VALORES **/
function printMessage(title, ...rest) {
  console.log(title);
  console.log(rest);
  console.log(arguments);
  //console.log(button);
}

printMessage(
  "Confirmación",
  "Registro Usuario",
  "El usuario se registró correctamente,",
  "ACEPTAR"
);
