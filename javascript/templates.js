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
    <div class="detail-header"> 
     <div class="name-detail">
      <div># ${overviewCards[i].id}</div>
      <div>${overviewCards[i].pokename}</div>
     </div>
     <button onclick="closeDetailedCard()">X</button>
    </div>
    <div class="poke-pic-detail bg_${overviewCards[i].type[0]}">
      ${overviewCards[i].image}
    </div>
    <div class="card-menu"> 
        <button onclick="showAbilities('0',${i})" >Stats</button>
        <button onclick="showAbilities('1',${i})">Attacken</button>
        <button onclick="showAbilities('2',${i})">Entwicklungsstufen</button>
    </div>
    <div id="abilities">
    </div>
  </div>`;
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

