function showAttacks(i) {
    document.getElementById("abilities").innerHTML = attacksContent();
    let pokeAttackName = document.getElementById(`attacksName`);
    /* let pokeAttackValue = document.getElementById(`attackValue${i}`); */
    overviewCards[i].moveName.forEach((item) => {pokeAttackName.innerHTML += /* html */ `<div>${item} </div>`;});
    /* overviewCards[i].statsValues.forEach((item) => {pokeStatValue.innerHTML += `<div>${item} </div>`;}); */
  }

  function attacksContent() {
    return /* html */ ` 
  <div class="attacks">
    <div class="poke-attack-name" id="attacksName"></div>
   <!--  <div class="poke-stats-value " id="statsValue"></div> -->
  </div>`;
  }