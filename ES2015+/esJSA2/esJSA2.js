class Boxer {
    constructor(size, strength, wins, losses) {
        this.size = size;
        this.strength = strength;
        this.wins = wins;
        this.losses = losses;
    }

    getResult() {
        return `Size: ${this.size}, Strength: ${this.strength}, Wins: ${this.wins}, Losses: ${this.losses}`;
    }

    getScore() {
        return this.size + this.strength + this.wins - this.losses;
    }
}

var Boxer1 = new Boxer(12, 85, 5, 2);
var Boxer2 = new Boxer(16, 90, 1, 5);

document.getElementById('boxer1-stats').innerText = Boxer1.getResult();
document.getElementById('boxer2-stats').innerText = Boxer2.getResult();

var user_input = prompt("Which boxer would you like to bet on? (Enter 1 for Boxer1 or 2 for Boxer2)");

var chosenBoxer;
if (user_input === '1') {
    chosenBoxer = Boxer1;
} else if (user_input === '2') {
    chosenBoxer = Boxer2;
} else {
    document.getElementById('result').innerText = "Invalid choice.";
    throw new Error("Invalid choice.");
}

var bestBoxer; 
if(Boxer1.getScore() > Boxer2.getScore()){
    bestBoxer = Boxer1;
} else{
    bestBoxer = Boxer2;
}

if (chosenBoxer === bestBoxer) {
    document.getElementById('result').innerText = "You win your bet!";
} else {
    document.getElementById('result').innerText = "You lose your bet.";
}