let userScore = 0;
let compScore = 0;

let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
let userS = document.querySelector("#userS");
let compS= document.querySelector("#compS"); 

const comp = () => {
    const options = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}

let drawGame = () => {
    console.log("Game is draw");
    msg.innerText = "Game is draw !";
    msg.style.backgroundColor = "#081b31";
}

let showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userS.innerText = userScore;
        msg.innerText = `YOU WIN ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++
        compS.innerText = compScore;
        msg.innerText = `YOU LOSE ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("userChoice", userChoice);
    const compChoice = comp();
    console.log("compChoice", compChoice);
    
    if(userChoice === compChoice){
        drawGame();    
    }
    else
    {
        let userWin = true;

        if(userChoice === "rock"){
            userWin = compChoice==="paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true ;
     }
        else
            userWin = compChoice === "rock" ? false : true;

        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})