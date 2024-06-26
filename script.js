let overviewCards = [];
let count = 0;

function init() {
  let content = document.getElementById(`content`);
  content.innerHTML = "";
  for (i = 0; i < overviewCards.length; i++) {
    content.innerHTML += cardContent(i);
    showType(i);
  }
}

function showType(i) {
  let poketype = document.getElementById(`type${i}`);
  poketype.innerHTML = "";
  for (j = 0; j < overviewCards[i].type.length; j++)
    poketype.innerHTML += cardContentType(i, j);
}

async function fetchDataJson() {
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${count}`
  );
  let responseAsJson = await response.json();
  let pokemon = responseAsJson.results;

   for (i = 0; i < pokemon.length; i++) {
    let choosePokemon = await fetch(pokemon[i].url);
    let choosePokemonAsJson = await choosePokemon.json();

    /* Array neue Karte */
    let pokeType = [];
    for (j = 0; j < choosePokemonAsJson.types.length; j++) {
      pokeType.push(choosePokemonAsJson.types[j].type.name);
    }
    let newCard = {
      id: choosePokemonAsJson.id,
      pokename: pokemon[i].name,
      image: `<img src="${choosePokemonAsJson.sprites.other.dream_world.front_default}" alt="Pokemon" />`,
      type: pokeType,
    };

    overviewCards.push(newCard);
  }
  init();
}
