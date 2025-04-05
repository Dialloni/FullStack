class Developer {
    constructor(firstname, lastname) {
        this.firstname = firstname; // Fixed typo: firstnme -> firstname
        this.lastname = lastname;
    }

    getName() { // Fixed typo: getNmae -> getName
        return `${this.firstname}, ${this.lastname}`; // Fixed template literal
    }
}

var meName = new Developer('Abubakr', 'Diallo');

console.log(meName.getName()); // Fixed method call: getNmae -> getName