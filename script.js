/* global Arrays */
let allPokemons=[];
let pokemonAbilities = [];
let pokemonMoves = [];
/* global Numbers */
let count = 0;


async function fetchDataJson() {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${count}`);
  let responseAsJson = await response.json();
  /*    let evolution = await fetch("https://pokeapi.co/api/v2/evolution-chain/107/");
    let evolutionAsJson = await evolution.json();
    console.log(evolutionAsJson); */
  allPokemons.push(responseAsJson.results);

  /*  allPokemon.push(pokemon); */
  console.log(responseAsJson.results);
  console.warn(allPokemons)
  fetchCardValuesJson();

}

async function fetchCardValuesJson() {
  for(i = 0; i < allPokemons[0].length; i++ ){
    let allAbilities = await fetch(allPokemons[0][i].url);
    let allAbilitiesAsJson = await allAbilities.json();
    pokemonAbilities.push(allAbilitiesAsJson);
  }
  console.log(pokemonAbilities);
  document.getElementById("loadingScreen").classList.add("d-none");
  init(); 
/*   fetchMovesValuesJson();  */
}

function fetchMovesValuesJson() {
  for(i = 0; i < pokemonAbilities.length; i++ ){
    let allMoves = (pokemonAbilities[i].moves);
    pokemonMoves.push(allMoves);
  }
  console.log(pokemonMoves);
 
}

function init() {
  let content = document.getElementById(`content`);
  content.innerHTML = "";
  for (i = 0; i < allPokemons[0].length; i++) {
    content.innerHTML += cardContent(i);
     showType(i); 
  }
}

function showType(i) {
  let poketype = document.getElementById(`type${i}`);
  poketype.innerHTML = "";
  for (j = 0; j < pokemonAbilities[i].types.length; j++){
    poketype.innerHTML += `<div>${pokemonAbilities[i].types[j].type.name}</div>`;
  }
}
