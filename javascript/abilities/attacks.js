function showAttacks(i) {
    document.getElementById("abilities").innerHTML = attacksContent();
    loadAttacks(i);
  }

  function attacksContent() {
    return /* html */ ` 
  <table id="attacks"></table>`;
  }

  function loadAttacks(i){
    let pokeMove = overviewCards[i]
    console.log(pokeMove);
    let attacks = document.getElementById('attacks')
    for (j = 0; j< pokeMove.moveName.length; j++){
     let pokeAttackName = pokeMove.moveName[j];
     /* let pokeStatValue = pokeStats.statsValues[j]; */
     attacks.innerHTML += loadAttacksHtml(j, pokeAttackName);
    }  
  }

  function loadAttacksHtml(j, pokeAttackName){
    return /* html */ `
    <tr class="stat-content">
      <td> <span>${pokeAttackName}</span> </td>
    </tr>`;
  }
