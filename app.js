function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0){
        return "rock";
    }
    else if(randomNum === 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    choice = prompt("Make your choice(Rock, Paper or Scissors)? ");
    if (choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice;
    }
    else{
        console.log("Invalid input please try again");
        // return getHumanChoice();
    }
};


let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();

    if (choice === "rock" && computerSelection === "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if (choice === "rock" && computerSelection === "scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
    else if (choice === "paper" && computerSelection === "rock"){
        console.log("You Win! Paper beats Rock");
        humanScore++;
    }
    else if (choice === "paper" && computerSelection === "scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    else if (choice === "scissors" && computerSelection === "rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }
    else if (choice === "scissors" && computerSelection === "paper"){
        console.log("You Win! Scissors beats Paper");
        computerScore++;
    }
    else{
        console.log('It is a draw, You both chose', choice);
        computerScore++;
        humanScore++;
    }
}


function playGame() {
    for (let i = 1; i <= 5; i++){ //Plays the game 5 times
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    };

    console.log("Computer score is ", computerScore, "Human score is ", humanScore);
    

    if (computerScore > humanScore){
        console.log("Aww! You lost the game");
    } else if (computerScore < humanScore){
        console.log("Congrats! You won the game");
    }
    else{
        console.log("It's a tie game")
    }
}

playGame();
