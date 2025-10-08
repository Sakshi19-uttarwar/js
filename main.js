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

/*1.
let input3 = prompt("Enter input1:");
let input4 = prompt("Enter input2:");
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
else{
    console.log("Choose the correct operator between ('+', '-' , '*', '/') ");
}
*/

/*2.
let trafficLightColor = prompt("Enter the traffic light color:");
trafficLightColor = trafficLightColor.toLowerCase();
if(trafficLightColor === "red"){
    console.log("Stop");
}
else if(trafficLightColor === "yellow"){
    console.log("Get Ready");
}
else if(trafficLightColor === "green"){
    console.log("Go");
}
else{
    console.log("Invalid input!");
}
*/

/* 3.
let a = prompt("Enter a side of triangle:");
let b = prompt("Enter b side of triangle:");
let c = prompt("Enter c side of triangle:");
if(a === b && b === c){
    console.log("Equilateral Triangle");
}
else if(a === b || b === c || a === c){
    console.log("Isosceles Triangle");
}
else{
    console.log("Scalene Triangle");
}
*/

/* 4.
let day = 4;
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
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default :
        console.log("Invalid day Number");
}
*/


let temp = prompt("Enter temperature in celcius:");
if(temp < 0){
    console.log("Freezing");
}
else if(temp >= 0 && temp <=15){
    console.log("Cold");
}
else if(temp >=16 && temp <= 25){
    console.log("Cool");
}
else if(temp >25){
    console.log("Warm");
}
else{
    console.log("Invalid!");
}


