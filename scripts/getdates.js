//This code gets the current date and time of editing the html page and displays it
document.getElementById("lastModified").innerHTML = document.lastModified;


//This line of code gets the current year in the system and and store it in the constant variable named "currentYear"
const currentYear = new Date().getFullYear();


//This code display the current year 
document.getElementById("currentyear").textContent = currentYear;