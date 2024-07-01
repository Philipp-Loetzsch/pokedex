async function fetchDataJson() {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1&offset=${count}`);
    let responseAsJson = await response.json();
    console.log(responseAsJson);
  
 /*    let evolution = await fetch("https://pokeapi.co/api/v2/evolution-chain/107/");
    let evolutionAsJson = await evolution.json();
    console.log(evolutionAsJson); */
  
   /*  let moves = await fetch("https://pokeapi.co/api/v2/move/13/")
    let movesAsJason = await moves.json();
    console.log(movesAsJason); */
    
    let pokemon = responseAsJson.results;
    fetchCardValuesJson(pokemon);
  }
  
  async function fetchCardValuesJson(pokemon) {
    for (i = 0; i < pokemon.length; i++) {
      let choosePokemon = await fetch(pokemon[i].url);
      let choosePokemonAsJson = await choosePokemon.json();
      
     /*  console.log(choosePokemonAsJson.moves); */
      let movesDetails = fetchMovesValuesJson(choosePokemonAsJson)
     console.log(movesDetails)
   /*   console.log(moveUrl) */
      /* edit JsonArray Pokemom of all needed Values */
      let newCard = contentDetailCard(choosePokemonAsJson, movesDetails);
  
      /* push JSON in global Array */
      overviewCards.push(newCard);
    }
    document.getElementById("loadingScreen").classList.add("d-none");
    init();
  }
  
  async function fetchMovesValuesJson(choosePokemonAsJson){
   
    for (let i = 0; i < choosePokemonAsJson.moves.length; i++) {

        let movesDetails = {
            name :[],
            power: [],
            pp:[],
            text:[]
        };

        let moves = await fetch(choosePokemonAsJson.moves[i].move.url);
        let movesAsJason = await moves.json();
        movesDetails.name.push(movesAsJason.name);
        movesDetails.power.push(movesAsJason.power);
        movesDetails.pp.push(movesAsJason.pp);
        movesDetails.text.push(movesAsJason.flavor_text_entries[4]);
     /*   console.log(movesAsJason) */
      
       
    }
    console.log(movesDetails) 
    return movesDetails;
  }