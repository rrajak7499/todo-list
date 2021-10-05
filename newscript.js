var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function inputLenght() {
    return input.value.length;
}

function addNewElement() {
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value= "";
}

function addElementAfterClick() {
        if (inputLenght() > 0) {
            addNewElement();
        }
}

function addElementAfterEnter(event) {
        if (inputLenght() > 0 && event.keyCode === 13) {
            addNewElement();
        }
}

button.addEventListener("click", addElementAfterClick);

input.addEventListener("keypress", addElementAfterEnter);