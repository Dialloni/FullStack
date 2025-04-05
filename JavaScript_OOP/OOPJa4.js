// Base class: BigCat
class BigCat {
    constructor() {
        this.speed = 5;
        this.strength = 5;
        this.intelligence = 5;
        this.health = 5;
        this.durability = 5;
    }
}

// Lion class
class Lion extends BigCat {
    constructor() {
        super();
        this.strength = 50;
        this.health = 50;
    }

    king(target) {
        if (target instanceof Cheetah) {
            // 60% chance for Cheetah to escape unscathed
            if (Math.random() < 0.6) {
                console.log("The Cheetah escaped unscathed!");
                return;
            }
        }
        // Deplete all attributes of the target
        target.speed = 0;
        target.strength = 0;
        target.intelligence = 0;
        target.health = 0;
        target.durability = 0;
        console.log("The Lion has defeated its target!");
    }
}

// Leopard class
class Leopard extends BigCat {
    constructor() {
        super();
        this.strength = 30;
        this.intelligence = 30;
        this.health = 30;
    }

    attack(target) {
        if (target instanceof Lion) {
            target.king(this);
        } else if (target instanceof Cheetah) {
            // 60% chance for Cheetah to escape unscathed
            if (Math.random() < 0.6) {
                console.log("The Cheetah escaped unscathed!");
                return;
            }
        }
        // Deplete health of the target by 15 points
        target.health -= 15;
        console.log("The Leopard attacked its target!");
    }
}

// Cheetah class
class Cheetah extends BigCat {
    constructor() {
        super();
        this.speed = 75;
        this.strength = 25;
        this.intelligence = 25;
        this.health = 25;
        this.durability = 25;
    }

    run(target) {
        if (target instanceof Leopard) {
            target.attack(this);
        } else if (target instanceof Lion) {
            target.king(this);
        }
        // If the Cheetah runs away, it loses 20 health points
        this.health -= 20;
        console.log("The Cheetah ran away and lost 20 health points!");
    }
}

// Game logic
function playGame() {
    const lion = new Lion();
    const leopard = new Leopard();
    const cheetah = new Cheetah();

    console.log("Game Start!");
    console.log("Lion:", lion);
    console.log("Leopard:", leopard);
    console.log("Cheetah:", cheetah);

    // Example interactions
    cheetah.run(leopard); // Cheetah encounters Leopard
    leopard.attack(lion); // Leopard attacks Lion
    lion.king(cheetah);   // Lion uses king on Cheetah

    console.log("Game End!");
    console.log("Lion:", lion);
    console.log("Leopard:", leopard);
    console.log("Cheetah:", cheetah);

    // Determine the winner
    const contestants = [lion, leopard, cheetah];
    const alive = contestants.filter(cat => cat.health > 0);

    if (alive.length === 1) {
        console.log(`The winner is: ${alive[0].constructor.name}`);
    } else if (alive.length > 1) {
        console.log("It's a tie between:", alive.map(cat => cat.constructor.name).join(", "));
    } else {
        console.log("No one survived!");
    }
}

// Start the game
playGame();