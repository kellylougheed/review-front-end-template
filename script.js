var inputBox = document.querySelector("#inputBox");
var responseDiv = document.querySelector(".response");
var clearButton = document.querySelector("#clearButton");
var vampireCount = 0;

inputBox.addEventListener('input', respond);

clearButton.addEventListener('click', e => {
    responseDiv.innerHTML = "";
});

function respond(e) {
    var val = e.target.value;
    if (val === "Dracula" || val === "dracula") {
        vampire();
        vampireCount++;
    } else if (val === "Beyonce" || val === "beyonce") {
        queen();
    }
}

function vampire() {
    responseDiv.innerHTML = '<img src="https://media.giphy.com/media/upztYklL3VhNm/giphy.gif"/>';
}

function queen() {
    responseDiv.innerHTML = '<img src="https://media.giphy.com/media/11wsZr0jbXc15m/giphy.gif"/>';
}