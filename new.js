function computerPlay () {
    let luckyNum = Math.random();
    if (luckyNum < 0.333) {
        document.getElementById("rock").classList.add("cSelected");
        return "rock";
    } else if (luckyNum > 0.666) {
        document.getElementById("scissors").classList.add("cSelected");
        return "scissors";
    } else {
        document.getElementById("paper").classList.add("cSelected");
        return "paper";
    };
}
function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let pair = "";
    pair += computerSelection.split("")[0];
    pair += playerSelection.split("")[0];
     if (pair == "rr" | pair == "ss" | pair == "pp") {
         document.getElementById("roundDrawSound").currentTime = 0;
         document.getElementById("roundDrawSound").play();
         return "It's a draw";
     } else if (pair == "rs" | pair == "pr" | pair == "sp") {
         document.getElementById("roundLostSound").currentTime = 0;
         document.getElementById("roundLostSound").play();
         return "Computer won";
     } else if (pair == "sr" | pair == "rp" | pair == "ps") {
         document.getElementById("roundWonSound").currentTime = 0;
         document.getElementById("roundWonSound").play();
         return "Player won";
     };
  }
  let comp = 0;
  let pla = 0;
  document.getElementById("playerscore").innerHTML = pla;
  document.getElementById("computerscore").innerHTML = comp;

  function game () {
    document.getElementById("computer").classList.remove("cSelected");
    document.getElementById("player").classList.remove("pSelected");
        const computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
            if (round == "Computer won") {
                comp++;
                document.getElementById("computerscore").innerHTML = comp;
                document.getElementById("computer").classList.add("cSelected");
            } else if (round == "Player won") {
                pla++;
                document.getElementById("playerscore").innerHTML = pla;
                document.getElementById("player").classList.add("pSelected");
            };    
        console.log(round);
        if (comp === 5) {
            comp = 0;
            pla = 0;
            document.getElementById("playerscore").innerHTML = pla;
            document.getElementById("computerscore").innerHTML = comp;
            document.getElementById("gameLostSound").currentTime = 0;
            document.getElementById("gameLostSound").play();
            alert("Game over, You've defeated");
            cleaner();
            return "Game over, You've defeated";
        } else if (pla === 5) {
            comp = 0;
            pla = 0;
            document.getElementById("playerscore").innerHTML = pla;
            document.getElementById("computerscore").innerHTML = comp;
            document.getElementById("gameWonSound").currentTime = 0;
            document.getElementById("gameWonSound").play();
            alert("Game over, You've won");
            cleaner();
            return "Game over, You've won";
        } else {
            return "The battle continues";
        }
  }

// This is the start for building UI
    document.getElementById("rock").addEventListener("click", function () {
        cleaner();
        playerSelection = "rock";
        document.getElementById("rock").classList.add("pSelected");
        console.log(game());
    });
    document.getElementById("paper").addEventListener("click", function () {
        cleaner();
        playerSelection = "paper";
        document.getElementById("paper").classList.add("pSelected");
        console.log(game());
    });
    document.getElementById("scissors").addEventListener("click", function () {
        cleaner();
        playerSelection = "scissors";
        document.getElementById("scissors").classList.add("pSelected");
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

    function cleaner() {
        document.getElementById("rock").classList.remove("pSelected");
        document.getElementById("paper").classList.remove("pSelected");
        document.getElementById("scissors").classList.remove("pSelected");
        document.getElementById("rock").classList.remove("cSelected");
        document.getElementById("paper").classList.remove("cSelected");
        document.getElementById("scissors").classList.remove("cSelected");
        document.getElementById("rock").innerHTML = "";
        document.getElementById("paper").innerHTML = "";
        document.getElementById("scissors").innerHTML = "";
        document.getElementById("computer").classList.remove("cSelected");
        document.getElementById("player").classList.remove("pSelected");
    };
 
  