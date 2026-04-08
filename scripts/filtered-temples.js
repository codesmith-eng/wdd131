//Store the selected elements that we are going to use. 
// This is not required but a good practice with larger programs where the variable will be referenced more than once.
const navigation = document.querySelector(".hero");
const pressbtn = document.querySelector("#menu");

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
pressbtn.addEventListener("click", () => {
    navigation.classList.toggle("show");
    pressbtn.classList.toggle("show");

    const isOpen = navigation.classList.contains("show");
    pressbtn.setAttribute("aria-expanded", isOpen);
});


//gettig the element with the "lastModifed" and using innerHTML syntax to change the date and time it was modified
document.getElementById("lastModified").innerHTML = document.lastModified;

//using the date time function to get the current year and store it in a variable called currentYear
const currentYear = new Date().getFullYear();


//This code get the element with the id "currentyear" and and replace with the current year
document.getElementById("currentyear").textContent = currentYear;



const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Concepcion, Chile",
        location: "Concepcion, Chile",
        dedicated: "2018, October, 28",
        area: 26163,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/concepcion-chile/2018/400x250/01-Concepcion-Chile-Temple-2113673.jpg"
    },
    {
        templeName: "Chicago, Illinois",
        location: "Lake Ave Glenview, Chicago, United States",
        dedicated: "1989, October, 8",
        area: 37062,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/chicago-illinois/400x250/Chicago-Temple-Main_4214.jpg"
    },
    {
        templeName: "Nauvoo, Illinois",
        location: "Nauvoo, Illinois, United States",
        dedicated: "1846, May, 3",
        area: 50000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/400x250/nauvoo-temple-756497-wallpaper.jpg"
    },
    {
        templeName: "Salt, Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 24",
        area: 35508,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
    },
    {
        templeName: "Seoul Korea",
        location: "Sinchon-ro, 7 GIL 21, Seoul",
        dedicated: "1985, December, 15",
        area: 28057,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seoul-korea/400x250/seoul-korea-temple-lds-424784-wallpaper.jpg"
    }
];


createCardTemple(temples);

//Getting the element with the id "home"
const hometemples = document.querySelector("#home");
//Adding and EventListener to the element with the id "home" and using a callback function 
// that calls the createCardTemple function and passes the temples array as an argument to it. 
// This will display all the temples when the "Home" button is clicked.
hometemples.addEventListener("click", () => {
    createCardTemple(temples);
});

//Getting the element with the id "old"
const oldTemples = document.querySelector("#old");
//Adding EventListener to the element with the id "old" and using a callback function 
// that calls the createCardTemple function and passes a filtered version of the temples array as an argument to it. 
// This will display only the temples that were dedicated before year 1900 when the "Old" button is clicked.
oldTemples.addEventListener("click", () => {
    createCardTemple(temples.filter(mytemple => !mytemple.dedicated.includes("2005") && !mytemple.dedicated.includes("2015") && !mytemple.dedicated.includes("2020") && !mytemple.dedicated.includes("1974") && !mytemple.dedicated.includes("1986") && !mytemple.dedicated.includes("1983") && !mytemple.dedicated.includes("2018") && !mytemple.dedicated.includes("1989") && !mytemple.dedicated.includes("1985")));
});

//getting the element with the id "new"
const newTemples = document.querySelector("#new");
//Adding EventListener to the element with the id "new" and using a callback function 
// that calls the createCardTemple function and passes a filtered version of the temples array as an argument to it. 
// This will display only the temples that were dedicated after year 2000 when the "New" button is clicked.
newTemples.addEventListener("click", () => {
    createCardTemple(temples.filter(mytemple => !mytemple.dedicated.includes("1888") && !mytemple.dedicated.includes("1974") && !mytemple.dedicated.includes("1986") && !mytemple.dedicated.includes("1983") && !mytemple.dedicated.includes("1989") && !mytemple.dedicated.includes("1846") && !mytemple.dedicated.includes("1893") && !mytemple.dedicated.includes("1985")));
});

//getting the element with the id "large"
const largeTemples = document.querySelector("#large");
//Adding EventListener to the element with the id "large" and using a callback function 
// that calls the createCardTemple function and passes a filtered version of the temples array as an argument to it. 
// This will display only the temples that have an area greater than 90000 square feet when the "Large" button is clicked.
largeTemples.addEventListener("click", () => {
    createCardTemple(temples.filter(mytemple => mytemple.area > 90000));
});

//getting the element with the id "small"
const smallTemples = document.querySelector("#small");
//Adding EventListener to the element with the id "small" and using a callback function
// that calls the createCardTemple function and passes a filtered version of the temples array as an argument to it. 
// This will display only the temples that have an area less than 10000 square feet when the "Small" button is clicked.
smallTemples.addEventListener("click", () => {
    createCardTemple(temples.filter(mytemple => mytemple.area < 10000));
});

//This function will iterate through the array of temples and create a card for each temple using the data from the array. 
// It will then append the card to the grid-cards div in the HTML.
function createCardTemple(temples) {

    // Clear the grid-cards div before creating new cards to avoid duplicates when filtering
    document.querySelector(".grid-cards").innerHTML = "";
    temples.forEach(mytemple => {

        // Create HTML elements for each temple
        let mycard = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let image = document.createElement("img");

        // taking the content of array of temples and putting it in the HTML elements we created above
        //putting the temple name in the h2 element 
        name.textContent = mytemple.templeName;

        //putting the location in the p element
        location.innerHTML = `<span class ="label">Location:</span> ${mytemple.location}`;

        //putting the dedication date in the p element
        dedication.innerHTML = `<span class ="label">Dedicated On:</span> ${mytemple.dedicated}`;

        //putting the area in the p element
        area.innerHTML = `<span class ="label">Size:</span> ${mytemple.area} sq ft`;

        //putting the image in the img element and setting the alt attribute to the temple name
        image.setAttribute("src", mytemple.imageUrl);
        image.setAttribute("alt", `Image of ${mytemple.templeName}`);
        image.setAttribute("loading", "lazy");

        // Appending the HTML elements as child elementsto the mycard section element
        mycard.appendChild(name);
        mycard.appendChild(location);
        mycard.appendChild(dedication);
        mycard.appendChild(area);
        mycard.appendChild(image);

        // Appending the mycard section element to the #grid-cards div in the HTML
        document.querySelector(".grid-cards").appendChild(mycard);
    });
}


