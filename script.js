/* global Arrays */
let nextUrl = "";
let pokemonAbilities = [];
let pokemonMoves = [];
let pokemonBuffer = [];
/* global Numbers */
/* let count = 0; */

async function fetchDataJson() {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=0`);
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
  /* fetchMovesValuesJson(); */
}

async function bufferNextPokemon() {
  document.getElementById('showMore').disabled = true;
  let buffer = await fetch(nextUrl);
  let bufferAsJson = await buffer.json();
  nextUrl = bufferAsJson.next;
  for (i = 0; i < bufferAsJson.results.length; i++) {
    let bufferAbilities = await fetch(bufferAsJson.results[i].url);
    let bufferAbilitiesAsJson = await bufferAbilities.json();
    pokemonBuffer.push(bufferAbilitiesAsJson);
  }
  document.getElementById('showMore').disabled = false;

  console.log(pokemonBuffer);
}

function fetchMovesValuesJson() {
  for (i = 0; i < pokemonAbilities.length; i++) {
    let allMoves = pokemonAbilities[i].moves;
    pokemonMoves.push(allMoves);
  }
  console.log(pokemonMoves);
}

async function init() {
 
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
