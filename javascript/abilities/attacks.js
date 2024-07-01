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
     let pokeAttackPower = pokeMove.power[j]; 
     let pokeAttackPp = pokeMove.pp[j]
     let pokeAttackDescription = pokeMove.description[j].flavor_text
     attacks.innerHTML += loadAttacksHtml(pokeAttackName, pokeAttackPower,pokeAttackPp,pokeAttackDescription );
    }  
  }

  function loadAttacksHtml(pokeAttackName, pokeAttackPower,pokeAttackPp,pokeAttackDescription ){
    return /* html */ `
    <tr class="stat-content">
      <td> <span>${pokeAttackName}</span> </td>
      <td> <span>Power: ${pokeAttackPower}</span> </td>
      <td> <span>PP: ${pokeAttackPp}</span> </td>
      <td> <span>${pokeAttackDescription}</span> </td>
    </tr>`;
  }
