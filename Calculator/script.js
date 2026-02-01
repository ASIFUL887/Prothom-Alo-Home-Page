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
