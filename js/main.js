"use strict";

// ELEMENTOS DEL HTML

const numberInput = document.querySelector(".js_numberInput");
const testButton = document.querySelector(".js_testButton");
const clueParagraph = document.querySelector(".js_clueParagraph");
const attemptParagraph = document.querySelector(".js_attemptParagraph");
const resetButton = document.querySelector(".js_resetButton");

// FUNCIONES

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const writeParagraph = (message) => {
  clueParagraph.innerHTML = message;
};

const checkNumber = () => {
  const valueNumber = parseInt(numberInput.value);
  if (isNaN(valueNumber)) {
    writeParagraph(`¡¡¡Debes introducir un número entre 1 y 100!!!`);
  } else if (valueNumber < 1 || valueNumber > 100) {
    writeParagraph(`El número debe estar entre 1 y 100.`);
  } else if (valueNumber > randomNumber) {
    writeParagraph(`Demasiado alto`);
  } else if (valueNumber < randomNumber) {
    writeParagraph(`Demasiado bajo`);
  } else if (valueNumber === randomNumber) {
    writeParagraph(`Has ganado campeona!!!`);
  }
};

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
  checkNumber();
  addCounter();
}
function handleClickReset(ev) {
  ev.preventDefault();
  location.reload();
}

// EVENTOS

testButton.addEventListener("click", handleClick);
resetButton.addEventListener("click", handleClickReset);

// CÓDIGO GLOBAL

let counter = 0;
const randomNumber = getRandomNumber(100);
console.log(randomNumber);
