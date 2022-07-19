function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3); // not using the math method directly in the choice's index is smooth

    if (randomIndex > 2) {
        console.log("Error: randomIndex returned a value greater than choice array support");
        return undefined;
    }

    return choice[randomIndex];
}

function matchRound() {
    let playerWin = 0;
    let computerWin = 0;
    let draw = 0;

    for(let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter your choice");
        switch (playerSelection) {
            case 'rock':
                switch (getComputerChoice()) {
                    case 'rock':
                        draw += 1;
                        console.log("Draw! Player and Computer choosed rock");
                        break;

                    case 'paper':
                        computerWin += 1;
                        console.log("Computer wins! Player choosed rock and PC choosed paper");
                        break;

                    case 'scissors':
                        playerWin += 1;
                        console.log("Player wins! Player choosed rock and PC choosed scissors");
                        break;
                }
                break;

            case 'paper':
                switch (getComputerChoice()) {
                    case 'rock':
                        playerWin += 1;
                        console.log("Player wins! Player choosed paper and Computer choosed rock");
                        break;

                    case 'paper':
                        draw += 1;
                        console.log("Draw! Player and Computer choosed paper");
                        break;

                    case 'scissors':
                        computerWin += 1;
                        console.log("Computer wins! Player choosed paper and PC choosed scissors");
                        break;
                }
                break;

            case 'scissors':
                switch (getComputerChoice()) {
                    case 'rock':
                        computerWin += 1;
                        console.log("Computer wins! Player choosed scissors and Computer choosed rock");
                        break;

                    case 'paper':
                        playerWin += 1;
                        console.log("Player wins! Player choosed scissors and Computer choosed paper");
                        break;

                    case 'scissors':
                        draw += 1;
                        console.log("Draw! Player and Computer choosed scissors ");
                        break;
                }
                break;

            default:
                console.log("Not a valid input");
                i--;
                break;
        }    
    }

    return [playerWin, computerWin, draw];

}


let score = matchRound(prompt("Enter your choice")); 

console.log(`Final score: \nPlayer's wins => ${score[0]} \nComputer's wins => ${score[1]} \nDraws => ${score[2]}`);
