class Car{
    constructor(topspeed){
        this.topspeed = topspeed;
        this.location = 0;
    }

   getTopspeed(){
    return `${this.topspeed}`;
   }

   drive(){
    this.location +=10;
   }

   stop(){
    console.log(`Final location: ${this.location} miles`);
   }
};

var showSpeed = new Car ('1000');

console.log(showSpeed.getTopspeed());
showSpeed.drive();
showSpeed.stop();

