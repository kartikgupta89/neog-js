// var userName = prompt ('Who are you?');
// alert (userName + ', this script is shit, eh?');

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#txt-output");
// console.log(txtInput.value);

var apiURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
function makeURL (text) {
    return apiURL + "?text=" + text;
}

function clickEventHandler() {
    // console.log("clicked!");
    // console.log(`input ${txtInput.value}`);

    fetch(makeURL(txtInput.value))
        .then(response => response.json())
        .then(json => {outputDiv.innerText = json.contents.translated});
}

btnTranslate.addEventListener("click", clickEventHandler);