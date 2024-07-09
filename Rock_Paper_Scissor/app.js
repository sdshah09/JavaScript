let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let resetButton = document.querySelector("#reset-btn");

const totaluserScore = document.querySelector("#user-score");
const totalcompScore = document.querySelector("#comp-score");

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    totaluserScore.innerText = userScore;
    totalcompScore.innerText = compScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = ""; // Reset background color

};

const getCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}
const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
  };
  
const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        totaluserScore.innerText = userScore;
        console.log("You Win");
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        totalcompScore.innerText = compScore;
        console.log("You Lose");
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) =>{
  const compChoice = getCompChoice();
  console.log("user choice: ",userChoice)
  console.log("computer choice: ",compChoice);
  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }

};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

resetButton.addEventListener("click", resetGame);
