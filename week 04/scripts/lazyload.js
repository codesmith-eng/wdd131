//getting the element with the "lastModifed" and using innerHTML syntax to change the date and time it was modified
//The document.lastModified is a property that returns the date and time when the document was last modified. By using innerHTML, we can display this information on the webpage. This is useful for users to know when the content was last updated.
document.getElementById("lastModified").innerHTML = document.lastModified


//using the date time function to get the current year and store it in a variable called currentYear
const currentYear = new Date().getFullYear()

//This code get the element with the id "currentyear" and replace with the current year
document.getElementById("currentyear").innerHTML = currentYear;
