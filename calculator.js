"use strict";
console.log("calculator.js");


// Perform Function button listeners
document.getElementById("btn-div").addEventListener("click", function() {
    calculate(divide)});

document.getElementById("btn-multi").addEventListener("click", function() {
    calculate(multiply)});

document.getElementById("btn-sub").addEventListener("click", function() {
    calculate(subtract)});
 
document.getElementById("btn-add").addEventListener("click", function() {
    calculate(addition)});


let answer = 0;


// Mathematical Functions
// Create a function that divides two numbers passed in as arguments. Return the quotient.
function divide() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    answer = parseInt(a) / parseInt(b);
} 

// Create a function that multiplies two numbers passed in as arguments. Return the product.
function multiply() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    answer = parseInt(a) * parseInt(b);
}

// Create a function that subtracts two numbers passed in as arguments. Return the difference.
function subtract() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    answer = parseInt(a) - parseInt(b);
}

// Create a function that adds two numbers passed in as arguments. Return the sum.
function addition() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    answer = parseInt(a) + parseInt(b);
}

/*
Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

Return the value of the operation.
*/

function calculate(operation) {
    operation();
    document.getElementById("answer").value = answer.toFixed(2);
}


// Script to test whether button is linked correctly to JS
// document.getElementById("btn-div").addEventListener("click", function(event) {console.log("event", event)});