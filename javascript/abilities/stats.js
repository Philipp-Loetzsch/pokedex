function showStats(i) {
    document.getElementById("abilities").innerHTML = statsContent();
    loadStats(i);
  }

  function statsContent() {
    return /* html */` 
    <table class="stats" id="stats">
    </table>`;
  }

  function loadStats(i){
    let pokeStats = overviewCards[i]
    let stats = document.getElementById('stats')
    for (j=0; j< pokeStats.statsName.length; j++){
     let pokeStatName = pokeStats.statsName[j];
     let pokeStatValue = pokeStats.statsValues[j];
     stats.innerHTML += loadStatsHtml(j, pokeStatName, pokeStatValue);
    }
  }

  function loadStatsHtml(j, pokeStatName, pokeStatValue){
    return /* html */ `
    <tr class="stat-content">
      <td> <span>${pokeStatName}</span> </td>
      <td><label for="statBar${j}">${pokeStatValue}</label></td> 
      <td> <progress id="statBar${j}" max="150" value="${pokeStatValue}"></progress> 150</td>
    </tr>`;
  }

  function showStats(i) {
    document.getElementById("abilities").innerHTML = statsContent();
    loadStats(i);
  }