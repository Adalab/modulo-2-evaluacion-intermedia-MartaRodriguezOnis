"use strict";

const numberInput = document.querySelector(".js_numberInput");
const testButton = document.querySelector(".js_testButton");
const clueParagraph = document.querySelector(".js_clueParagraph");
const attemptParagraph = document.querySelector(".js_attemptParagraph");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

const validNumber = () => {
  const valueNumber = numberInput.value;
  if (parseInt(valueNumber) < 0 || parseInt(valueNumber) > 100) {
    clueParagraph.innerHTML = `El número debe estar entre 1 y 100`;
  }
};

const showMessage = () => {
  const valueNumber = numberInput.value;
  if (parseInt(valueNumber) > parseInt(randomNumber)) {
    clueParagraph.innerHTML = `Demasiado alto`;
  } else if (parseInt(valueNumber) < parseInt(randomNumber)) {
    clueParagraph.innerHTML = `Demasiado bajo`;
  } else if (parseInt(valueNumber) === parseInt(randomNumber)) {
    clueParagraph.innerHTML = `Has ganado campeona!!! `;
  }
};

function handleClick(ev) {
  ev.preventDefault();
  showMessage();
  validNumber();
}

testButton.addEventListener("click", handleClick);
