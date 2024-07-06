let pokemonBuffer = [];
let bufferDone;

async function bufferNextPokemon() {
  let bufferAbilities;
  bufferDone = false;
  document.getElementById("showMore").disabled = true;
  document.getElementById("imgAmountSearch").src = "./assets/img/sanduhr.gif";
  document.getElementById("amountBtn").disabled = true;
  document.getElementById("showMore").innerHTML = /* html */` <img class="w-100" src="./assets/img/sanduhr.gif" alt="" />`
  let buffer = await fetch(nextUrl);
  let bufferAsJson = await buffer.json();
  nextUrl = bufferAsJson.next;
  for (i = 0; i < bufferAsJson.results.length; i++) {
    try {
      bufferAbilities = await fetch(bufferAsJson.results[i].url);
    } catch (error) {
      errorCount = errorCount + 1;
      if (errorCount < 5) {
        bufferNextPokemon();
      } else {
        location.reload();
      }
    } 
   let bufferAbilitiesAsJson = await bufferAbilities.json();
   pokemonBuffer.push(bufferAbilitiesAsJson);
  }
  errorCount = 0;
  bufferDone = true;
  document.getElementById("showMore").innerHTML = "+"
  document.getElementById("imgAmountSearch").src = "./assets/img/lupe.svg";
  document.getElementById("showMore").disabled = false;
  document.getElementById("amountBtn").disabled = false;
}
