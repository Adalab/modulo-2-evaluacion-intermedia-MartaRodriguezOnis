"use strict";

//ELEMENTOS DEL HTML

const numberInput = document.querySelector(".js_numberInput");
const testButton = document.querySelector(".js_testButton");
const clueParagraph = document.querySelector(".js_clueParagraph");
const attemptParagraph = document.querySelector(".js_attemptParagraph");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

const writeParagraph = (message) => {
  clueParagraph.innerHTML = message;
};

// const validNumber = () => {
//   if (valueNumber < 1 || valueNumber > 100) {
//     clueParagraph.innerHTML = `El número debe estar entre 1 y 100`;
//   }
// };

const showMessage = () => {
  const valueNumber = parseInt(numberInput.value);
  if (valueNumber > randomNumber) {
    writeParagraph(`Demasiado alto`);
  } else if (valueNumber < randomNumber) {
    writeParagraph(`Demasiado bajo`);
  } else if (valueNumber === randomNumber) {
    writeParagraph(`Has ganado campeona!!!`);
  }
};

let counter = 0;
function addCounter() {
  const valueNumber = parseInt(numberInput.value);
  if (valueNumber !== randomNumber) {
    counter += 1;
    attemptParagraph.innerHTML = `Número de intentos: ${counter}`;
  }
  return counter;
}

function handleClick(ev) {
  ev.preventDefault();
  showMessage();
  // validNumber();
  addCounter();
}

testButton.addEventListener("click", handleClick);
