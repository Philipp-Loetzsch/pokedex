function showMore() {
  document.getElementById("loadingScreen").classList.remove("d-none");
  count = count + 30;
  more = more + 1;
  fetchDataJson();
}

function showAmount() {
  document.getElementById("loadingScreen").classList.remove("d-none");
  let amountOfPokemon = document.getElementById(`amountOfPokemon`);
  count = amountOfPokemon.value - 1;
  allPokemon = [];
  fetchDataJson();
}
