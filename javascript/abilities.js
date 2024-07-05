let showAbilitienNumber = 0;

function showAbilities(buttonId, i) {
  document.getElementById("abilities").innerHTML = "";
  showAbilitienNumber = buttonId;
  if (showAbilitienNumber == 0) {
    document.getElementById('btnStats').classList.add('active');
    document.getElementById('btnEvolution').classList.remove('active');
    document.getElementById('btnAttacks').classList.remove('active');
    showStats(i);
  } else if (showAbilitienNumber == 1) {
    document.getElementById('btnStats').classList.remove('active');
    document.getElementById('btnEvolution').classList.remove('active');
    document.getElementById('btnAttacks').classList.add('active');
    fetchMoveAbilities();
 
  } else {
    document.getElementById('btnStats').classList.remove('active');
    document.getElementById('btnAttacks').classList.remove('active');
    document.getElementById('btnEvolution').classList.add('active');
    fetchEvolutionChain(i)
  }
}
