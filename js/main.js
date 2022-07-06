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
