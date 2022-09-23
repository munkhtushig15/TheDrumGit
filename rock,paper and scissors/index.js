let check = (player, bot) => {
    if(player == "rock" && bot == "sci") {
        console.log(`${playerName} wins`);
    }
    if(player == "rock" && bot == "paper") {
        console.log(`${playerName} lose`);
    }
    if(player == "rock" && bot == "rock") {
        console.log(`Tie`);
    }
    if(player == "paper" && bot == "paper") {
        console.log(`Tie`);
    }
    if(player == "paper" && bot == "sci") {
        console.log(`${playerName} lose`);
    }
    if(player == "paper" && bot == "rock") {
        console.log(`${playerName} WINS`);
    }
    if(player == "sci" && bot == "paper") {
        console.log(`${playerName} WINS`);
    }
    if(player == "sci" && bot == "rock") {
        console.log(`${playerName} lose`);
    }
    if(player == "sci" && bot == "sci") {
        console.log(`Tie`);
    }
}

let playerName = 'Tushy';


check('sci','sci');