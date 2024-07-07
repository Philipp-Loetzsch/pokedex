let progressBar;
let progress;

function initProgressBar(array, i) {
    progress = (array.length / i) * 100;
    progressBar = document.getElementById("progress");
    progressBar.style.width = progress + "%";
}

function render() {
  let content = document.getElementById(`content`);
  content.innerHTML = "";
  for (i = 0; i < currentAbilities.length; i++) {
    content.innerHTML += cardContent(i);
    showType(i);
  }
  document.getElementById("loadingScreen").classList.add("d-none");
}

function showType(i) {
  let poketype = document.getElementById(`type${i}`);
  poketype.innerHTML = "";
  for (j = 0; j < currentAbilities[i].types.length; j++) {
    poketype.innerHTML += `<div class="type bg_${currentAbilities[i].types[j].type.name}">${currentAbilities[i].types[j].type.name}</div>`;
  }
}