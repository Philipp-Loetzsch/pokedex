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

function loadStatsHtml(j, pokeStatName, pokeStatValue) {
  return /* html */ `
    <tr class="stat-content bg_${pokeStatName}">
      <td class="stat-name"> <span>${pokeStatName}</span> </td>
      <td class="stat-value"><label for="statBar${j}">${pokeStatValue}</label></td> 
      <td class="progress-bar"> <progress id="statBar${j}" max="200" value="${pokeStatValue}"></progress> 200</td>
    </tr>`;
}
