function cardContent(i) {
  return /* html */ `
<div class="poke-card " onclick="showDetailedCard(${i})">
           <div class="name">
               <div>#${pokemonAbilities[i].id}</div>
               <div>${pokemonAbilities[i].name}</div>
           </div>
           <div class="poke-pic bg_${pokemonAbilities[i].types[0].type.name}">
           <img src="${pokemonAbilities[i].sprites.other.dream_world.front_default}" alt=""> 
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
      <div># ${pokemonAbilities[i].id}</div>
      <div>${pokemonAbilities[i].name}</div>
     </div>
     <button onclick="closeDetailedCard()">X</button>
    </div>
    <div class="poke-pic-detail bg_${pokemonAbilities[i].types[0].type.name}">
    <img src="${pokemonAbilities[i].sprites.other.dream_world.front_default}" alt=""> 
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

