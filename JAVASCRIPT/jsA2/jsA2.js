document.write('<h1>Abubakar Diallo</h1>');

document.write('<h3 id="color">orange</h3>');
let color = document.getElementById('color');
color.style.color = 'orange';

// option 1
// document.write('<h3>Chorba</h3>');
// document.write('<img src="./chorba.jpeg" alt="chorba">');


// Option 2, my favorite
let food = document.createElement('h3');
food.textContent = 'Chorba';
document.body.appendChild(food);

let img = document.createElement('img');
img.src = './chorba.jpeg';
img.alt = 'chorba'; 
img.style.width = '150px';
document.body.appendChild(img);





