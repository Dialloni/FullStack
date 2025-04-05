const logWinners = (atheletes) =>{
    const gold = atheletes[0];
    const silver = atheletes[1];
    const bronz = atheletes[2];
    const diamon = atheletes [3];

    console.log('The winner for the gold, silver, bronz and Diamon are',
        gold,
        silver,
        bronz,diamon
    )
}

// Simplified FORMS
const logWinner = ([gold,silver,bronz]) =>{
    console.log( 'The winner of the gold, silver and bronz are',
        gold,
        silver,
        bronz
    )
};

const atheletes = [
    'Abubakar Diallo',
    'Mverick MANILA',
    'Abshir Boston',
    'Adam Gill'
];

logWinners(atheletes);
console.log('--------------------------------------------------');
logWinner(atheletes);