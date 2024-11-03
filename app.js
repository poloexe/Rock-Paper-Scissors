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
        getHumanChoice(); //Retry if the input is invalid
    }
};


let humanScore = 0;
let computerScore = 0;

function playRound(choice, computerChoice) {
    if (choice === "rock" && computerChoice === "paper"){
        console.log('I chose', computerChoice);
        console.log(`You lose ${computerChoice} beats ${choice}`);
        computerScore++;
    }
    else if (choice === "rock" && computerChoice === "scissors"){
        console.log('I chose', computerChoice);
        console.log(`You win! ${choice} beats ${computerChoice}`);
        humanScore++;
    }
    else if (choice === "paper" && computerChoice === "rock"){
        console.log('I chose', computerChoice);
        console.log(`You win! ${choice} beats ${computerChoice}`);
        humanScore++;
    }
    else if (choice === "paper" && computerChoice === "scissors"){
        console.log('I chose', computerChoice);
        console.log(`You lose ${computerChoice} beats ${choice}`);
        computerScore++;
    }
    else if (choice === "scissors" && computerChoice === "rock"){
        console.log('I chose', computerChoice);
        console.log(`You lose ${computerChoice} beats ${choice}`);
        computerScore++;
    }
    else if (choice === "scissors" && computerChoice === "paper"){
        console.log('I chose', computerChoice);
        console.log(`You win! ${choice} beats ${computerChoice}`);
        computerScore++;
    }
    else{
        console.log('I chose', computerChoice);
        console.log(`It's a draw, you both chose ${choice}`);
        computerScore++;
        humanScore++;
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++){ //Plays the game 5 times
        console.log(`Round ${i}`);
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        
        console.log("Computer score is ", computerScore, "Human score is ", humanScore);
    };
    

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