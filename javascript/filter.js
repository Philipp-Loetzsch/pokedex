function searchPokemon() {
  let inputName = document.getElementById("searchPokeName");
  currentAbilities = [];
  pokemonAbilities.forEach((ability) => {
      if (ability.name.includes(inputName.value.toLowerCase())) {
        currentAbilities.push(ability);
      }
    });  
  render();
}

function resetFilter() {
  let clearInputName = document.getElementById("searchPokeName");
  currentAbilities = pokemonAbilities;
  clearInputName.value = "";
  render();
}