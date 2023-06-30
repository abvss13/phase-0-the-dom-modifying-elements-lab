const main = document.querySelector('main#main');
main.remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "YOUR-NAME is the champion";c
document.body.appendChild(newHeader);