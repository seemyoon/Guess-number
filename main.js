const body = document.body; // element body
const resetBtn = document.querySelector(".btn-1"); // element btn "again"
const unknownNumber = document.querySelector(".container2__unknown-number"); //unknownNumber
const cont3H = document.querySelector(".container3-healing"); // element container3 healing;
const cont2Q = document.querySelector(".container2__question"); // element container2__question;
const recordHtml = document.querySelector(".record"); // element record;
const btnGuessSymbol = document.querySelector(".btn-2"); // element btn "check"
const scoreHtml = document.querySelector(".score"); // element btn "check"
const input = document.querySelector("#number"); // element input
const randomNumber = Math.round(Math.random() * 20); // Math.random
let record = 0;
let score = 20;
const check = () => {
  if (input.value == randomNumber) {
    cont3H.innerHTML = `🎉 Your answer is right`;
    unknownNumber.innerHTML = `${randomNumber}`;
    cont2Q.classList.add("container2__question-Winner");
    body.classList.add("body-Winner");
    if (score > record) {
      record = score;
      recordHtml.innerHTML = score;
    }
  } else if (input.value !== randomNumber) {
    if (score > 1) {
      if (input.value > randomNumber && input.value < 21 && input.value > 0) {
        cont3H.innerHTML = `Too much`;
        score--;
        scoreHtml.innerHTML = score;
      } else if (
        input.value < randomNumber &&
        input.value < 21 &&
        input.value > 0
      ) {
        cont3H.innerHTML = `Too little`;
        score--;
        scoreHtml.innerHTML = score;
      } else {
        cont3H.innerHTML = `Your need to enter the numbers between 1 and 20`;
        score--;
        scoreHtml.innerHTML = score;
      }
    } else {
      cont3H.innerHTML = `You lost`;
      scoreHtml.innerHTML = 0;
    }
  }
};
btnGuessSymbol.addEventListener("click", check);
resetBtn.addEventListener("click", function () {
  score = 20
  cont3H.innerHTML = `Start to guess`;
  scoreHtml.innerHTML = score;
  body.classList.add("body-Start");
  cont2Q.classList.add("container2__question-Start");
  unknownNumber.innerHTML = "?";
  input.value = ``;
});
