function cardContent(i) {
  return /* html */ `
<div class="poke-card " onclick="loadMovesValuesJson(${i}); ">
           <div class="name">
               <div>#${currentAbilities[i].id}</div>
               <div>${currentAbilities[i].name.charAt(0).toUpperCase() + currentAbilities[i].name.slice(1)}</div>
           </div>
           <div class="poke-pic bg_${currentAbilities[i].types[0].type.name}">
           <img src="${currentAbilities[i].sprites.other.dream_world.front_default}" alt=""> 
           </div>
           <div class="poke-type" id="type${i}"></div>
       </div>
`;
}

function detailCardContent(i) {
  return /* html */ ` 
  <button id="switchLeft" class="switch" onclick="showBefore(${i}); event.stopPropagation()"><img src="./assets/img/arrow-left.svg" alt=""></button>
  <div class="poke-detail" onclick="event.stopPropagation()" >
    <div class="detail-header"> 
     <div class="name-detail">
      <div># ${currentAbilities[i].id}</div>
      <div>${currentAbilities[i].name.charAt(0).toUpperCase() + currentAbilities[i].name.slice(1)}</div>
     </div>
     <button onclick="closeDetailedCard()">X</button>
    </div>
    <div class="poke-pic-detail bg_${currentAbilities[i].types[0].type.name}">
    <img src="${currentAbilities[i].sprites.other.dream_world.front_default}" alt=""> 
    </div>
    <div class="card-menu bg_${currentAbilities[i].types[0].type.name}"> 
        <button id="btnStats" onclick="showAbilities('0',${i})" >Stats</button>
        <button id="btnAttacks" onclick="showAbilities('1',${i})">Attacks</button>
        <button id="btnEvolution" onclick="showAbilities('2',${i})">Evolution</button>
    </div>
    <div id="abilities" class="bg_${currentAbilities[i].types[0].type.name}">
    </div>
  </div>
  <button id="switchRight" class="switch" onclick="showNext(${i}); event.stopPropagation()"><img src="./assets/img/arrow-right.svg" alt=""></button>`;
  }