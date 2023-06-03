/**
 * 
 * VARIABLES
 * 
 * 0) Variables in Javascript are containers used for storing data. Once we declare a variable, we 
 * store values in it. Some of the values that we store in variables have different data types, such 
 * as: number, string, array, and boolean.
 * 
 * 1) Declaration and Assignment: Declaring a variable means that you are creating a variable. Once 
 * you create a variable using var, let, or const, you assign it to a variable
 * 
 * 2) Var, Let, Const: These are the 3 key words that you can use to declare a variable. Var keyword 
 * is not used often today but was the only keyword used from 1995 to 2015. Let keyword was introduced
 * in 2015 and is usually used when you believe you'll have to reassign a value later. Const keyword 
 * was also created in 2015 and is used when you have a value that won't be changed in the future.
 * 
 * 3) Hoisting: JavaScript's way of moving all declarations to the top of the current scope.
 * Variables declared using var are hoisted to the top of the global scope and can be used before
 * they are assigned. Variables declared using let or const are only hoisted to the top of the block
 * scope and they can't be used before assignment.
 * 
 * 
 */

//Declaration
// We can declare a variable, but it will not be useful until we assign it
let city;
console.log(city) // prints 'undefined' to the console

//Assignment
// Assignment is the point of storing a value in the variable
city = 'Baton Rouge, LA'
console.log(city) // prints the string 'Baton Rouge, LA' to the console

//Var
// Var is a keyword used to declare a variable the pre-2015 way.
var state = 'Louisiana'
console.log(state) //prints 'Louisiana' to the console

//Let
// Let is a keyword used to declare a variable that may be reassigned.
let school = 'Tulane'
console.log(school) //prints 'Tulane' to the console
if(school === "Tulane"){
    let parish = 'Orleans'
}
console.log(parish)//Since let is block scoped, you will get a ReferenceError: parish is not defined


//Const
// Const is a keyword used to declare a variable that will remain the same. It can not be reassigned
const bootcamp = 'Op Spark'
bootcamp = 'National Coding'
console.log(bootcamp) //returns TypeError: Assignment to constant variable
if(school === "Tulane"){
    const hometown = 'New Orleans'
}
console.log(hometown)//Since const is block scoped, you will get a ReferenceError: hometown is not defined

//Hoisting
//Hoisting is a automatic feauture that Javascript has to place variables at the top of their scope.
console.log(greeting); // => undefined
var greeting = "Hello OpSparker!";


