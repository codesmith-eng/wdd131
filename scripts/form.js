//getting the element with the "lastModifed" and using innerHTML syntax to change the date and time it was modified
//The document.lastModified is a property that returns the date and time when the document was last modified. By using innerHTML, we can display this information on the webpage. This is useful for users to know when the content was last updated.
document.getElementById("lastModified").innerHTML = document.lastModified


//using the date time function to get the current year and store it in a variable called currentYear
const currentYear = new Date().getFullYear()

//This code get the element with the id "currentyear" and replace with the current year
document.getElementById("currentyear").innerHTML = currentYear;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

//get the element with the id "product" and store it in a variable called select
const selectElement = document.getElementById("product");

//check if the select element exists to protect it from interacting with other sections of code which may cause error
if (selectElement) {
    //function to loop through the products array and create an option element for each product, 
    // set the value and text content of the option element, and append it to the select element

    products.forEach(product => {
        //create an option element for each product
        let productName = document.createElement("option");

        //set the product id as the value of the option element
        productName.value = product.id;

        //set the products name as the content of the option element
        productName.innerHTML = `${product.name}`;

        //append the option element to the select element
        selectElement.appendChild(productName);
    });
}



//get the element with the class "click" and "today" and store it in a variable called submitClick and timeStamp
const submitClick = document.querySelector(".click");
const timeStamp = document.querySelector(".today");
//check if the submitClick element exists to protect it from interacting with other sections of code which may cause error
if (submitClick) {
    //creating a local storage variable to count the number of visits to the site, if there is no value in local storage, 
    // it will default to 0
    let siteVisits = Number(window.localStorage.getItem("countVisit", "time")) || 0;

    //if the siteVisits variable is not equal to 0, it will display the number of visits, otherwise it will display an empty string
    if (siteVisits !== 0) {
        submitClick.textContent = siteVisits;
    } else {
        submitClick.textContent = ` `;
    }

    //increment the siteVisits variable by 1
    siteVisits++;

    //store the new value of siteVisits in local storage with the key "countVisit"
    localStorage.setItem("countVisit", siteVisits);

    localStorage.setItem("time", Date.now());
}
