let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sum = document.getElementById("sum-el")

function add(){
    let addition = num1 + num2
    sum.textContent ="Sum:" + addition
}
function subtract(){
    let subtraction = num1 - num2
    sum.textContent = "Sum:" + subtraction
}

function multiply(){
    let multiplication = num1 * num2
    sum.textContent = "Sum:" + multiplication
}

function divide(){
   let division = num1 / num2
   sum.textContent ="Sum:" + division
}

