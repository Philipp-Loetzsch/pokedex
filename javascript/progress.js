let progressBar;
let progress;

function initProgressBar(i){
    progress = (pokemonAbilities.length  / i)  * 100;
    progressBar = document.getElementById('progress');
    progressBar.style.width = progress + '%';
    progressBar.innerText = Math.round(progress) + '%';
}

function initProgressBarEvolution(){
    progress = (pokemonEvolutionImg.length  / speciesArray.length)  * 100;
    progressBar = document.getElementById('progress');
    progressBar.style.width = progress + '%';
    progressBar.innerText = Math.round(progress) + '%';
}