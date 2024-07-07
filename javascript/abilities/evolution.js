let speciesArray = [];
let pokemonEvolutionImg = [];

async function getDataEvolution() {
  speciesArray = [];
  pokemonEvolutionImg = [];
  extractSpecies(pokemonEvolution);
  for (i = 0; i < speciesArray.length; i++) {
    let species = await fetch(speciesArray[i].url);
    let speciesAsJson = await species.json();
    let evolutionImg = await fetch(speciesAsJson.varieties[0].pokemon.url);
    let evolutionImgAsJson = await evolutionImg.json();
    pokemonEvolutionImg.push(evolutionImgAsJson.sprites.other.showdown.front_default);
    speciesArrayLenght = speciesArray.length
    initProgressBar(pokemonEvolutionImg, speciesArrayLenght)
  }
  document.getElementById("loadingScreen").classList.add("d-none");
  showEvolution();
}

function extractSpecies(evolution) {
  if (evolution.species) {
    speciesArray.push({
      name: evolution.species.name,
      url: evolution.species.url,
    });
  }
  checkOfEvolutions(evolution); 
}

function checkOfEvolutions(evolution){
  if (evolution.evolves_to && evolution.evolves_to.length > 0) {
    for (let nextEvolution of evolution.evolves_to) {
      extractSpecies(nextEvolution);
    }
  }
}

