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
    choice = choice.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice;
    }
    else{
        console.log("Invalid input please try again");
        getHumanChoice();
    }
};


let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (choice === "rock" && computerSelection === "paper"){
        console.log('I chose', computerSelection);
        console.log(`You lose ${computerSelection} beats ${choice}`);
        computerScore++;
    }
    else if (choice === "rock" && computerSelection === "scissors"){
        console.log('I chose', computerSelection);
        console.log(`You win! ${choice} beats ${computerSelection}`);
        humanScore++;
    }
    else if (choice === "paper" && computerSelection === "rock"){
        console.log('I chose', computerSelection);
        console.log(`You win! ${choice} beats ${computerSelection}`);
        humanScore++;
    }
    else if (choice === "paper" && computerSelection === "scissors"){
        console.log('I chose', computerSelection);
        console.log(`You lose ${computerSelection} beats ${choice}`);
        computerScore++;
    }
    else if (choice === "scissors" && computerSelection === "rock"){
        console.log('I chose', computerSelection);
        console.log(`You lose ${computerSelection} beats ${choice}`);
        computerScore++;
    }
    else if (choice === "scissors" && computerSelection === "paper"){
        console.log('I chose', computerSelection);
        console.log(`You win! ${choice} beats ${computerSelection}`);
        computerScore++;
    }
    else{
        console.log('I chose', computerSelection);
        console.log(`It's a draw, you both chose ${choice}`);
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