let nextUrl = "";
let pokemonAbilities = [];
let currentAbilities = [];
let moveAbilities = [];
let pokemonMoves;
let pokemonEvolution;
let count = 0;
let errorCount = 0;


async function fetchDataJson() {
  progressBar = document.getElementById('progress');
  progressBar.style.width = 0 + "%";
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
      initProgressBar( pokemonAbilities ,30)
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
  progressBar.style.width = 0 +"%";
  for (i = 0; i < pokemonMoves.length; i++) {
    let loadingScreenTimeout = setTimeout(() => {document.getElementById("loadingScreen").classList.remove("d-none")}, 20);
    let abilitieOfMove = await fetch(pokemonMoves[i].move.url);
    clearTimeout(loadingScreenTimeout)
    let moveAbilitiesAsJson = await abilitieOfMove.json();
    moveAbilities.push(moveAbilitiesAsJson);
    initProgressBar(moveAbilities , 4)
    if (i === 3) {
      break;
    }  
  }
  document.getElementById("loadingScreen").classList.add("d-none")
  showAttacks();
}

async function fetchEvolutionChain(i){
  progressBar.style.width = 0 +"%";
  let evolutionScreenTimeout = setTimeout(() => 
    {document.getElementById("loadingScreen").classList.remove("d-none")
    }, 50);
  try {
    let evolution = await fetch (currentAbilities[i].species.url)
    let evolutionAsJson = await evolution.json();
    let evolutionChain = await fetch (evolutionAsJson.evolution_chain.url);
    let evolutionChainAsJson = await evolutionChain.json();
    pokemonEvolution = evolutionChainAsJson.chain;
  } catch (error) {
    errorCount= errorCount + 1;
    if(errorCount < 5){
    fetchEvolutionChain(i);
    } 
    else{
      location.reload();
    }
  }
  errorCount = 0;
  clearTimeout(evolutionScreenTimeout);
  getDataEvolution();
}