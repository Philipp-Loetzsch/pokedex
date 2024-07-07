let showAbilitienNumber = 0;

function showAbilities(buttonId, i) {
  let buttonName = ["btnStats", "btnEvolution", "btnAttacks"];
  document.getElementById("abilities").innerHTML = "";
  showAbilitienNumber = buttonId;
  if (showAbilitienNumber == 0) {
    buttonName.forEach((btn) => {document.getElementById(btn).classList.remove("active");
    });
    document.getElementById("btnStats").classList.add("active");
    showStats(i);
  } else if (showAbilitienNumber == 1) {buttonName.forEach((btn) => {document.getElementById(btn).classList.remove("active");
    });
    document.getElementById("btnAttacks").classList.add("active");
    fetchMoveAbilities();
  } else {
    buttonName.forEach((btn) => {document.getElementById(btn).classList.remove("active");
    });
    document.getElementById("btnEvolution").classList.add("active");
    fetchEvolutionChain(i);
  }
}
