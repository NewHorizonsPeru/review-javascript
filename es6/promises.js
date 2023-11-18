const request = require("request");

function getRequestApi(url) {
  return new Promise((resolve, reject) => {
    request.get(url, function (error, response, body) {
      if (error) reject("500 Internal Server Error ☠");
      resolve(JSON.parse(body));
    });
  });
}

getRequestApi("https://rickandmortyapi.com/api/character")
  .then((responseCharacters) => {
    const characters = responseCharacters.results;
    const rick = characters[0];
    console.log(`El ID del personaje es:  ${rick.id}`);
    return getRequestApi(
      `https://rickandmortyapi.com/api/character/${rick.id}`
    );
  })
  .then((character) => {
    console.log(`El nombre del personaje es:  ${character.name}`);
    console.log(`La especie del personaje es:  ${character.species}`);
  })
  .catch((error) => console.log(error));

/**
function getRequestApi(url, callback) {
  request.get(url, function (error, response, body) {
    callback(JSON.parse(body));
  });
}

getRequestApi(
  "https://rickandmortyapi.com/api/character",
  function (responseCharacters) {
    const characters = responseCharacters.results;
    const rick = characters[0];
    console.log(`El ID del personaje es:  ${rick.id}`);
    getRequestApi(
      `https://rickandmortyapi.com/api/character/${rick.id}`,
      function (character) {
        console.log(`El nombre del personaje es:  ${character.name}`);
        console.log(`La especie del personaje es:  ${character.species}`);
      }
    );
  }
);
**/
