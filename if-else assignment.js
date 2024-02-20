// 1. Check if a number is odd or even in JavaScript. 

// let num = Number(prompt('Entre the Number'));
// if (Number / 2 == 0) {
//     alert('Hence the given Number is Even')
// }else {
//     alert('Given Number is Odd')
// }

// 2. Find the largest and smallest of two number.

// let a = Number(prompt('Entre First Number'));
// let b = Number(prompt('Entre Second Number'))
// if (a > b) { 
//     alert(a +' is largest number and '+ b +" is smallest ")
// }else {
//     alert( b +' is largest number and ' + a +' is smallest number ')
// }


// 3. Find the largest and smallest of three number

// let a = Number(prompt('entre first number'));
// let b = Number(prompt('entre second number'))
// let c = Number(prompt('entre third number'));

// // Find the largest among three numbers
// if (a > b , a > c) {
//     let largest = a;
// } else if (b > a , b > c) {
//      let largest = b;
// } else {
//     let largest = c;
// }

// // Find the smallest among three numbers
// if (a < b && a < c) {
//     let  smallest = a;
// } else if (b < a ,b < c) {
//     let  smallest = b;
// } else {
//      let smallest = c;
// }

// console.log("Largest: " + largest);
// console.log("Smallest: " + smallest);


// 4. Check if a triangle is equilateral, scalene, or isosceles


// let firstSideOfTriangle = 1;
// let secondSideOfTriangle = 1000; 
// let thirdSideOfTriangle = 10;

// if ( firstSideOfTriangle === secondSideOfTriangle  && secondSideOfTriangle === thirdSideOfTriangle ) {
//    console.log("Given triangle is equilateral triangle")
// } else if (firstSideOfTriangle !== secondSideOfTriangle && secondSideOfTriangle !== thirdSideOfTriangle && firstSideOfTriangle !== thirdSideOfTriangle ) {
//    console.log("Given triangle is scalene triangle")
// } else {
//    console.log("Given triangle is isoceles triangle")
// }

// 5.   Find that a given number is present in given range or not.

// let givenNumber = 1000;
// let lowerLimit = 1;
// let upperLimit = 100;
 
// if ( givenNumber >= lowerLimit && givenNumber <= upperLimit){
//    console.log(givenNumber + ' is in the range. ')
// } else {
//    console.log(givenNumber + ' is not in the range.')
// }

// 6.   Perform arithmetic operations on two numbers

// 7. Check if a year is leap year or not

// let year = Number(prompt('Enter year'));
// if (year % 4 === 0 && year % 100 !==0  || year % 400 ===0){
// console.log('its a leep year ')
// }else {
//    console.log('its not a leep year')
// }


// 8. Find the grade for input marks for five subjects

// console.log("first")

// let englishMarks = 100;
// let hindiMarks = 100;
// let mathsMarks = 100;
// let scienceMarks = 100;
// let socialScienceMarks = 1;



//  let totalMarks = englishMarks + hindiMarks + mathsMarks +scienceMarks + socialScienceMarks ;
 
//  if (totalMarks > 500){
//       console.log('Marks is not valid')
//    }else {
//       console.log('your total marks is ' + totalMarks)
   
      
//  if ( totalMarks >= 450 ){
//    console.log('you have obtained grade A')
// } else if ( totalMarks >= 400){
//    console.log('you have obtained grade B')
// } else if (totalMarks >=350){
//    console.log('you have obtained grade C')
// }else if (totalMarks >=300){
//    console.log('you have obtained grade D')
// }else if (totalMarks <300){
//    console.log('you have obtained grade E')
// }else if (totalMarks > 500 ){
//    console.log('Number is nit valid')
// }
// }


// 9.  Find number of days in a given month

// let month = prompt('Enter month');

// if (month === 'january' || month === 'march' || month === 'may' || month === 'july' || month === 'august' || month === 'october' || month === 'december') {
//     console.log(month + " has 31 days");
// } 
// else if (month === 'april' || month === 'june' || month === 'september' || month === 'november') {
//     console.log(month + " has 30 days");
// } 
// else if (month === 'february') {
//     console.log(month + " has 28 or 29 days");
// } 
// else {
//     console.log("Invalid month");
// }

// 10.check whether the number is positive, negative or zero.

// let num = prompt("Ente the number")
// if ( num < 0 ){
//   console.log(num + " is negative")
// }else if (num > 0 ){
//   console.log(num + " is positive")
// }else console.log(num + " is zero")

// 11. Check if input variable is a number or not (you can use isNaN() method in the conditions)

// let userInput = "123"; 
// if (isNumber(userInput)) {
//   console.log(`${userInput} is a number.`);
// } else {
//   console.log(`${userInput} is not a number.`);
// }

// 12.Write a JavaScript program to check if a number is divisible by 3, 5, or 7.

// let inputNumber = 15; 

// if (inputNumber % 3 === 0) {
//     console.log(`${inputNumber} is divisible by 3.`);
// }if (inputNumber % 5 === 0) {
//     console.log(`${inputNumber} is divisible by 5.`);
// }if (inputNumber % 7 === 0) {
//     console.log(`${inputNumber} is divisible by 7.`);
// }if (inputNumber % 3 !== 0 && inputNumber % 5 !== 0 && inputNumber % 7 !== 0) {
//     console.log(`${inputNumber} is not divisible by 3, 5, or 7.`);
// }