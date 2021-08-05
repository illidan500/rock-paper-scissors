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
  let comp = 0;
  let pla = 0;
  document.getElementById("playerscore").innerHTML = pla;
  document.getElementById("computerscore").innerHTML = comp;
  function game () {
        const computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
            if (round == "Computer won") {
                comp++;
                document.getElementById("computerscore").innerHTML = comp;
            } else if (round == "Player won") {
                pla++;
                document.getElementById("playerscore").innerHTML = pla;
            };    
        console.log(round);
        if (comp === 5) {
            comp = 0;
            pla = 0;
            document.getElementById("playerscore").innerHTML = pla;
            document.getElementById("computerscore").innerHTML = comp;
            alert("Game over, You've defeated");
            return "Game over, You've defeated";
        } else if (pla === 5) {
            comp = 0;
            pla = 0;
            document.getElementById("playerscore").innerHTML = pla;
            document.getElementById("computerscore").innerHTML = comp;
            alert("Game over, You've won");
            return "Game over, You've won";
        } else {
            return "The battle continues";
        }
  }

// This is the start for building UI
    document.getElementById("rock").addEventListener("click", function () {
        playerSelection = "rock";
        console.log(game());
    });
    document.getElementById("paper").addEventListener("click", function () {
        playerSelection = "paper";
        console.log(game());
    });
    document.getElementById("scissors").addEventListener("click", function () {
        playerSelection = "scissors";
        console.log(game());
    });
    document.getElementById("rock").addEventListener("mouseover", function () { 
        document.getElementById("rock").classList.add("mouseover");    
    });
    document.getElementById("rock").addEventListener("mouseleave", function () {
        document.getElementById("rock").classList.remove("mouseover");    
    });
    document.getElementById("paper").addEventListener("mouseover", function () {
        document.getElementById("paper").classList.add("mouseover");    
    });
    document.getElementById("paper").addEventListener("mouseleave", function () {
        document.getElementById("paper").classList.remove("mouseover");    
    });
    document.getElementById("scissors").addEventListener("mouseover", function () {
        document.getElementById("scissors").classList.add("mouseover");    
    });
    document.getElementById("scissors").addEventListener("mouseleave", function () {
        document.getElementById("scissors").classList.remove("mouseover");    
    });
 
 
  