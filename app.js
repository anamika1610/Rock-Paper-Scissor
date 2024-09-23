let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userSCorePara = document.querySelector("#user-score");
const compSCorePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIndx = Math.floor(Math.random() * 3);
  return options[randIndx];
};

const shoWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `Yu win ! Your ${userChoice} beats ${compChoice} `;
    msg.style.backgroundColor = "#94A430";
    userscore++;
    userSCorePara.innerText = userscore;
  } else {
    msg.innerText = `Yu lose ! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "#BB4047";
    compscore++;
    compSCorePara.innerText = compscore;
  }
};
const drawGame = () => {
  msg.innerText = "Game draw , Play again ";
  msg.style.color = "black";

  msg.style.backgroundColor = "#DDC030";
};
const playGame = (userChoice) => {
  //generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //compchoice---scissor,paper
      userWin = compChoice == "paper" ? false : true;
    } else if (userChoice === "paper") {
      //compchoice---rock,scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      //compchoice---rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    shoWinner(userWin, userChoice, compChoice);
  }
};
