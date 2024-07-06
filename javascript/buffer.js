let pokemonBuffer = [];
let bufferDone;
async function bufferNextPokemon() {
  bufferDone = false;
  document.getElementById("showMore").disabled = true;
  document.getElementById("imgAmountSearch").src = "./assets/img/sanduhr.gif";
  let buffer = await fetch(nextUrl);
  let bufferAsJson = await buffer.json();
  nextUrl = bufferAsJson.next;
  for (i = 0; i < bufferAsJson.results.length; i++) {
    try {
      let bufferAbilities = await fetch(bufferAsJson.results[i].url);
      let bufferAbilitiesAsJson = await bufferAbilities.json();
      pokemonBuffer.push(bufferAbilitiesAsJson);
    } catch (error) {
      errorCount = errorCount + 1;
      if (errorCount < 5) {
        pokemonBuffer=[];
        bufferNextPokemon();
      } else {
        location.reload();
      }
    }
  }
  errorCount = 0;
  bufferDone = true;
  document.getElementById("imgAmountSearch").src = "./assets/img/lupe.svg";
  document.getElementById("showMore").disabled = false;
}
