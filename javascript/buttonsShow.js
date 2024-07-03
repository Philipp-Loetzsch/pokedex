async function showMore() {
  document.getElementById("loadingScreen").classList.remove("d-none");
<<<<<<< HEAD
  while (pokemonBuffer.length > 0) {
    let cut = pokemonBuffer.shift();
    pokemonAbilities.push(cut);
  }
 
  console.log(pokemonAbilities);
  bufferNextPokemon();
  init();
=======
  count = count + 30;
  fetchDataJson();
>>>>>>> 8a8d78a764cc4b4058cd2d47aeef0fdf4592ff0f
}

function showAmount() {
  document.getElementById("loadingScreen").classList.remove("d-none");
  let amountOfPokemon = document.getElementById(`amountOfPokemon`);
  count = amountOfPokemon.value - 1;
  allPokemon = [];
  fetchDataJson();
}
