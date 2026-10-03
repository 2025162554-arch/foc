var inputOneIsOn = false;
var inputTwoIsOn = false;


function toggleImage() {
    var imgElement = document.getElementById('toggleImage');

    if (inputOneIsOn == false) {
        imgElement.src = "https://www.iconsdb.com/icons/preview/green/button-on-xxl.png";
    } else {
        imgElement.src = "https://www.iconsdb.com/icons/preview/red/button-off-xxl.png";
    }
}


function toggleImage2() {
    var imgElement = document.getElementById('toggleImage2');

    if (inputTwoIsOn == false) {
        imgElement.src = "https://www.iconsdb.com/icons/preview/green/button-on-xxl.png";
    } else {
        imgElement.src = "https://www.iconsdb.com/icons/preview/red/button-off-xxl.png";
    }
}


function toggleInputOne() {
    inputOneIsOn = !inputOneIsOn;
}


function toggleInputTwo() {
    inputTwoIsOn = !inputTwoIsOn;
}


function and() {

    if (inputOneIsOn && inputTwoIsOn) {
        document.getElementById('andGate').src = 'and2on.png';
    }

    else if (!inputOneIsOn && inputTwoIsOn) {
        document.getElementById('andGate').src = 'andoffon.PNG';
    }

    else if (inputOneIsOn && !inputTwoIsOn) {
        document.getElementById('andGate').src = 'andonoff.PNG';
    }

    else {
        document.getElementById('andGate').src = 'and2off.PNG';
    }
}
