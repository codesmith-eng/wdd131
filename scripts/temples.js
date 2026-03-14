//Store the selected elements that we are going to use. 
// This is not required but a good practice with larger programs where the variable will be referenced more than once.
const navigation = document.querySelector(".hero");
const pressbtn = document.querySelector("#menu");

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
pressbtn.addEventListener("click", () => {
    navigation.classList.toggle("show");
    pressbtn.classList.toggle("show");
});

//gettig the element with the "lastModifed" and using innerHTML syntax to change the date and time it was modified
document.getElementById("lastModified").innerHTML = document.lastModified;

//using the date time function to get the current year and store it in a variable called currentYear
const currentYear = new Date().getFullYear();


//This code get the element with the id "currentyear" and and replace with the current year
document.getElementById("currentyear").textContent = currentYear;