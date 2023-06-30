// Remove the <main> element with id "main"
const mainElement = document.getElementById("main");
mainElement.remove();

// Create a variable named newHeader and assign it the <h1> element with id "victory"
const newHeader = document.createElement("h1");
newHeader.id = "victory";

// Set the text content of the newHeader element
newHeader.textContent = "YOUR-NAME is the champion";

// Append the newHeader element to the document body
document.body.appendChild(newHeader);
