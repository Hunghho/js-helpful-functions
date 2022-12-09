"use strict"

function isOdd(number){
    if (number % 2 !== 0) {
        return "Odd";}
    else {
        return "Even";
    }
}
// This function generates a random number that is both positive and even
function randomPositiveEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 !== 0) {
        return randomPositiveEvenNumber()
    }

    return randomNumber;
}

// this function generates a random number that is both positive and odd
function randomPositiveOddNumber() {
    var randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 === 0) {
        return randomPositiveOddNumber();
    }

    return randomNumber;
}

// this function generates a random number that is both negative and even.
function randomNegativeEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if(randomNumber % 2 === 0) {
        return randomNumber;
    }

    return randomNegativeEvenNumber();
}

// this function generates a random number that is both negative and odd.
function randomNegativeOddNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if(randomNumber % 2 === 0) {
        return randomNegativeOddNumber();
    }

    return randomNumber;
}
function isNumeric(input) { /// this function turn a numeric strick into a number value
    return !isNaN(parseFloat(input));
}

function isEven(number){
    if (number % 2 == 0) {
        return "Even"; }
    else {
        return "Odd";
    }
}

function identity(input){
    //that returns the input exactly as provided
    return input === input;
}

function isFive(input){
    if (input == 5){
        return "is five";
    } else {
        return "is not five";
    }
}

function addFive(input){
    //that adds five to some input
    return input + 5;
}

function isMultipleOfFive(input){
    return input * 5;
}

function isThree(input){
    return input === 3;
}

function isMultipleOfThree(input){
    return input * 3;
}

function isMultipleOfThreeAndFive(input){
    let isMultipleOfThree = input.toString() * 3;
    let isMultipleOfFive = isMultipleOfThree * 5;
    return isMultipleOfFive;
}

function isMultipleOf(target, n){
    //which checks if target is evenly divisible by n
    target.toString()
    n.toString()
    let evenlyDivisible = target % n === 0;
    return evenlyDivisible;
}

function isTrue(boolean){
    return typeof boolean == "boolean";
}

function isFalse(boolean){
    return typeof boolean !== "boolean";
}

function sTruthy(input){
    //remember that values other than true will behave like true
    if (input){
        return true;
    } else {
        return false;
    }
}

function isFalsy(input){
    //remember that values other than false behave like false
    if (!input){
        return true;
    } else {
        return false;
    }
}

function isVowel(letter){
    letter.toLowerCase();
    if (letter === "a" | "e" | "i" | "o" | "u"){
        return "is Vowel";
    } else {
        return "not Vowel";
    }
}

function isConsonant(letter){
    letter.toLowerCase()
    if (letter !== "a" | "e" | "i" | "o" | "u"){
        return "is a consonant";
    } else {
        return "is not a consonant";
    }
}

// .toLocaleString('en-US', {style:'currency', currency: 'USD'}) to perform US currency