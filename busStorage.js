'use strict';

console.log('form time');

// ------------ global variables ------------//

const formElem = document.querySelector('form');

// ------------ constructor functions ------------//

function Selection (name, type, time ) {
  this.name = name;
  this.type = type;
  this.time = time;

}

Selection.allCatalogs = [];

// ----------------- prototype method -----------------//

Selection.prototype.renderCatalog = function() {
  const ulSelectionElem = document.getElementById('selections');
  const liElem = document.createElement('li');
  liElem.textContent = `${this.name} ordered a ${this.type} with ${this.time} to delivery.`;
  ulSelectionElem.appendChild(liElem);
  
}

// ----------------- global function -----------------//

function getCatalogsFromStorage() {

  const stringifiedCatalogs = localStorage.getItem('catalogs');
  if (stringifiedCatalogs) {
    const parsedCatalogs = JSON.parse(stringifiedCatalogs);
    console.log(parsedCatalogs);
    for (let catalog of parsedCatalogs) {
      const mySelection = new Catalog(catalog.name, catalog.type, catalog.time);
      Catalog.allCatalogs.push(myCatalog);
      myCatalog.renderCatalog();
    }
  }
  else {
    alert('Welcome first time user. We have no recorded storage of your activity here.');
  }
}

function storeCatalogs() {

  const stringifiedCatalogs = JSON.stringify(Catalog.allCatalogs);
  console.log(stringifiedCatalogs);

  localStorage.setItem('catalogs', stringifiedCatalogs);
}

function submitHandler(event) {
  event.preventDefault();
  console.log(event.target);
  const name = event.target.name.value;
  const type = event.target.name.value;
  const time = event.target.time.value;

  const myCatalog = new Catalog (name, type, time);
  Catalog.allCatalogs.push(myCatalog);
  storeCatalogs();
  myCatalog.renderCatalog();

}

// ----------------- listener -----------------//

// console.log(formElem);
formElem.addEventListener('submit', submitHandler);



// ----------------- call any functions-----------------//

