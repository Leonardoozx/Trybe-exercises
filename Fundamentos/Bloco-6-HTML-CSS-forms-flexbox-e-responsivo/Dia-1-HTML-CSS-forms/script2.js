const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function preventingLinks(event) {
    event.preventDefault();
}
HREF_LINK.addEventListener('click', preventingLinks);

function preventingChecks(event) {
    event.preventDefault();
}
INPUT_CHECKBOX.addEventListener('click', preventingChecks);

function preventingKeyPress(event) {
    event.preventDefault();
}
INPUT_TEXT.addEventListener("keypress", preventingKeyPress)