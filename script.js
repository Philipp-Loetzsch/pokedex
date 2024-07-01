function contentDetailCard(choosePokemonAsJson, movesDetailsAsJson) {
   /* Arrays Abilities */
  let abilities =  loadAbilities(choosePokemonAsJson, movesDetailsAsJson)
  let newCard = {
    id: choosePokemonAsJson.id,
    pokename: choosePokemonAsJson.name,
    image: `<img src="${choosePokemonAsJson.sprites.other.dream_world.front_default}" alt="Pokemon" />`,
    type: abilities.pokeType,
    statsName: abilities.pokeStats,
    statsValues: abilities.pokeValues,
    moveName: abilities.pokeMoves,
    power: abilities.movePower,
    pp: abilities.movePp,
    description: abilities.moveText
  }
  return newCard;
}

function loadAbilities(choosePokemonAsJson, movesDetailsAsJson){
   let moveList = movesDetailsAsJson;
  console.log(moveList);
  let pokeAbilities ={
    'pokeType' : [],
    'pokeStats' : [],
    'pokeValues' : [],
    'pokeMoves' : [],
    'movePower' : [],
    'movePp' :[],
    'moveText':[]
  }
  choosePokemonAsJson.types.forEach((item) => {pokeAbilities.pokeType.push(item.type.name);});
  choosePokemonAsJson.stats.forEach((item) => {pokeAbilities.pokeStats.push(item.stat.name);});
  choosePokemonAsJson.stats.forEach((item) => {pokeAbilities.pokeValues.push(item.base_stat);});
  moveList.name.forEach((item) => {pokeAbilities.pokeMoves.push(item);});
  moveList.power.forEach((item) => {pokeAbilities.movePower.push(item);});
  moveList.pp.forEach((item) => {pokeAbilities.movePp.push(item);});
  moveList.text.forEach((item) => {pokeAbilities.moveText.push(item);});

  /* pokeAbilities.pokeMove.push(moveMove) */
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
