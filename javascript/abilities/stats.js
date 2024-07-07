function showStats(i) {
  document.getElementById("abilities").innerHTML = statsContent();
  loadStats(i);
}

function statsContent() {
  return /* html */ `<table id="stats"></table>`;
}

function loadStats(i) {
  let pokeStats = currentAbilities[i];
  let stats = document.getElementById("stats");
  for (j = 0; j < pokeStats.stats.length; j++) {
    let pokeStatName = pokeStats.stats[j].stat.name;
    let pokeStatValue = pokeStats.stats[j].base_stat;
    stats.innerHTML += loadStatsHtml(j, pokeStatName, pokeStatValue);
  }
}

