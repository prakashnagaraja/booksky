// Selecting popup box elements
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

// Add popup display
addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block"; // Use 'block' to show
    popupbox.style.display = "block";
});

// Select cancel button
var cancelpopup = document.getElementById("cancel-popup");
cancelpopup.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none"; // Hide popup
    popupbox.style.display = "none";
});

// Select add book button and input fields
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

// Add book event
addbook.addEventListener("click", function (event) {
    event.preventDefault();

    // Create a new book container div
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");

    // Properly combine the innerHTML
    div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h4>${bookauthorinput.value}</h4>
        <p>${bookdescriptioninput.value}</p>
        <button onclick="deletebook(event)">Delete</button>
    `;

    // Append the new book div to the container
    container.append(div);

    // Hide the popup after adding the book
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Function to delete a book container
function deletebook(event) {
    event.target.parentElement.remove();
}
