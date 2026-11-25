

let res = document.getElementById("result");

function add() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    res.innerHTML = "Sum:" + (a + b);
}

function subtract() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    res.innerHTML = "Difference:" + (a - b);
}

function multiply() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    res.innerHTML = "Product:" + (a * b);
}

function divide() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    if (b === 0) {
        alert("Cannot divide by zero");
    }
    else {
        res.innerHTML = "Quotient:" + (a / b);
    }
}

function clearCalculator() {
    res.innerHTML = "Result:";
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

}