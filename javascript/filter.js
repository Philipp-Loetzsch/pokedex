function searchPokemon() {
  let inputName = document.getElementById("searchPokeName");
  currentAbilities = [];
  /*  currentAbilities = pokemonAbilities.filter(name => name.includes(inputName)) */
     pokemonAbilities.forEach((ability) => {
      if (ability.name.includes(inputName.value.toLowerCase())) {
        currentAbilities.push(ability);
      }
    });  
/*     currentAbilities = pokemonAbilities.filter((ability) => {
      return ability.name.some((name) => name.toLowerCase().includes(inputNameValue));
  }); */
  render();
  console.log(currentAbilities);
}

function resetFilter() {
  let clearInputName = document.getElementById("searchPokeName");
  currentAbilities = pokemonAbilities;
  clearInputName.value = "";
  render();
}
