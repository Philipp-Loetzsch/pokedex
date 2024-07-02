let showAbilitienNumber = 0;

function showAbilities(buttonId, i) {
  document.getElementById("abilities").innerHTML = "";
  showAbilitienNumber = buttonId;
  if (showAbilitienNumber == 0) {
    showStats(i);
  } else if (showAbilitienNumber == 1) {
    showAttacks(i);
  } else {
    console.log("Entwicklungen");
  }
}
