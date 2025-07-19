function getComputerChoice() {
    let result = Math.floor(Math.random()*100 +1);
    if (result>66){
        result="ROCK"
    }else if(result>33){
        result="PAPER"
    }else{
        result="SCISSORS"
    }
    return result
}
function toNumbers(c){
    switch (c){
        case "ROCK":
            return 3
        case "PAPER":
            return 2
        default:
            return 1
    }
}
function getHumanChoice(){
    return prompt("Input rock, paper, or scissors").toUpperCase();
}
function playGame(){
    let humanScore=0;
    let computerScore=0;
    function playRound(){
    let hc=getHumanChoice();
    let cc=getComputerChoice();
    switch(toNumbers(hc)-toNumbers(cc)){
        case 2:
        case -1:
            alert(`You win! ${hc} beats ${cc}`)
            humanScore+=1
            break
        case 0:
            alert("It's a tie!")
            break
        default:
            alert(`You lose! ${cc} beats ${hc}`)
            computerScore+=1
    }
}
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    if (humanScore>computerScore){
        alert("You won!")
    }
    else if (humanScore==computerScore){
        alert("It's a tie!")
    }
    else{
        alert("You lost!")
    }
}
playGame()