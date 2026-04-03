//This activity teaches how to handle Document Object Model

//This 1st three variables hold references to the input, button and list elementss
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

//function to retrieve chapter list from local storage
let chaptersArray = getChapterList() || []; //if getChapterList() returns null, use an empty array instead

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value !== '') { //check if the input is not empty
        displayList(input.value); //display the chapter in the list
        chaptersArray.push(input.value); //add the chapter to the array
        setChapterList(); //save the updated chapter list to local storage
        input.value = ''; //clear the input field
        input.focus(); //set focus back to the input field
    }
});


function displayList(item) {
    let li = document.createElement('li'); //create a new list item
    let deletebutton = document.createElement('button'); //create a delete button

    //making inputElement (user input) a list
    li.textContent = item; //set the text of the list item to the chapter name

    deletebutton.textContent = '❌'; //set the text of the delete button

    deletebutton.classList.add('delete'); //add a class to the delete button for styling

    li.append(deletebutton); //append the delete button to the list item

    list.append(li); //append the list item to the unordered list

    deletebutton.addEventListener('click', function () {

        list.removeChild(li); //remove the list item from the unordered list
        deleteChapter(li.textContent); //remove the chapter from the array and update local storage
        input.focus(); //set focus back to the input field
    });
    console.log("Good Job");
}


function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}


function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter); //remove the chapter from the array
    setChapterList(); //update local storage with the new chapter list
}

