'use strict';

console.log('greetings my friends');

const leftImgElem = document.getElementById('left_side_img');
const leftPElem = document.getElementById('left_side_p');

const centerImgElem = document.getElementById('center_side_img');
const centerPElem = document.getElementById('center_side_p');

const rightImgElem = document.getElementById('right_side_img');
const rightPElem = document.getElementById('right_side_p');

const allItemsSectionElem = document.getElementById('all_mall');

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

Catalog.allItems = [];

Catalog.allItems.push(new Catalog ('bag', './img/bag.jpg'));
Catalog.allItems.push(new Catalog ('banana', './img/banana.jpg'));
Catalog.allItems.push(new Catalog ('bathroom', './img/bathroom.jpg'));
Catalog.allItems.push(new Catalog ('boots', './img/boots.jpg'));
Catalog.allItems.push(new Catalog ('breakfast', './img/breakfast.jpg'));
Catalog.allItems.push(new Catalog ('bubblegum', './img/bubblegum.jpg'));
Catalog.allItems.push(new Catalog ('chair', './img/chair.jpg'));
Catalog.allItems.push(new Catalog ('cthulhu', './img/cthulhu.jpg'));
Catalog.allItems.push(new Catalog ('dog-duck', './img/dog-duck.jpg'));
Catalog.allItems.push(new Catalog ('dragon', './img/dragon.jpg'));
Catalog.allItems.push(new Catalog ('pen', './img/pen.jpg'));
Catalog.allItems.push(new Catalog ('pet-sweep', './img/pet-sweep.jpg'));
Catalog.allItems.push(new Catalog ('scissors', './img/scissors.jpg'));
Catalog.allItems.push(new Catalog ('tauntaun', './img/tauntaun.jpg'));
Catalog.allItems.push(new Catalog ('unicorn', './img/unicorn.jpg'));
Catalog.allItems.push(new Catalog ('water-can', './img/water-can.jpg'));
Catalog.allItems.push(new Catalog ('wine-glass', './img/wine-glass.jpg'));

console.log(Catalog.allItems);


// Catalog.allItems = [];

Catalog.prototype.renderSingleItem = function(imageElem, p) {

  imageElem.src = this.image;

  p.textContent = this.name;
  this.timesShown++;
}




function randomItems(){
  const unavailableItems = [leftCatalog, centerCatalog, rightCatalog];
  while (unavailableItems.includes(leftCatalog)) {
    let leftIndex = Math.floor(Math.random() * Catalog.allItems.length);
    // let leftCatalog;
  
    leftCatalog = Catalog.allItems[leftIndex];
  }
  while (unavailableItems.includes(centerCatalog)) {
    let centerIndex = Math.floor(Math.random() * Catalog.allItems.length);
    // let centerCatalog;
  
    centerCatalog = Catalog.allItems[centerIndex];
  }
  while (unavailableItems.includes(rightCatalog)) {
    let rightIndex = Math.floor(Math.random() * Catalog.allItems.length);
    // let rightCatalog;
  
    rightCatalog = Catalog.allItems[rightIndex];
  }
  renderThreeItems(leftCatalog, centerCatalog, rightCatalog);

}


  // let leftIndex;
  // const leftIndex = Math.floor(Math.random() * Catalog.allItems.length);
  // let leftCatalog;

  // leftCatalog = Catalog.allItems[leftIndex];
  // let centerCatalog;
  // let rightCatalog;
  // while (centerCatalog === undefined || centerCatalog === leftCatalog) {
  //   const centerIndex = Math.floor(Math.random() * Catalog.allItems.length);
  //   centerCatalog = Catalog.allItems[centerIndex];

  // }
  // while(!rightCatalog || rightCatalog === centerCatalog){
  
  //   const rightIndex = Math.floor(Math.random() * Catalog.allItems.length);
  //   rightCatalog = Catalog.allItems[rightIndex];

  // }
  
  // let rightIndex;
  // while (rightIndex === undefined || rightIndex === centerIndex || rightIndex === leftIndex) {
  //   rightIndex = Math.floor(Math.random() * Catalog.allItems.length);
  //   rightCatalog = Catalog.allItems[rightIndex];

  // }

  

function renderThreeItems(leftCatalog, centerCatalog, rightCatalog) {
  leftCatalog.renderSingleItem(leftImgElem, leftPElem);
  centerCatalog.renderSingleItem(centerImgElem, centerPElem);
  rightCatalog.renderSingleItem(rightImgElem, rightPElem);


}



function clickHandler(event) {

  console.log(event.target);

  // if (event.target === leftImgElem || event.target === centerImgElem || event.target === rightImgElem) {

  //   rounds--;

  //   if (event.target === leftImgElem){
  //     leftItem.votes++;
  //   }
  //   if (event.target === centerImgElem) {
  //     centerItem.votes++;
  //   }
  //   else { rightItem.votes++;}

  //   if (rounds === 0) {
  //     allItemsSectionElem.removeEventListener('click', clickHandler);
  //     renderResults();
  //   }
  //   randomItems();

  // }

  const validTargets =  [rightImgElem, centerImgElem, leftImgElem];
if (validTargets.includes(event.target)) {
  rounds--;
  if (event.target === validTargets[0]) {
    validTargets[0].votes++;
  } else if (event.target === validTargets[1]){
    validTargets[1].votes++;
  } else {
    validTargets[2].votes++;
  } if (!rounds) {
    allItemsSectionElem.removeEventListener('click', clickHandler);
    alert('out of votes!');
    renderResults();
    renderChart();
  } else {
   randomItems();
  }
}


}



function renderResults(){

  const ulElem = document.getElementById('item-clicks');
  ulElem.innerHTML = '';
  for (let Catalog of Catalog.allItems){
    const liElem = document.createElement('li');
    liElem.textContent = `${catalog.name}: ${catalog.votes}`;
    ulElem.appendChild(liElem);
  }
}




allItemsSectionElem.addEventListener('click', clickHandler);



randomItems();