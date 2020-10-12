// Rock Paper Scissor
// Joshua Wong 10/12/2020

const computerResult = document.getElementById("computerResult");
const computerScore =  document.getElementById("computerScore");
const playerScore =  document.getElementById("playerScore");

var playerScore_Value = 0;
var computerScore_Value = 0;
const gameChoices = ["Rock", "Paper", "Scissor"]; // Choices

function rockChoice(){
    const random = Math.floor(Math.random() * 3);
    computerResult.innerHTML = gameChoices[random];
    switch(computerResult.innerHTML){
        case gameChoices[0]:
            computerResult.innerHTML = gameChoices[0];
            alert("You're tied!");
            break;
        case gameChoices[1]:
            computerResult.innerHTML = gameChoices[1];
            computerScore.innerHTML = computerScore_Value += 1;
            alert("You lose!");
            break;
        case gameChoices[2]:
            computerResult.innerHTML = gameChoices[2];
            playerScore.innerHTML = playerScore_Value += 1;
            alert("You win!");
            break;
    }
}

function paperChoice(){
    const random = Math.floor(Math.random() * gameChoices.length);
    computerResult.innerHTML = gameChoices[random];
    switch(computerResult.innerHTML){
        case gameChoices[0]:
            computerResult.innerHTML = gameChoices[0];
            playerScore.innerHTML = playerScore_Value += 1;
            alert("You win!");
            break;
        case gameChoices[1]:
            computerResult.innerHTML = gameChoices[1];
            alert("You're tied!");
            break;
        case gameChoices[2]:
            computerResult.innerHTML = gameChoices[2];
            computerScore.innerHTML = computerScore_Value += 1;
            alert("You lose!");
            break;
    }
}

function scissorChoice(){
    const random = Math.floor(Math.random() * gameChoices.length);
    computerResult.innerHTML = gameChoices[random];
    switch(computerResult.innerHTML){
        case gameChoices[0]:
            computerResult.innerHTML = gameChoices[0];
            computerScore.innerHTML = computerScore_Value += 1;
            alert("You lose!");
            break;
        case gameChoices[1]:
            computerResult.innerHTML = gameChoices[1];
            playerScore.innerHTML = playerScore_Value += 1;
            alert("You win!");
            break;
        case gameChoices[2]:
            computerResult.innerHTML = gameChoices[2];
            alert("You're tied!");
            break;
    }
}
