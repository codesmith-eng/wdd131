//get elements from the html document
const radiusOutput = document.getElementById('radius');
const areaOutput = document.querySelector('#area');

let area = 0;
const PI = 3.14159;

let radius = 10;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

radius = 20;
area = PI * radius * radius;
radiusOutput.innerHTML = radius;
areaOutput.innerHTML = area;


//radiusOutput.textContent = radius;
//areaOutput.textContent = area;
//radiusOutput.innerHTML = radius;
//areaOutput.innerHTML = area;
//Use innerHTML for html elements and textContent for text elements. 
// In this case, both radiusOutput and areaOutput are text elements, 
// so we should use textContent instead of innerHTML to update their values.
//I only used innerHTML for me to be familiar with it, but in this case, textContent is more appropriate.