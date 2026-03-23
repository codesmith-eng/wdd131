//getting the element with the "lastModifed" and using innerHTML syntax to change the date and time it was modified
//The document.lastModified is a property that returns the date and time when the document was last modified. By using innerHTML, we can display this information on the webpage. This is useful for users to know when the content was last updated.
document.getElementById("lastModified").innerHTML = document.lastModified


//using the date time function to get the current year and store it in a variable called currentYear
const currentYear = new Date().getFullYear()

//This code get the element with the id "currentyear" and replace with the current year
document.getElementById("currentyear").innerHTML = currentYear;



//Parameters and its values for calculating windchill
const tempC = 30;
const windKmh = 20;

function calculateWindChill(tempC, windKmh) {
    return tempC <= 10 && windKmh > 4.8
        ? 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16)
        : "N/A";
}
//function explanations 👇
//function calculateWindChill(tempC, windKmh) - name of function and its parameters
//return tempC <= 10 && windKmh > 4.8. The "&&" is a conditional statement that says both conditions must be true for calculation to happen
//13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16). calculating windchill from its formula
//The "?" is a mini if statements  
//If tempC <= 10 && windKmh > 4.8 is false, no calculation will happen and the result will be "N/A"


//Passing the result to the html with the id="wind"
document.getElementById("wind").innerHTML = calculateWindChill(tempC, windKmh);