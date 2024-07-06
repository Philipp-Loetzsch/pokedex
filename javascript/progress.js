let progressBar;
let progress;

function initProgressBar(array, i){
    progress = (array.length  / i)  * 100;
    progressBar = document.getElementById('progress');
    progressBar.style.width = progress + '%';
  
}