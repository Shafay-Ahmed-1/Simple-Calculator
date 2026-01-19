let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add() {
    let sum = num1 + num2;
    document.getElementById("sum-el").textContent = "Sum : " + sum;
}

function sub() {
    let sub =num1 - num2;
    document.getElementById("sum-el").textContent = "subtract : " + sub;
}

function mul() {
    let mul = num1 * num2;
    document.getElementById("sum-el").textContent = "Multiply : " + mul;
}

function div() {
    let div = num1 / num2;
    document.getElementById("sum-el").textContent = "divide : " + div;
}
