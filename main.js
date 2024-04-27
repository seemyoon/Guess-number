const body = document.body; // element body
const resetBtn = document.querySelector(".btn-1"); // element btn "again"
const unknownNumber = document.querySelector(".container2__unknown-number"); //unknownNumber
const cont3H = document.querySelector(".container3-healing"); // element container3 healing;
const cont2Q = document.querySelector(".container2__question"); // element container2__question;

const btnGuessSymbol = document.querySelector(".btn-2"); // element btn "check"
const input = document.querySelector("#number"); // element input
const randomNumber = Math.round(Math.random() * 20); // Math.random
const check = () => {
  if (input.value < randomNumber && input.value < 21 && input.value > 0) {
    cont3H.innerHTML = `Too little`;
    return false;
  } else if (
    input.value > randomNumber &&
    input.value < 21 &&
    input.value > 0
  ) {
    cont3H.innerHTML = `Too much`;
    return false;
  } else if (
    input.value == randomNumber &&
    input.value < 21 &&
    input.value > 0
  ) {
    cont3H.innerHTML = `🎉 Your answer is right`;
    unknownNumber.innerHTML = `${randomNumber}`;
    cont2Q.classList.add("container2__question-Winner");
    body.classList.add("body-Winner");
    return true;
  } else {
    cont3H.innerHTML = `Your need to enter the numbers between 1 and 20`;
    // return false
  }
};
btnGuessSymbol.addEventListener("click", check);
const contItem2 = document.querySelector(".container3__item-two").children[0]; // element container3__item-two;
const contItem2LastChild = contItem2.lastChild;
const attemptTypeStringNumber = contItem2LastChild.innerHTML;
let attemptNumber = parseInt(attemptTypeStringNumber);

// let firstAttempt = attemptNumber;
// while(check() === false && attemptNumber > 0){
// attemptNumber--;
// }
