//This activity teaches how to handle Document Object Model

//This 1st three variables hold references to the input, button and list elementss
const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('#list');

//creating a click event listener with addEventListener 
//This code says what happens if the user enters letters and click button using the mouse
buttonElement.addEventListener('click', function () {

    //check if user entered something. The trim method is used to remove spaces in strings
    //if user input is not strictly to empty space(s)
    if (inputElement.value.trim() !== '') {

        //created a li element that will hold user entry's chapter title and an associated delete button
        const li = document.createElement('li');
        //making inputElement (user input) a list
        li.textContent = inputElement.value;

        //created a delete button and add a click event listener
        const deleteButton = document.createElement('button');
        //setting the delete button's textContent to ❌
        deleteButton.textContent = '❌';
        // The addEventListener if the user clicks the ❌ (delete) button
        deleteButton.addEventListener('click', function () {
            listElement.removeChild(li); //delete input when clicked ❌
            inputElement.focus(); //returns the focus of the user to entry box
        });

        //appending the delete (❌) button to the li element
        li.appendChild(deleteButton);

        //appending the li element variable to the unordered list in your HTML
        listElement.appendChild(li);

        //clear the user input field
        inputElement.value = '';
    }
    //focus the user back to the input field
    inputElement.focus();
});





