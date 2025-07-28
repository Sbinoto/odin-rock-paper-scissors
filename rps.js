function getComputerChoice() {
    let result = Math.floor(Math.random()*3);
    switch (result){
        case 2:
            return 3
        case 1:
            return 2
        case 0:
            return 1
    }
}
function toWord(x){
    switch (x){
        case 3:
            return "Rock"
        case 2:
            return "Paper"
        case 1:
            return "Scissors"
    }
}

const rock= document.querySelector("#rock")
const paper= document.querySelector("#paper")
const scissors= document.querySelector("#scissors")

rock.addEventListener("click", playRound)
paper.addEventListener("click", playRound )
scissors.addEventListener("click", playRound)

const humanScoreBoard= document.querySelector(".human")
const computerScoreBoard= document.querySelector(".computer")

let humanScore=0;
let computerScore=0;

function interpret(x){
    switch (x.target.id){
        case "rock":
            return 3
        case "paper":
            return 2
        case "scissors":
            return 1
    }
}

function playRound(x){
const hc=interpret(x);
const cc=getComputerChoice();
switch(hc-cc){
    case 2:
    case -1:
        alert(`You win! ${toWord(hc)} beats ${toWord(cc)}`)
        humanScore+=5
        break
    case 0:
        alert("It's a tie!")
        break
    default:
        alert(`You lose! ${toWord(cc)} beats ${toWord(hc)}`)
        computerScore+=1
        break
}
if (computerScore==5){
    [computerScore, humanScore]=[0,0]
    alert('Computer wins, LOSER')
}
else if (humanScore==5){
    [computerScore, humanScore]=[0,0]
    alert('You win!')
}
humanScoreBoard.textContent=`Your Score: ${humanScore}`
computerScoreBoard.textContent=`Computer's score: ${computerScore}`
}
