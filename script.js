let overviewCards = [];

let count = 0;
let showAbilitienNumber = 0;
let actualDetailNumber = 0;

async function fetchDataJson() {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${count}`);
  let responseAsJson = await response.json();

  let evolution = await fetch("https://pokeapi.co/api/v2/evolution-chain/107/");
  let evolutionAsJson = await evolution.json();
  console.log(evolutionAsJson);

  let moves = await fetch("https://pokeapi.co/api/v2/move/13/")
  let movesAsJason = await moves.json();
  console.log(movesAsJason);
  
  let pokemon = responseAsJson.results;
  fetchCardValuesJson(pokemon);
}

async function fetchCardValuesJson(pokemon) {
  for (i = 0; i < pokemon.length; i++) {
    let choosePokemon = await fetch(pokemon[i].url);
    let choosePokemonAsJson = await choosePokemon.json();
    /* Arrays Abilities */

    /* edit JsonArray Pokemom of all needed Values */
    let newCard = contentDetailCardJson(choosePokemonAsJson);

    /* push JSON in global Array */
    overviewCards.push(newCard);
  }
  document.getElementById("loadingScreen").classList.add("d-none");
  init();
}

function contentDetailCardJson(choosePokemonAsJson) {
  let pokeType = [];
  choosePokemonAsJson.types.forEach((item) => {pokeType.push(item.type.name);});
  let pokeStats = [];
  choosePokemonAsJson.stats.forEach((item) => {pokeStats.push(item.stat.name);});
  let pokeValues = [];
  choosePokemonAsJson.stats.forEach((item) => {pokeValues.push(item.base_stat);});
  let pokeMoves = [];
  choosePokemonAsJson.moves.forEach((item) => {pokeMoves.push(item.move.name);});
  let newCard = {
    id: choosePokemonAsJson.id,
    pokename: choosePokemonAsJson.name,
    image: `<img src="${choosePokemonAsJson.sprites.other.dream_world.front_default}" alt="Pokemon" />`,
    type: pokeType,
    statsName: pokeStats,
    statsValues: pokeValues,
    moveName: pokeMoves,
  }
  return newCard;
}

function init() {
  let content = document.getElementById(`content`);
  content.innerHTML = "";
  for (i = 0; i < overviewCards.length; i++) {
    content.innerHTML += cardContent(i);
    showType(i);
  }
}

function showType(i) {
  let poketype = document.getElementById(`type${i}`);
  poketype.innerHTML = "";
  for (j = 0; j < overviewCards[i].type.length; j++)
    poketype.innerHTML += `<div>${overviewCards[i].type[j]}</div>`;
}
