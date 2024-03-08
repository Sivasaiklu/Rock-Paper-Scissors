let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score"); 


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
};


const playGame = (userChoice) => {

    //computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


const drawGame = () => {
    msg.innerText = "Game was Draw, Play again";
    msg.style.backgroundColor = "#482C3D";
    msg.style.color = "white";
};


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#D610A7";
        msg.style.color = "white";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${userChoice} beats Your ${compChoice}`;
        msg.style.backgroundColor = "#99D17C";
        msg.style.color = "black";
    }
};