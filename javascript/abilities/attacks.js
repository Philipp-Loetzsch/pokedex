function showAttacks() {
    document.getElementById("abilities").innerHTML = attacksContent();
    loadAttacks();
  }

  function attacksContent() {
    return /* html */ ` 
  <table id="attacks"></table>`;
  }

  function loadAttacks(){
    let attacks = document.getElementById('attacks')
    for (j = 0; j< pokemonMoves.length; j++){
     let pokeAttackName = pokemonMoves[j].move.name;
     let pokeAttackPower = moveAbilities[j].power; 
     if (moveAbilities[j].power == null){
      pokeAttackPower = 0;
     }
     let pokeAttackPp = moveAbilities[j].pp;
     let pokeAttackDescription = moveAbilities[j].flavor_text_entries[4].flavor_text;
     attacks.innerHTML += loadAttacksHtml(pokeAttackName, pokeAttackPower, pokeAttackPp, pokeAttackDescription );
     if (j === 3){
      break
     }
    }  
  }

  function loadAttacksHtml(pokeAttackName, pokeAttackPower, pokeAttackPp, pokeAttackDescription){
    return /* html */ `
    <tr class="stat-content">
      <th> <h2>${pokeAttackName}</h2> 
      <span>power: ${pokeAttackPower}</span> 
      <span>pp: ${pokeAttackPp}</span> </th>
      <td> <span class="description">${pokeAttackDescription}</span> </td> 
    </tr>`;
  }
