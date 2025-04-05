class Student {
   constructor(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
   }

   getfullName(){
    return this.firstname + ' ' + this.lastname; 
   }
};

const firstStudent = new Student ('Maury', 'Diallo');

console.log(firstStudent.getfullName());