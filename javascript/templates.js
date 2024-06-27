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
function showDetailedCard() {
  document.getElementById(`detailContent`).classList.remove("d-none");
  document.body.classList.add("ofy-h");
}
function closeDetailedCard() {
    document.getElementById(`detailContent`).classList.add("d-none");
    document.body.classList.remove("ofy-h");
  }
  