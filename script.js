let nextUrl = "";
/* global Arrays */
let pokemonAbilities = [];
let currentAbilities = [];
let pokemonBuffer = [];
let moveAbilities = [];
let pokemonMoves;
let  pokemonEvolution;
/* global Numbers */
let count = 0;

async function fetchDataJson() {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${count}`);
  let responseAsJson = await response.json();
  allPokemons = responseAsJson.results;
  nextUrl = responseAsJson.next;
  fetchCardValuesJson(allPokemons);
}

async function fetchCardValuesJson(allPokemons) {
  for (i = 0; i < allPokemons.length; i++) {
    let allAbilities = await fetch(allPokemons[i].url);
    let allAbilitiesAsJson = await allAbilities.json();
    pokemonAbilities.push(allAbilitiesAsJson);
  }
  currentAbilities = pokemonAbilities;
  console.log(pokemonAbilities);
  render();
  bufferNextPokemon();
}

async function fetchMoveAbilities() {
  moveAbilities = [];

  for (i = 0; i < pokemonMoves.length; i++) {
    let loadingScreenTimeout = setTimeout(() => {
      document.getElementById("loadingScreen").classList.remove("d-none")
    }, 20);
    let abilitieOfMove = await fetch(pokemonMoves[i].move.url);
    clearTimeout(loadingScreenTimeout)
    let moveAbilitiesAsJson = await abilitieOfMove.json();
    moveAbilities.push(moveAbilitiesAsJson);
    if (i === 3) {
      break;
    }  
   
  }
  document.getElementById("loadingScreen").classList.add("d-none")
  showAttacks();
}

async function fetchEvolutionChain(i){
  document.getElementById("loadingScreen").classList.remove("d-none");
  let evolution = await fetch (currentAbilities[i].species.url)
  let evolutionAsJson = await evolution.json();
  let evolutionChain = await fetch (evolutionAsJson.evolution_chain.url);
  let evolutionChainAsJson = await evolutionChain.json();
  pokemonEvolution = evolutionChainAsJson.chain;
  getDataEvolution();
}

function render() {
  let content = document.getElementById(`content`);
  content.innerHTML = "";
  for (i = 0; i < currentAbilities.length; i++) {
    content.innerHTML += cardContent(i);
    showType(i);
  }
  document.getElementById("loadingScreen").classList.add("d-none");
}

function showType(i) {
  let poketype = document.getElementById(`type${i}`);
  poketype.innerHTML = "";
  for (j = 0; j < currentAbilities[i].types.length; j++) {
    poketype.innerHTML += `<div class="type bg_${currentAbilities[i].types[j].type.name}">${currentAbilities[i].types[j].type.name}</div>`;
  }
}
