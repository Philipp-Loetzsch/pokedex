function loadMovesValuesJson(i) {
    pokemonMoves = pokemonAbilities[i].moves;
    showDetailedCard(i);
  }

function showDetailedCard(i) {
    document.getElementById("detailContent").innerHTML = detailCardContent(i);
    showAbilities("0", i); 
    document.getElementById(`detailContent`).classList.remove("d-none");
    document.getElementById(`detailContent`).classList.add("d-flex");
    document.body.classList.add("ofy-h");
  }
  function closeDetailedCard() {
    document.getElementById(`detailContent`).classList.add("d-none");
    document.getElementById(`detailContent`).classList.remove("d-flex");
    document.body.classList.remove("ofy-h");
  }