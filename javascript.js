alert("JavaScript is working!");

var inputOneIsOn = false;
var inputTwoIsOn = false;


function toggleImage() {

    inputOneIsOn = !inputOneIsOn;

    if (inputOneIsOn) {
        document.getElementById("toggleImage").src = "button-on.png";
    } else {
        document.getElementById("toggleImage").src = "button-off.png";
    }
}


function toggleImage2() {

    inputTwoIsOn = !inputTwoIsOn;

    if (inputTwoIsOn) {
        document.getElementById("toggleImage2").src = "button-on.png";
    } else {
        document.getElementById("toggleImage2").src = "button-off.png";
    }
}


function and() {

    if (inputOneIsOn && inputTwoIsOn) {
        document.getElementById("andGate").src = "and2on.png";
    }

    else if (inputOneIsOn && !inputTwoIsOn) {
        document.getElementById("andGate").src = "andonoff.png";
    }

    else if (!inputOneIsOn && inputTwoIsOn) {
        document.getElementById("andGate").src = "andoffon.png";
    }

    else {
        document.getElementById("andGate").src = "and2off.png";
    }
}
