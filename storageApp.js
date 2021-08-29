// this does not run, used to develop original storage functions //


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

Selection.allSelections = [];

// ----------------- prototype method -----------------//

Selection.prototype.renderSelection = function() {
  const ulSelectionElem = document.getElementById('selections');
  const liElem = document.createElement('li');
  liElem.textContent = `${this.name} ordered a ${this.type} with ${this.time} to delivery.`;
  ulSelectionElem.appendChild(liElem);
  
}

// ----------------- global function -----------------//

function getSelectionsFromStorage() {

  const stringifiedSelections = localStorage.getItem('selections');
  if (stringifiedSelections) {
    const parsedSelections = JSON.parse(stringifiedSelections);
    console.log(parsedSelections);
    for (let selection of parsedSelections) {
      const mySelection = new Selection(selection.name, selection.type, selection.time);
      Selection.allSelections.push(mySelection);
      mySelection.renderSelection();
    }
  }
  else {
    alert('Welcome first time user. We have no recorded storage of your activity here.');
  }
}

function storeSelections() {

  const stringifiedSelections = JSON.stringify(Selection.allSelections);
  console.log(stringifiedSelections);

  localStorage.setItem('selections', stringifiedSelections);
}

function submitHandler(event) {
  event.preventDefault();
  console.log(event.target);
  const name = event.target.name.value;
  const type = event.target.name.value;
  const time = event.target.time.value;

  const mySelection = new Selection (name, type, time);
  Selection.allSelections.push(mySelection);
  storeSelections();
  mySelection.renderSelection();

}

// ----------------- listener -----------------//

// console.log(formElem);
formElem.addEventListener('submit', submitHandler);



// ----------------- call any functions-----------------//




var nums = [1, 2, 3, 4, 5];

var multiplyByTwo = function(array) {
  for (var i = 0; i< array.length; i++) {
    array[i] = array[i] * 2;

  }
  return array;
}

multiplyByTwo(nums);
console.log(nums);

const userName = {
  firstName: "brian",
  lastName: "Kaspr",
  password:"",
  handler: "tree"
  getPassword: (inputPassword) => {
    this.password = inputPassword
  }
}
const add = (x,y) => x + y;

const arrayFunc = [hello, add, subtract];

const getPassword = (passwordInput) => {
  return passwordInput
}
const name = () => "brian"
const hello = (func) => {
  return () => {
    return name();
  }
}