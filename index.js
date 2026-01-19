let num1 = 8;
let num2 = 2;
let sumEl=document.getElementById ("sum-el");
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add() {
    let sum = num1 + num2;
    sumEl.textContent = "Sum : " + sum;
}

function sub() {
    let sub =num1 - num2;
    sumEl.textContent = "subtract : " + sub;
}

function mul() {
    let mul = num1 * num2;
    sumEl.textContent = "Multiply : " + mul;
}

function div() {
    let div = num1 / num2;
    sumEl.textContent = "divide : " + div;
}
