async function showMore() {
  document.getElementById("loadingScreen").classList.remove("d-none");
  while (pokemonBuffer.length > 0) {
    let cut = pokemonBuffer.shift();
    pokemonAbilities.push(cut);
  }
 
  console.log(pokemonAbilities);
  bufferNextPokemon();
  init();

}

function showAmount() {
  document.getElementById("loadingScreen").classList.remove("d-none");
  let amountOfPokemon = document.getElementById(`amountOfPokemon`);
  count = amountOfPokemon.value - 1;
  allPokemon = [];
  fetchDataJson();
}
