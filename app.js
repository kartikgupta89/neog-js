var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#txt-output");

var apiURL = "https://api.funtranslations.com/translate/shakespeare.json";

function makeURL(text) {
    return apiURL + "?text=" + text;
}

function clickEventHandler() {
    fetch(makeURL(txtInput.value))
        .then(response => response.json())
        .then(json => {
            outputDiv.innerText = json.contents.translated
        });
}

btnTranslate.addEventListener("click", clickEventHandler);