function showStats(i) {
    document.getElementById("abilities").innerHTML = statsContent();
    loadStats(i);
  }

  function statsContent() {
    return /* html */` 
    <table id="stats"></table>`;
  }

  function loadStats(i){
    let pokeStats = pokemonAbilities[i]
    let stats = document.getElementById('stats')
    for (j = 0; j < pokeStats.stats.length; j++){
     let pokeStatName = pokeStats.stats[j].stat.name;
     let pokeStatValue = pokeStats.stats[j].base_stat;
     stats.innerHTML += loadStatsHtml(j, pokeStatName, pokeStatValue);
    }
  }

  function loadStatsHtml(j, pokeStatName, pokeStatValue){
    return /* html */ `
    <tr class="stat-content">
      <td> <span>${pokeStatName}</span> </td>
      <td><label for="statBar${j}">${pokeStatValue}</label></td> 
      <td> <progress id="statBar${j}" max="200" value="${pokeStatValue}"></progress> 200</td>
    </tr>`;
  }