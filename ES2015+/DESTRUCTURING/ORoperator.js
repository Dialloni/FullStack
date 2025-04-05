const passenger = {
  Name: 'Abubakr Diallo',
 class: 'First class'
};

const {
    name: passengerName = 'Unknown',
    class: ticket = 'Economy',
} = passenger || {};

console.log(`Passenger Name: ${passengerName}`);
console.log(`Ticket Class: ${ticket}`);