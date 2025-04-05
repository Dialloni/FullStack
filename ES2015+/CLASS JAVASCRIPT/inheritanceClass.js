class President {

    constructor( firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getfullName(){
        return this.firstname + ' ' + this.lastname;
    }
};

class VicePresident extends President {
getHelp(){
    return "Help's the President";
}

}

var hisHelper = new VicePresident ('Abubakar', 'Diallo');

console.log(hisHelper.getfullName());
console.log(hisHelper.getHelp());