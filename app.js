const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const p = document.querySelector('.response')
const result = document.querySelector('.result');
const round = document.querySelector('.round');
const score = document.querySelector('.score');
const message = document.querySelector('.message');
const myChoice = document.querySelector('.mychoice');


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

rock.addEventListener('click', () => getHumanSelection('rock'));
paper.addEventListener('click', ()=> getHumanSelection('paper'));
scissors.addEventListener('click', ()=> getHumanSelection('scissors'));

let humanSelection;

function getHumanSelection(selection){
    humanSelection = selection;
    playGame();
}

let humanScore = 0;
let computerScore = 0;
let currentRound = 1;
let maxRounds = 5;

function playRound(choice, computerChoice) {
    myChoice.innerHTML = `You chose: ${humanSelection}`;
    p.innerHTML = `Computer chose: ${computerChoice}`;

    if (choice === "rock" && computerChoice === "paper"){
        computerScore++;
    }
    else if (choice === "rock" && computerChoice === "scissors"){
        humanScore++;
    }
    else if (choice === "paper" && computerChoice === "rock"){
        humanScore++;
    }
    else if (choice === "paper" && computerChoice === "scissors"){
        computerScore++;
    }
    else if (choice === "scissors" && computerChoice === "rock"){
        computerScore++;
    }
    else if (choice === "scissors" && computerChoice === "paper"){
        humanScore++;
    }
    else{
        computerScore += 0;
        humanScore += 0;
    }
}

function playGame() {
    round.innerHTML = `Round ${currentRound}`;
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    score.innerHTML = `Computer score is ${computerScore}, Your score is ${humanScore}`;

    currentRound++;

    if (currentRound > maxRounds){
        displayFinalResults();
    }


    function displayFinalResults() {
        //Disables the button once the game is over
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        
        if (computerScore > humanScore){
            message.innerHTML = `Aww! You lost the game`;
        } else if (computerScore < humanScore){
            message.innerHTML = `Congrats! You won the game`;
        }else{
        message.innerHTML = `It's a tie game`;
        };
    }
};
