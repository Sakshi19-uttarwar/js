
// 1. Even or Odd
// Check whether a given number is even or odd.

let num = 4;
if(num % 2 == 0){
    console.log("Even Number");
}
else{
    console.log("Odd Number");
}

// 2. Positive, Negative, or Zero
// Take a number and print if it’s positive, negative, or zero.
let number = 5;
if(number >= 0){
    console.log("Number is positive");
}
else{
    console.log("Number is negative");
}

// 3. Maximum of Two Numbers
//Input two numbers and display which one is larger.
let input1 = 5;
let input2 = 10;
if(input1 > input2){
    console.log("input1 is greater");
}
else{
    console.log("input2 is greater");
}

// 4. Divisible by 5 or Not
// Check if a number is divisible by 5.
let num2 = 15;
if(num2 % 5 == 0){
    console.log("num2 is divisible by 5");
}
else{
    console.log("num2 is not divisible by 5");
}

// 5. Leap Year Checker
// Check whether a given year is a leap year or not.
let year = 2025;
if(year % 4 == 0){
    console.log("leap year");
}
else{
    console.log("Not a leap year");
}

//6. Character Type Checker
// Input a character and check if it’s a vowel, consonant, number, or special symbol.
let char = prompt("Enter a character:");
if(char.length !== 1){
    console.log("Please enter only one character.");
}
else if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')){
    let lowerChar = char.toLowerCase();
    if(lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u'){
        console.log("vowel");
    }
    else{
        console.log("consonant");
    }
}
else if (char >= '0' && char <= '9' ){
    console.log("Digit");
}
else{
    console.log("Special Symbol");
}

//7. Largest of Three Numbers
// Compare three numbers and find the largest.
let num4 = 34;
let num5 = 67;
let num6 = 89;
const value = Math.max(num4,num5, num6);
console.log(value);


// 8. Grade Calculator, Input marks and print grade: 90–100: A ,80–89: B ,70–79: C ,60–69: D ,Below 60: Fail
let marks = 49;
if(marks >= 90 && marks <= 100){
    console.log("A grade");
}
else if (marks >= 80 && marks <= 89){
    console.log("B grade");
}
else if(marks >= 70 && marks <= 79){
    console.log("C grade");
}
else if(marks >= 60 && marks <= 69){
    console.log("D grade");
}else if (marks < 60){
    console.log("Fail");
}else{
    console.log("Invaild number");
}

// 9. Check Voting Eligibility
// Input age; if ≥ 18 → “You can vote”, else “You are a minor”.
let age = 12;
if(age >=18){
    console.log("You can vote");
}
else{
    console.log("You are a minor");
}


//10. Smallest of Three Numbers
// Similar to “largest” but find the smallest.
let num7 = 34;
let num8 = 67;
let num9 = 89;
const value1 = Math.min(num7,num8, num9);
console.log(value1);

//Simple Calculator
// Input two numbers and an operator (+, -, *, /) and perform the operation.
let input3 = 2;
let input4 = 5;
let operator = prompt("Enter operator:");
if(operator == '+'){
    console.log( "sum:", input3 + input4);
}
else if (operator == '-'){
    console.log( "subtraction:", input3 - input4);
}
else if (operator == '/'){
    console.log( "division:", input3 / input4);
}
else if (operator == '*'){
    console.log( "multiplication:", input3 * input4);
}


//12. Check Multiple Conditions
// If a number is both even and greater than 10, print “Valid”, else “Invalid”.
let num11 = 12;
if(num11 % 2 == 0 && num11 > 10){
    console.log("Valid")
}else{
    console.log("Invaild")
}


// 13. Day of the Week (Number to Text)
// Input 1–7, and display the corresponding weekday.
let day = 6;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}


// 14. find last digit of a given number is even or odd.
let digit = 1237;
let lastDigit = digit % 100;
if(lastDigit % 2 == 0){
    console.log("lastdigit of given number is even");
}
else{
    console.log("lastDigit of given number is odd");
}


// 15. find last second digit of a given number is even or odd.
let digit1 = 1234;
let temp = Math.floor(digit1 / 10); 
let secondLastDigit = temp % 10;
if (secondLastDigit % 2 === 0) {
    console.log("Second last digit of given number is even");
} else {
    console.log("Second last digit of given number is odd");
}

