function cardContent(i) {
  return /* html */ `
<div class="poke-card " onclick="showDetailedCard()">
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

function detailCardContent() {
  return /* html */ ` 
  <div class="poke-detail">
   <div class="name">
    <div># 1</div>
    <div>Bisasam</div>
   </div>
    <div class="poke-pic bg_${overviewCards[i].type[0]}">
    <img src="" alt="Pokemon" />
    </div>
   <div class="poke-type"></div>
  </div>`;
}

function showDetailedCard() {
  document.getElementById(`detailContent`).classList.remove("d-none");
  document.getElementById(`detailContent`).classList.add("d-flex");
  document.body.classList.add("ofy-h");
  
}
function closeDetailedCard() {
  document.getElementById(`detailContent`).classList.add("d-none");
  document.getElementById(`detailContent`).classList.remove("d-flex");
  document.body.classList.remove("ofy-h");
}
