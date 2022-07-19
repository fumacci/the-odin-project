function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3); // not using the math method directly in the choice's index is smooth

    if (randomIndex > 2) {
        console.log("Error: randomIndex returned a value greater than choice array support");
        return undefined;
    }

    return choice[randomIndex];
}

function getPlayerChoice() {
    return prompt("Enter your choice").toLowerCase(); // case insensitive feature
}

function matchRound() {
    let playerWin = false;
    let computerWin = false;
    let draw = false;
    let invalidInput = false;

    switch (getPlayerChoice()) {
        case 'rock':
            switch (getComputerChoice()) {
                case 'rock':
                    draw = true;
                    console.log("Draw! Player and Computer choosed rock");
                    break;

                case 'paper':
                    computerWin = true;
                    console.log("Computer wins! Player choosed rock and PC choosed paper");
                    break;

                case 'scissors':
                    playerWin = true;
                    console.log("Player wins! Player choosed rock and PC choosed scissors");
                    break;
            }
            break;

        case 'paper':
            switch (getComputerChoice()) {
                case 'rock':
                    playerWin = true;
                    console.log("Player wins! Player choosed paper and Computer choosed rock");
                    break;

                case 'paper':
                    draw = true;
                    console.log("Draw! Player and Computer choosed paper");
                    break;

                case 'scissors':
                    computerWin = true;
                    console.log("Computer wins! Player choosed paper and PC choosed scissors");
                    break;
            }
            break;

        case 'scissors':
            switch (getComputerChoice()) {
                case 'rock':
                    computerWin = true;
                    console.log("Computer wins! Player choosed scissors and Computer choosed rock");
                    break;

                case 'paper':
                    playerWin = true;
                    console.log("Player wins! Player choosed scissors and Computer choosed paper");
                    break;

                case 'scissors':
                    draw = true;
                    console.log("Draw! Player and Computer choosed scissors ");
                    break;
            }
            break;

        default:
            console.log("Not a valid input");
            invalidInput = true;
            break;
    }    

    return [playerWin, computerWin, draw, invalidInput];
}

function game() {

    let scorePlayer = 0;
    let scoreComp = 0;
    let scoreDraw = 0;

    for(let i = 0; i < 5; i++) {
        let result = matchRound();

        if (result[0]) {scorePlayer += 1;}
        if (result[1]) {scoreComp += 1;}
        if (result[2]) {scoreDraw += 1;}
        if (result[3]) {--i};
    }

    return [scorePlayer, scoreComp, scoreDraw];

}

let score = game();
console.log(`Final score: \nPlayer's wins => ${score[0]} \nComputer's wins => ${score[1]} \nDraws => ${score[2]}`);
