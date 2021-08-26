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





Catalog.allCatalogs = [];

function Catalog (name, image) {

  this.name = name;
  this.image = image;
  this.timesShown = 0;
  this.votes = 0;

  

}

  
function renderResults(){

  const ulElem = document.getElementById('item-clicks');
  ulElem.innerHTML = '';
  for (let catalog of Catalog.allCatalogs){
    const liElem = document.createElement('li');
    liElem.textContent = `${catalog.name}: ${catalog.votes} out of ${catalog.timesShown} times shown.`;
    ulElem.appendChild(liElem);
    
    
  }
}


function storeCatalogs() {

  const stringifiedCatalogs = JSON.stringify(Catalog.allCatalogs);
  // console.log(stringifiedCatalogs);

  localStorage.setItem('catalogs', stringifiedCatalogs);
}


function getCatalogsFromStorage() {

  const stringifiedCatalogs = localStorage.getItem('catalogs');
  if (stringifiedCatalogs) {
    const parsedCatalogs = JSON.parse(stringifiedCatalogs);
    // console.log(parsedCatalogs);
    for (let catalog of parsedCatalogs) {
      const currentCatalogName = catalog.name;
      for (let origCatalog of Catalog.allCatalogs) {
        const originalName = origCatalog.name;
        if(currentCatalogName === originalName) {
          // origCatalog.votes = parseInt(origCatalog.votes);
          // origCatalog.timesShown = parseInt(origCatalog.timesShown);
          origCatalog.votes = catalog.votes;
          origCatalog.timesShown = catalog.timesShown;
          // Catalog.allCatalogs.push(origCatalog);
        }
     
      // renderResults();
      }
    } 
  }
}
//   else {
//     alert('Welcome first time user. We have no recorded storage of your activity here.');
//     new Catalog ('bag', './img/bag.jpg');
//     new Catalog ('banana', './img/banana.jpg');
//     new Catalog ('bathroom', './img/bathroom.jpg');
//     new Catalog ('boots', './img/boots.jpg');
//     new Catalog ('breakfast', './img/breakfast.jpg');
//     new Catalog ('bubblegum', './img/bubblegum.jpg');
//     new Catalog ('chair', './img/chair.jpg');
//     new Catalog ('cthulhu', './img/cthulhu.jpg');
//     new Catalog ('dog-duck', './img/dog-duck.jpg');
//     new Catalog ('dragon', './img/dragon.jpg');
//     new Catalog ('pen', './img/pen.jpg');
//     new Catalog ('pet-sweep', './img/pet-sweep.jpg');
//     new Catalog ('scissors', './img/scissors.jpg');
//     new Catalog ('tauntaun', './img/tauntaun.jpg');
//     new Catalog ('unicorn', './img/unicorn.jpg');
//     new Catalog ('water-can', './img/water-can.jpg');
//     new Catalog ('wine-glass', './img/wine-glass.jpg');
//   }
// }

getCatalogsFromStorage();
// randomItems();



// Catalog.allCatalogs.push(new Catalog ('bag', './img/bag.jpg'));
// Catalog.allCatalogs.push(new Catalog ('banana', './img/banana.jpg'));
// Catalog.allCatalogs.push(new Catalog ('bathroom', './img/bathroom.jpg'));
// Catalog.allCatalogs.push(new Catalog ('boots', './img/boots.jpg'));
// Catalog.allCatalogs.push(new Catalog ('breakfast', './img/breakfast.jpg'));
// Catalog.allCatalogs.push(new Catalog ('bubblegum', './img/bubblegum.jpg'));
// Catalog.allCatalogs.push(new Catalog ('chair', './img/chair.jpg'));
// Catalog.allCatalogs.push(new Catalog ('cthulhu', './img/cthulhu.jpg'));
// Catalog.allCatalogs.push(new Catalog ('dog-duck', './img/dog-duck.jpg'));
// Catalog.allCatalogs.push(new Catalog ('dragon', './img/dragon.jpg'));
// Catalog.allCatalogs.push(new Catalog ('pen', './img/pen.jpg'));
// Catalog.allCatalogs.push(new Catalog ('pet-sweep', './img/pet-sweep.jpg'));
// Catalog.allCatalogs.push(new Catalog ('scissors', './img/scissors.jpg'));
// Catalog.allCatalogs.push(new Catalog ('tauntaun', './img/tauntaun.jpg'));
// Catalog.allCatalogs.push(new Catalog ('unicorn', './img/unicorn.jpg'));
// Catalog.allCatalogs.push(new Catalog ('water-can', './img/water-can.jpg'));
// Catalog.allCatalogs.push(new Catalog ('wine-glass', './img/wine-glass.jpg'));

// console.log(Catalog.allCatalogs);


// Catalog.allCatalogs = [];

Catalog.prototype.renderSingleItem = function(image, p) {

  image.src = this.image;

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
  unavailableItems.push(leftCatalog);
  while (unavailableItems.includes(centerCatalog)) {
    let centerIndex = Math.floor(Math.random() * Catalog.allCatalogs.length);
    // let centerCatalog;
  
    centerCatalog = Catalog.allCatalogs[centerIndex];
  }
  unavailableItems.push(centerCatalog);
  while (unavailableItems.includes(rightCatalog)) {
    let rightIndex = Math.floor(Math.random() * Catalog.allCatalogs.length);
    // let rightCatalog;
  
    rightCatalog = Catalog.allCatalogs[rightIndex];
  }
  // unavailableItems.push(rightCatalog);
  renderThreeItems();

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

  

function renderThreeItems() {
  leftCatalog.renderSingleItem(leftImgElem, leftPElem);
  centerCatalog.renderSingleItem(centerImgElem, centerPElem);
  rightCatalog.renderSingleItem(rightImgElem, rightPElem);


}


function clickHandler(event) {

  // event.preventDefault();

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
      alert('out of votes!');

      storeCatalogs();
    } 
    else {
    randomItems();
    
    }
  
  }
  renderResults();
  renderChart();

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







// function renderResults(){

//   const ulElem = document.getElementById('item-clicks');
//   ulElem.innerHTML = '';
//   for (let catalog of Catalog.allCatalogs){
//     const liElem = document.createElement('li');
//     liElem.textContent = `${catalog.name}: ${catalog.votes} out of ${catalog.timesShown} times shown.`;
//     ulElem.appendChild(liElem);
    
    
//   }
// }




allCatalogsSectionElem.addEventListener('click', clickHandler);



// randomItems();








// var ctx = document.getElementById('myChart').getContext('2d');

function renderChart(){

var ctx = document.getElementById('myChart').getContext('2d');

const dataPrime = [];

const labelsPrime = [];

const dataTwo = [];

for(let catalog of Catalog.allCatalogs) {
  dataPrime.push(catalog.votes);
  labelsPrime.push(catalog.name);
  dataTwo.push(catalog.timesShown);
}


var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelsPrime,
        datasets: [{
            label: 'Catalog Item Votes',
            data: dataPrime,
            backgroundColor: [
                'purple'
            ],
            borderColor: [
                'white'
            ],
            borderWidth: 3
        } , {
          label: 'Catalog Item Times Shown',
            data: dataTwo,
            backgroundColor: [
                'orange'
            ],
            borderColor: [
                'white'
            ],
            borderWidth: 3



          }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });}



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

randomItems();
// renderThreeItems();
getCatalogsFromStorage();
   


// const data = {
//   labels: [
//     'Red',
//     'Green',
//     'Yellow',
//     'Grey',
//     'Blue'
//   ],
//   datasets: [{
//     label: 'My First Dataset',
//     data: [11, 16, 7, 3, 14],
//     backgroundColor: [
//       'rgb(255, 99, 132)',
//       'rgb(75, 192, 192)',
//       'rgb(255, 205, 86)',
//       'rgb(201, 203, 207)',
//       'rgb(54, 162, 235)'
//     ]
//   }]
// };

// const config = {
//   type: 'polarArea',
//   data: data,
//   options: {}
// };
