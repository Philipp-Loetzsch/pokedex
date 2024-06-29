function showStats(i) {
    document.getElementById("abilities").innerHTML = statsContent();
    let pokeStatName = document.getElementById(`statsName`);
    let pokeStatValue = document.getElementById(`statsValue`);
    overviewCards[i].statsName.forEach((item) => {pokeStatName.innerHTML += /* html */ `<div>${item} </div>`;});
    overviewCards[i].statsValues.forEach((item, id) => {pokeStatValue.innerHTML += /* html */ `<div id="value${id}" class="stat-bar">${item} </div>`;});
  }

  function statsContent() {
    return /* html */ ` 
  <div class="stats">
    <div class="poke-stats-name" id="statsName"></div>
    <div class="poke-stats-value " id="statsValue"></div>
  </div>`;
  }