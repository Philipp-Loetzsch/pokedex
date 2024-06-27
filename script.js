let overviewCards = [];
let count = 0;

async function fetchDataJson() {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${count}`);
  let responseAsJson = await response.json();
  let pokemon = responseAsJson.results;

   for (i = 0; i < pokemon.length; i++) {
    let pokeType = [];
    let choosePokemon = await fetch(pokemon[i].url);
    let choosePokemonAsJson = await choosePokemon.json();  
    let newCard = {
      id: choosePokemonAsJson.id,
      pokename: pokemon[i].name,
      image: `<img src="${choosePokemonAsJson.sprites.other.dream_world.front_default}" alt="Pokemon" />`,
      type: pokeType,
    };
    choosePokemonAsJson.types.forEach((item)=> {pokeType.push(item.type.name);})
    overviewCards.push(newCard);
  }
  document.getElementById("loadingScreen").classList.add("d-none")
  init();
}

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
    poketype.innerHTML +=  `<div>${overviewCards[i].type[j]}</div>`;
}