console.log("Hello World");
function computerPlay () {
    let luckyNum = Math.random();
    if (luckyNum < 0.333) {
        return "rock";
    } else if (luckyNum > 0.666) {
        return "scissors";
    } else {
        return "paper";
    };
}
function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let pair = "";
    pair += computerSelection.split("")[0];
    pair += playerSelection.split("")[0];
     if (pair == "rr" | pair == "ss" | pair == "pp") {
         return "It's a draw";
     } else if (pair == "rs" | pair == "pr" | pair == "sp") {
         return "Computer won";
     } else if (pair == "sr" | pair == "rp" | pair == "ps") {
         return "Player won";
     };
  }
function game () {
    let comp = 0;
    let pla = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper or scissors?");
        const computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
            if (round == "Computer won") {
                comp++;
            } else if (round == "Player won") {
                pla++;
            };
        console.log(round);
    };
    if (comp > pla) {
        return "You've lost";
    } else if (pla > comp) {
        return "You've won"
    } else {
        return "Draw";
    }
}
console.log(game());


 
 
  