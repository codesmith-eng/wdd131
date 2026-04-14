//Store the selected elements that we are going to use. 
// This is not required but a good practice with larger programs where the variable will be referenced more than once.
const navigation = document.querySelector(".hamb");
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

//function for looping through the objects Ourservices
function populateServices(selectElement, servicesArray) {
    // Loop through each service object in the services array
    servicesArray.forEach(service => {
        // Create a new <option> element for the dropdown
        const option = document.createElement("option");

        // Set the value attribute of the option to the service id
        option.value = service.id;
        // Set the visible text of the option to the service name
        option.textContent = service.name;
        // Add the option to the select dropdown
        selectElement.appendChild(option);
    });
}

const Ourservices = [
    {
        id: "value-one",
        name: "Study, Work & Migration"
    },
    {
        id: "value-two",
        name: "Visa & Travel Documentation"
    },
    {
        id: "value-three",
        name: "Flight Bookings"
    },
    {
        id: "value-four",
        name: "Business & Corporate Travel"
    },
    {
        id: "value-five",
        name: "Travel Consultation"
    },
    {
        id: "value-six",
        name: "Charter & Luxury Travel"
    },
    {
        id: "value-seven",
        name: "Vacation & Tour Packages"
    },
    {
        id: "value-eight",
        name: "Hotel Bookings & Reservations"
    },
    {
        id: "value-nine",
        name: "Religious & Spiritual Pilgrimage Trips"
    }
];

//get the element with the id "service" and store it in a variable called select
const selectElement = document.getElementById("support");


//check if the select element exists to protect it from interacting with other sections of code which may cause error
if (selectElement) {
    populateServices(selectElement, Ourservices);
}


//get the element with the class "click" and "today" and store it in a variable called submitClick and timeStamp
const submitClick = document.querySelector(".clickbutton");
const timeStamp = document.querySelector(".todaydate");
//check if the submitClick variable exists to protect it from interacting with other sections of code which may cause error
if (submitClick) {
    //creating a local storage variable to count the number of visits to the site, if there is no value in local storage, 
    // it will default to 0
    let siteVisits = Number(window.localStorage.getItem("homeVisit", "hometime")) || 0;

    //if the siteVisits variable is not equal to 0, it will display the number of visits, otherwise it will display an empty string
    if (siteVisits !== 0) {
        submitClick.textContent = siteVisits;
    } else {
        submitClick.textContent = ` `;
    }

    //increment the siteVisits variable by 1
    siteVisits++;

    //store the new value of siteVisits in local storage with the key "countVisit"
    localStorage.setItem("homeVisit", siteVisits);

    //store the the date of the visit to local storage
    localStorage.setItem("hometime", Date.now());
}

//get the element with the class "appointdate" and "appointdate" and store it in a variable called Appointtime and Appointbutton
const Appointtime = document.querySelector(".appointdate");
const Appointbutton = document.querySelector(".appointclick");

//check if the Appointtime variable exists to protect it from interacting with other sections of code which may cause error
if (Appointtime) {
    //creating a local storage variable to count the number of visits to the site, if there is no value in local storage, 
    // it will default to 0
    let AppointVisits = Number(window.localStorage.getItem("confirmappoint", "confirmdate")) || 0;

    //if the AppointVisits variable is not equal to 0, it will display the number of visits, otherwise it will display an empty string
    if (AppointVisits !== 0) {
        Appointtime.textContent = AppointVisits;
    } else {
        Appointtime.textContent = ` `;
    }

    //increment the AppointVisits variable by 1
    AppointVisits++;

    //store the new value of siteVisits in local storage with the key "AppointVisits"
    localStorage.setItem("confirmappoint", AppointVisits);

    //storing the date of the visit to the local storage
    localStorage.setItem("confirmdate", Date.now());
}



//getting the images 
const Usone = document.querySelector(".expand-ten img");
const Ustwo = document.querySelector(".expand-eleven img");
const Canone = document.querySelector(".expand-six img");
const Cantwo = document.querySelector(".expand-three img");
const Eurone = document.querySelector(".expand-four img");
const Eurtwo = document.querySelector(".expand-five img");
const Asiaone = document.querySelector(".expand-two img");
const Asiatwo = document.querySelector(".expand-seven img");
const Afrione = document.querySelector(".expand-eight img");
const Afritwo = document.querySelector(".expand-ni img");
const Afrithree = document.querySelector(".expand-one img");

//putting the images in array
const Pictures = [Usone, Ustwo, Canone, Cantwo, Eurone, Eurtwo, Asiaone, Asiatwo, Afrione, Afritwo, Afrithree];

//getting the nav buttons 
const All = document.querySelector("#all");
const Usa = document.querySelector("#usa");
const Canada = document.querySelector("#canada");
const Europe = document.querySelector("#europe");
const Asia = document.querySelector("#asia");
const Africa = document.querySelector("#africa");

//creating a filtering function to filter the images
function showFiltered(filterFunction) {
    const filtered = Pictures.filter(filterFunction);

    Pictures.forEach(img => {
        img.parentElement.style.display = "none";
    });

    filtered.forEach(img => {
        img.parentElement.style.display = "block";
    });
}


//connecting buttons to images to filter them
//Displaying all pictures
if (All) {
    All.addEventListener("click", (e) => {
        //The e.preventDefault() Prevent the href="#" from taking the page to top of the page
        e.preventDefault();

        Pictures.forEach(img => {
            img.parentElement.style.display = "block";
        });
    });
}

//button for filtering usa pictures
if (Usa) {
    Usa.addEventListener("click", (e) => {
        //The e.preventDefault() Prevent the href="#" from taking the page to top of the page
        e.preventDefault();
        showFiltered(img => img === Usone || img === Ustwo);
    });
}


//button for filtering canada pictures
if (Canada) {
    Canada.addEventListener("click", (e) => {
        //The e.preventDefault() Prevent the href="#" from taking the page to top of the page
        e.preventDefault();
        showFiltered(img => img === Canone || img === Cantwo);
    });
}

//button for filtering europe pictures
if (Europe) {
    Europe.addEventListener("click", (e) => {
        //The e.preventDefault() Prevent the href="#" from taking the page to top of the page
        e.preventDefault();
        showFiltered(img => img === Eurone || img === Eurtwo);
    });
}

//button for filtering Asia pictures
if (Asia) {
    Asia.addEventListener("click", (e) => {
        //The e.preventDefault() Prevent the href="#" from taking the page to top of the page
        e.preventDefault();
        showFiltered(img => img === Asiaone || img === Asiatwo);
    });
}


//button for filtering Africa pictures
if (Africa) {
    Africa.addEventListener("click", (e) => {
        //The e.preventDefault() Prevent the href="#" from taking the page to top of the page
        e.preventDefault();
        showFiltered(img => img === Afrione || img === Afritwo || img === Afrithree);
    });
}


