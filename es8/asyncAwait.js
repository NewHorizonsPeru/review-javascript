import fetch from "node-fetch";

async function getRequestApi(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

(async () =>
  console.log(
    await getRequestApi("https://pokeapi.co/api/v2/pokemon/charmander")
  ))();

/**import axios from "axios";

async function getRequestApi(url) {
  try {
    const reponse = await axios.get(url);
    const data = reponse.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

(async () => {
  const characters = await getRequestApi(
    "https://rickandmortyapi.com/api/character"
  );
  const idCharacter = characters.results[0].id;
  console.log(`El ID del personaje es:  ${idCharacter}`);

  const character = await getRequestApi(
    `https://rickandmortyapi.com/api/character/${idCharacter}`
  );
  console.log(`El nombre del personaje es:  ${character.name}`);
})();**/
