let result = document.getElementById("result");
let history = document.getElementById("history");

function append(value) {
    if (result.innerText === "0") {
        result.innerText = value;
    } else {
        result.innerText += value;
    }
}

function clearAll() {
    result.innerText = "0";
    history.innerText = "";
}

function clearOne() {
    result.innerText = "0";
}

function backspace() {
    result.innerText = result.innerText.slice(0, -1);
    if (result.innerText === "") {
        result.innerText = "0";
    }
}

function calculate() {
    try {
        history.innerText = result.innerText;
        result.innerText = eval(result.innerText);
    } catch {
        result.innerText = "Error";
    }
}

function cToF() {
    let c = parseFloat(result.innerText);
    let f = (c * 9 / 5) + 32;
    history.innerText = c + " °C";
    result.innerText = f.toFixed(2);
}

function cToK() {
    let c = parseFloat(result.innerText);
    let k = c + 273.15;
    history.innerText = c + " °C";
    result.innerText = k.toFixed(2);
}

function fToC() {
    let f = parseFloat(result.innerText);
    let c = (f - 32) * 5 / 9;
    history.innerText = f + " °F";
    result.innerText = c.toFixed(2);
}


