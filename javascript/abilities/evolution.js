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
    initProgressBarEvolution()
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

function showEvolution() {
  for (i = 0; i < speciesArray.length; i++) {
    document.getElementById("abilities").innerHTML += /* html */ `
    <div class="evolution">
        <div class="imgEvolve">
            <img src="${pokemonEvolutionImg[i]}" alt="picture not available">
        </div>
        <h3>${speciesArray[i].name.charAt(0).toUpperCase() + speciesArray[i].name.slice(1)}</h3>
    </div>`;
  }
}