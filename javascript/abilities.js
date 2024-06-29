function showAbilities(buttonId, i) {
    showAbilitienNumber = buttonId;
    if (showAbilitienNumber == 0) {
      showStats(i);
    } else if (showAbilitienNumber == 1) {
      showAttacks(i);
    } else {
      console.log("Entwicklungen");
    }
  }
  
  