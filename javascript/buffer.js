let pokemonBuffer = [];

async function bufferNextPokemon() {
    document.getElementById("showMore").disabled = true;
    let buffer = await fetch(nextUrl);
    let bufferAsJson = await buffer.json();
    nextUrl = bufferAsJson.next;
    for (i = 0; i < bufferAsJson.results.length; i++) {
      let bufferAbilities = await fetch(bufferAsJson.results[i].url);
      let bufferAbilitiesAsJson = await bufferAbilities.json();
      pokemonBuffer.push(bufferAbilitiesAsJson);
    }
    document.getElementById("showMore").disabled = false;
  }