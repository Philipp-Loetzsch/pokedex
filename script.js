function contentDetailCard(choosePokemonAsJson) {
   /* Arrays Abilities */
  let abilities =  loadAbilities(choosePokemonAsJson)
  let newCard = {
    id: choosePokemonAsJson.id,
    pokename: choosePokemonAsJson.name,
    image: `<img src="${choosePokemonAsJson.sprites.other.dream_world.front_default}" alt="Pokemon" />`,
    type: abilities.pokeType,
    statsName: abilities.pokeStats,
    statsValues: abilities.pokeValues,
    moveName: abilities.pokeMoves,
  }
  return newCard;
}

function loadAbilities(choosePokemonAsJson, moveDetails){
  let pokeAbilities ={
    pokeType : [],
    pokeStats : [],
    pokeValues : [],
    pokeMoves : [],
    pokeMove : []
  }
  choosePokemonAsJson.types.forEach((item) => {pokeAbilities.pokeType.push(item.type.name);});
  choosePokemonAsJson.stats.forEach((item) => {pokeAbilities.pokeStats.push(item.stat.name);});
  choosePokemonAsJson.stats.forEach((item) => {pokeAbilities.pokeValues.push(item.base_stat);});
  choosePokemonAsJson.moves.forEach((item) => {pokeAbilities.pokeMoves.push(item.move.name);});
  pokeAbilities.pokeMove.push(moveDetails)

  console.log(pokeAbilities) 
  return pokeAbilities;
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
    poketype.innerHTML += `<div>${overviewCards[i].type[j]}</div>`;
}
