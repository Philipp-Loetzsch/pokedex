async function showMore() {
  document.getElementById("loadingScreen").classList.remove("d-none");
  while (pokemonBuffer.length > 0) {
    let cut = pokemonBuffer.shift();
    pokemonAbilities.push(cut);
  }
  bufferNextPokemon();
  render();
}

function showAmount() {
  if (!bufferDone) {
    document.getElementById("imgAmountSearch").src = "./assets/img/sanduhr.gif"
    return
  }
  document.getElementById("loadingScreen").classList.remove("d-none");
  let amountOfPokemon = document.getElementById(`amountOfPokemon`);
  count = amountOfPokemon.value - 1;
  pokemonBuffer = [];
  pokemonAbilities = [];
  fetchDataJson();
}

function showNext(i) {
  i = (i + 1) % currentAbilities.length;
  loadMovesValuesJson(i);
}

function showBefore(i) {
  i = (i - 1 + currentAbilities.length) % currentAbilities.length;
  loadMovesValuesJson(i);
}
