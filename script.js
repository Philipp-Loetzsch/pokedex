let nextUrl = "";
let pokemonAbilities = [];
let currentAbilities = [];
let moveAbilities = [];
let pokemonMoves;
let pokemonEvolution;
let count = 0;
let errorCount = 0;

async function fetchDataJson() {
  try{
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${count}`);
  let responseAsJson = await response.json();
  allPokemons = responseAsJson.results;
  nextUrl = responseAsJson.next;
  }
  catch(error){
    errorCount= errorCount + 1;
    if(errorCount < 5){
    nextUrl="";
    fetchDataJson();
    } 
    else{
      location.reload();
    }
  }
  errorCount = 0;
  fetchCardValuesJson(allPokemons);
}

async function fetchCardValuesJson(allPokemons) {
  try {
    for (i = 0; i < allPokemons.length; i++) {
      let allAbilities = await fetch(allPokemons[i].url);
      let allAbilitiesAsJson = await allAbilities.json();
      pokemonAbilities.push(allAbilitiesAsJson);
    }
  } catch (error) {
    errorCount= errorCount + 1;
    if(errorCount < 5){
    fetchCardValuesJson()
    } 
    else{
      location.reload();
    }
  }
  errorCount = 0; 
  currentAbilities = pokemonAbilities;
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
  let evolutionScreenTimeout = setTimeout(() => 
    {document.getElementById("loadingScreen").classList.remove("d-none")
    }, 50);
  let evolution = await fetch (currentAbilities[i].species.url)
  let evolutionAsJson = await evolution.json();
  let evolutionChain = await fetch (evolutionAsJson.evolution_chain.url);
  let evolutionChainAsJson = await evolutionChain.json();
  pokemonEvolution = evolutionChainAsJson.chain;
  clearTimeout(evolutionScreenTimeout)
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