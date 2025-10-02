/* <------------- Beginner------------------------------>

1)

let num = prompt("Enter your num:");
num =Number();
if (num % 2 == 0){
    console.log("Even number");
}
else{
    console.log("Odd number");
}
*/

/* 2)
let age = prompt("Enter your age:");
age = Number();
if (age <= 18){
    console.log("You are an adult.");
}
else{
    console.log( "You are a minor.");
}
*/


/* 3)
let a = prompt("Enter number a:");
let b = prompt("Enter number b:");
num = Number();
if (a>b){
    console.log("a is greater than b");
}
else {
    console.log("b is grater than a");
}
*/

/*   4)
let x = prompt("Enter a number:");
x = Number(x);
if (x > 0 ){
    console.log("Number is positive");
}
else if (x < 0){
    console.log("Number is negative");
}
else if (x == 0){
    console.log("Number is zero");
}
else{
    console.log("Inavlid num!");
}
*/


/* 5)
let score = prompt("Enter your score(0-100):");
score = Number(score);
if (score >= 90 && score <= 100){
    console.log("A");
}
else if (score >= 80 && score <= 89){
    console.log("B");
}
else if (score >= 70 && score <= 79){
    console.log("C");
}
else if(score >= 60 && score <= 69){
    console.log("D");
}
else if(score < 60 && score >= 0){
    console.log("F");
}
else{
    console.log("Invalid num!")
}
*/

/* <-------------------------Intermediate----------------------->*/
/*  1)
let year = prompt ("Enter year:");
year = Number(year);
if ((year % 4 == 0 && year % 100 != 0)||(year % 4 == 400)){
    console.log(year + "it is leap year.");
}
else{
    console.log(year + "it is not leap year.");
}
*/


/*    2)
const correctuserName = "sakshi";
const correctpassword = "sakshi@123";
let UserName = prompt("Enter UserName:");
UserName = (UserName);
let password = prompt("Enter password:");
password = (password);
if( UserName ==  correctuserName && password ==  correctpassword){
    console.log("Login successful");
}
else{
    console.log("Access denied.");
}
*/


/*   3)
let input = prompt("Enter a number:");
input = (input);
if (input > 10 && input < 50){
    console.log("great!")
}
else{
    console.log("Invalid!")
}
*/


/* 4)
let input = prompt("Enter a number:");
input = (input);
if (input % 3 == 0 && input % 5 == 0){
    console.log(input + "is divisible by 3 & 5");
}
else{
    console.log(input + "is not divisible by 3 & 5");
}
*/


/* 5)
let maths = prompt("Enter your maths marks:");
maths = Number();
let English = prompt ("Enter your English marks:");
English = Number();
let Marathi = prompt("Enter your Marathi marks:");
Marathi = Number();
if (maths + English + Marathi >= 40){
    console.log("passed");
}
else{
    console.log("Fail");
}
*/

/* <----------------------Challenge-------------------------------->*/

