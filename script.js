'use strict';

console.log('greetings my friends');

const leftImgElem = document.getElementById('left_side_img');
const leftPElem = document.getElementById('left_side_p');

const centerImgElem = document.getElementById('center_side_img');
const centerPElem = document.getElementById('center_side_p');

const rightImgElem = document.getElementById('right_side_img');
const rightPElem = document.getElementById('right_side_p');

const allCatalogsSectionElem = document.getElementById('all_mall');

let leftCatalog = null;
let rightCatalog = null;
let centerCatalog = null;

let rounds = 25;






function Catalog (name, image) {

  this.name = name;
  this.image = image;
  this.timesShown = 0;
  this.votes = 0;

  // Catalog.allItems.push(this);

}

Catalog.allCatalogs = [];

Catalog.allCatalogs.push(new Catalog ('bag', './img/bag.jpg'));
Catalog.allCatalogs.push(new Catalog ('banana', './img/banana.jpg'));
Catalog.allCatalogs.push(new Catalog ('bathroom', './img/bathroom.jpg'));
Catalog.allCatalogs.push(new Catalog ('boots', './img/boots.jpg'));
Catalog.allCatalogs.push(new Catalog ('breakfast', './img/breakfast.jpg'));
Catalog.allCatalogs.push(new Catalog ('bubblegum', './img/bubblegum.jpg'));
Catalog.allCatalogs.push(new Catalog ('chair', './img/chair.jpg'));
Catalog.allCatalogs.push(new Catalog ('cthulhu', './img/cthulhu.jpg'));
Catalog.allCatalogs.push(new Catalog ('dog-duck', './img/dog-duck.jpg'));
Catalog.allCatalogs.push(new Catalog ('dragon', './img/dragon.jpg'));
Catalog.allCatalogs.push(new Catalog ('pen', './img/pen.jpg'));
Catalog.allCatalogs.push(new Catalog ('pet-sweep', './img/pet-sweep.jpg'));
Catalog.allCatalogs.push(new Catalog ('scissors', './img/scissors.jpg'));
Catalog.allCatalogs.push(new Catalog ('tauntaun', './img/tauntaun.jpg'));
Catalog.allCatalogs.push(new Catalog ('unicorn', './img/unicorn.jpg'));
Catalog.allCatalogs.push(new Catalog ('water-can', './img/water-can.jpg'));
Catalog.allCatalogs.push(new Catalog ('wine-glass', './img/wine-glass.jpg'));

console.log(Catalog.allCatalogs);


// Catalog.allCatalogs = [];

Catalog.prototype.renderSingleItem = function(imageElem, p) {

  imageElem.src = this.image;

  p.textContent = this.name;
  this.timesShown++;
}




function randomItems(){
  const unavailableItems = [leftCatalog, centerCatalog, rightCatalog];
  while (unavailableItems.includes(leftCatalog)) {
    let leftIndex = Math.floor(Math.random() * Catalog.allCatalogs.length);
    // let leftCatalog;
  
    leftCatalog = Catalog.allCatalogs[leftIndex];
  }
  while (unavailableItems.includes(centerCatalog)) {
    let centerIndex = Math.floor(Math.random() * Catalog.allCatalogs.length);
    // let centerCatalog;
  
    centerCatalog = Catalog.allCatalogs[centerIndex];
  }
  while (unavailableItems.includes(rightCatalog)) {
    let rightIndex = Math.floor(Math.random() * Catalog.allCatalogs.length);
    // let rightCatalog;
  
    rightCatalog = Catalog.allCatalogs[rightIndex];
  }
  renderThreeItems(leftCatalog, centerCatalog, rightCatalog);

}


  // let leftIndex;
  // const leftIndex = Math.floor(Math.random() * Catalog.allCatalogs.length);
  // let leftCatalog;

  // leftCatalog = Catalog.allCatalogs[leftIndex];
  // let centerCatalog;
  // let rightCatalog;
  // while (centerCatalog === undefined || centerCatalog === leftCatalog) {
  //   const centerIndex = Math.floor(Math.random() * Catalog.allCatalogs.length);
  //   centerCatalog = Catalog.allCatalogs[centerIndex];

  // }
  // while(!rightCatalog || rightCatalog === centerCatalog){
  
  //   const rightIndex = Math.floor(Math.random() * Catalog.allCatalogs.length);
  //   rightCatalog = Catalog.allCatalogs[rightIndex];

  // }
  
  // let rightIndex;
  // while (rightIndex === undefined || rightIndex === centerIndex || rightIndex === leftIndex) {
  //   rightIndex = Math.floor(Math.random() * Catalog.allCatalogs.length);
  //   rightCatalog = Catalog.allCatalogs[rightIndex];

  // }

  

function renderThreeItems(leftCatalog, centerCatalog, rightCatalog) {
  leftCatalog.renderSingleItem(leftImgElem, leftPElem);
  centerCatalog.renderSingleItem(centerImgElem, centerPElem);
  rightCatalog.renderSingleItem(rightImgElem, rightPElem);


}



function clickHandler(event) {

  console.log(event.target);

  if (event.target === leftImgElem || event.target === centerImgElem || event.target === rightImgElem) {

    rounds--;

    if (event.target === leftImgElem){
      leftCatalog.votes++;
    }
    else if (event.target === centerImgElem) {
      centerCatalog.votes++;
    }
    else { 
      rightCatalog.votes++;
    }

    if (!rounds) {
      allCatalogsSectionElem.removeEventListener('click', clickHandler);
      renderResults();
      alert('out of votes!');
    }
    randomItems();

  }

//   const validTargets =  [rightImgElem, centerImgElem, leftImgElem];
// if (validTargets.includes(event.target)) {
//   rounds--;
//   if (event.target === validTargets[0]) {
//     validTargets[0].votes++;
//   } else if (event.target === validTargets[1]){
//     validTargets[1].votes++;
//   } else {
//     validTargets[2].votes++;
//   } if (!rounds) {
//     allCatalogsSectionElem.removeEventListener('click', clickHandler);
//     alert('out of votes!');
//     renderResults();
//     renderChart();
//   } else {
//    randomItems();
//   }
// }


}



function renderResults(){

  const ulElem = document.getElementById('item-clicks');
  ulElem.innerHTML = '';
  for (let catalog of Catalog.allCatalogs){
    const liElem = document.createElement('li');
    liElem.textContent = `${catalog.name}: ${catalog.votes}`;
    ulElem.appendChild(liElem);
  }
}




allCatalogsSectionElem.addEventListener('click', clickHandler);



randomItems();