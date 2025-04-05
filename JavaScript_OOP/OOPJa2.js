// Boxer class
class Boxer {
    constructor(name, size, strength, wins, losses) {
        this.name = name;
        this.size = size;
        this.strength = strength;
        this.wins = wins;
        this.losses = losses;
    }

    displayStats() {
        console.log(`Boxer: ${this.name}`);
        console.log(`Size: ${this.size}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`Wins: ${this.wins}`);
        console.log(`Losses: ${this.losses}`);
        console.log("---------------------------");
    }

    getScore() {
        // Calculate a score based on the boxer's stats
        return this.size + this.strength + this.wins - this.losses;
    }
}

// Create two Boxer objects
const boxer1 = new Boxer("Mike Tyson", 85, 90, 50, 6);
const boxer2 = new Boxer("Muhammad Ali", 80, 88, 56, 5);

// Display stats for both boxers
console.log("Boxer Stats:");
boxer1.displayStats();
boxer2.displayStats();

// Prompt the user to choose a boxer
const prompt = require("prompt-sync")(); // Use prompt-sync for user input
const userChoice = prompt("Which boxer would you like to bet on? (1 for Mike Tyson, 2 for Muhammad Ali): ");

// Determine the winner based on the boxers' scores
const boxer1Score = boxer1.getScore();
const boxer2Score = boxer2.getScore();

console.log("\nResults:");
if ((userChoice === "1" && boxer1Score >= boxer2Score) || (userChoice === "2" && boxer2Score >= boxer1Score)) {
    console.log("Congratulations! You won your bet!");
} else {
    console.log("Sorry, you lost your bet.");
}

// Display the winner
if (boxer1Score > boxer2Score) {
    console.log("The winner is Mike Tyson!");
} else if (boxer2Score > boxer1Score) {
    console.log("The winner is Muhammad Ali!");
} else {
    console.log("It's a tie!");
}