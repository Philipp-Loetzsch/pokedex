function cardContent(i) {
  return /* html */ `
<div class="poke-card " onclick="showDetailedCard(${i})">
           <div class="name">
               <div>#${overviewCards[i].id}</div>
               <div>${overviewCards[i].pokename}</div>
           </div>
           <div class="poke-pic bg_${overviewCards[i].type[0]}">
               ${overviewCards[i].image}
           </div>
           <div class="poke-type" id="type${i}"></div>
       </div>
`;
}

function detailCardContent(i) {
  return /* html */ ` 
  <div class="poke-detail" onclick="event.stopPropagation()" >
   <div class="name">
    <div># ${overviewCards[i].id}</div>
    <div>${overviewCards[i].pokename}</div>
   </div>
    <div class="poke-pic-detail bg_${overviewCards[i].type[0]}">
      ${overviewCards[i].image}
    </div>
    <div class="card-menu"> 
        <button>Stats</button>
        <button>Vorkommen</button>
        <button>Entwicklungsstufen</button>
    </div>
    <div class="stats">
   <div class="poke-stats-name" id="statsName${i}"></div>
   <div class="poke-stats-value " id="statsValue${i}"></div>
   </div>
  </div>`;
}

function showDetailedCard(i) {
  document.getElementById("detailContent").innerHTML =  detailCardContent(i);
 showStats(i)
  document.getElementById(`detailContent`).classList.remove("d-none");
  document.getElementById(`detailContent`).classList.add("d-flex");
  document.body.classList.add("ofy-h");
}
function closeDetailedCard() {
  document.getElementById(`detailContent`).classList.add("d-none");
  document.getElementById(`detailContent`).classList.remove("d-flex");
  document.body.classList.remove("ofy-h");
}

function showStats(i){
 let pokeStatName = document.getElementById(`statsName${i}`);
 let pokeStatValue = document.getElementById(`statsValue${i}`);
overviewCards[i].statsName.forEach(item => {pokeStatName.innerHTML += /* html */`<div>${item} </div>`;});
overviewCards[i].statsValues.forEach(item => {pokeStatValue.innerHTML += /* html */`<div>${item} </div>`;});
}