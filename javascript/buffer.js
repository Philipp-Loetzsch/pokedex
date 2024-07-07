let pokemonBuffer = [];
let bufferDone;
let btnDisable = ["showMore", "amountBtn"]

async function bufferNextPokemon() {
  bufferDone = false;
  btnDisable.forEach(element => {document.getElementById(element).disabled = true;});
  document.getElementById("imgAmountSearch").src = "./assets/img/sanduhr.gif";
  document.getElementById("showMore").innerHTML = /* html */` <img class="w-100" src="./assets/img/sanduhr.gif" alt="" />`
  let buffer = await fetch(nextUrl);
  let bufferAsJson = await buffer.json();
  nextUrl = bufferAsJson.next;
  bufferAbilities(bufferAsJson);
}

async function bufferAbilities(bufferAsJson){
  for (i = 0; i < bufferAsJson.results.length; i++) {
    try {
      let bufferAbilities = await fetch(bufferAsJson.results[i].url);
      let bufferAbilitiesAsJson = await bufferAbilities.json();
      pokemonBuffer.push(bufferAbilitiesAsJson);
    } catch (error) {
      errorCount = errorCount + 1;
      if (errorCount < 5) {
        bufferNextPokemon();
      } else {
        location.reload();
      }
    } 
  }
  errorCount = 0;
  bufferDone = true;
  btnDisable.forEach(element => {document.getElementById(element).disabled = false;});
  document.getElementById("showMore").innerHTML = "+"
  document.getElementById("imgAmountSearch").src = "./assets/img/lupe.svg";
}