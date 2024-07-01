async function fetchDataJson() {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=2&offset=${count}`);
  let responseAsJson = await response.json();
  /*    let evolution = await fetch("https://pokeapi.co/api/v2/evolution-chain/107/");
    let evolutionAsJson = await evolution.json();
    console.log(evolutionAsJson); */

  let pokemon = responseAsJson.results;
  fetchCardValuesJson(pokemon);
}

async function fetchCardValuesJson(pokemon) {
  for (i = 0; i < pokemon.length; i++) {
    let choosePokemon = await fetch(pokemon[i].url);
    let choosePokemonAsJson = await choosePokemon.json();
    let movesDetails = fetchMovesValuesJson(choosePokemonAsJson);
    let movesDetailsAsJson = await movesDetails;
    /* let movesDetailsJson = await movesDetails; */
       
    /* edit JsonArray Pokemom of all needed Values */
    let newCard = contentDetailCard(choosePokemonAsJson, movesDetailsAsJson);
    
    /* push JSON in global Array */
    overviewCards.push(newCard);
  }
  document.getElementById("loadingScreen").classList.add("d-none");
  init();
}

async function fetchMovesValuesJson(choosePokemonAsJson) {
  let movesDetails = {
    'name': [],
    'power': [],
    'pp': [],
    'text': [],
  };
  for (let i = 0; i < 6; i++) {
    let moves = await fetch(choosePokemonAsJson.moves[i].move.url);
    let movesAsJason = await moves.json();
    movesDetails.name.push(movesAsJason.name);
    movesDetails.power.push(movesAsJason.power);
    movesDetails.pp.push(movesAsJason.pp);
    movesDetails.text.push(movesAsJason.flavor_text_entries[4]);
   
  }
  return movesDetails;

}
