function cardContent(i) {
  return /* html */ `
<div class="poke-card">
           <div class="name">
               <div>#${overviewCards[i].id}</div>
               <div>${overviewCards[i].pokename}</div>
           </div>
           <div class="poke-pic">
               ${overviewCards[i].image}
           </div>
           <div class="poke-type" id="type${i}"></div>
       </div>
`;
}

function cardContentType(i,j){
    return /* html */ `
    <div>${overviewCards[i].type[j]}</div>
    `
}