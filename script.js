let nextUrl = "";
/* global Arrays */
let pokemonAbilities = [];
let pokemonBuffer = [];
let moveAbilities = [];
let pokemonMoves;
/* global Numbers */
let count = 0;

async function fetchDataJson() {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${count}`);
  let responseAsJson = await response.json();
  allPokemons = responseAsJson.results;
  nextUrl = responseAsJson.next;
  console.log(responseAsJson.next);
  fetchCardValuesJson(allPokemons);
}

async function fetchCardValuesJson(allPokemons) {
  for (i = 0; i < allPokemons.length; i++) {
    let allAbilities = await fetch(allPokemons[i].url);
    let allAbilitiesAsJson = await allAbilities.json();
    pokemonAbilities.push(allAbilitiesAsJson);
  }
  init();
  bufferNextPokemon();
}

async function fetchMoveAbilities() {
  moveAbilities = [];
  document.getElementById("loadingScreen").classList.remove("d-none")
  for (i = 0; i < pokemonMoves.length; i++) {
    let abilitieOfMove = await fetch(pokemonMoves[i].move.url);
    let moveAbilitiesAsJson = await abilitieOfMove.json();
    moveAbilities.push(moveAbilitiesAsJson);
    if (i === 3) {
      break;
    }
  }
  document.getElementById("loadingScreen").classList.add("d-none")
  showAttacks();
}

function init() {
  let content = document.getElementById(`content`);
  content.innerHTML = "";
  for (i = 0; i < pokemonAbilities.length; i++) {
    content.innerHTML += cardContent(i);
    showType(i);
  }
  document.getElementById("loadingScreen").classList.add("d-none");
}

function showType(i) {
  let poketype = document.getElementById(`type${i}`);
  poketype.innerHTML = "";
  for (j = 0; j < pokemonAbilities[i].types.length; j++) {
    poketype.innerHTML += `<div>${pokemonAbilities[i].types[j].type.name}</div>`;
  }
}
