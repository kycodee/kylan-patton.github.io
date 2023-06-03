/**
 * 
 * STRING MANIPULATION
 * 
 * 0) Strings in Javascript are a type of data that contains characters and is stored inside of a 
 * variable. They can be manipulated by using operators or methods.
 * 
 * 1) String manipulation with operators can be done by using operators, such as (+) to add strings
 * together to make new strings.
 * 
 * 2) String manipulation with methods can be done by adding a period and a 'method' to the end of 
 * the variable that a string is stored in.
 * 
 * 
 * 
 */

//STRING MANIPULATION WITH OPERATORS

// String Concatenation
//The concatenation operator(+) concatenates two or more string values together and returns a new 
//string where all strings are joined into one




//STRING MANIPULATION WITH METHODS

// String length
//String .length returns the length of a string
var name1 = 'Ky'
console.log(name1) // => logs 2 to the console

// String slice()
//String.slice() extracts a part of a string and returns the extracted part in a new string
var lastName = 'Patton'
let lastNameCut = lastName.slice(1)
console.log(lastNameCut) // => logs 'atton' to the console after removing the first character from 
//the lastName string and keeping the rest of the characters.

// String toUpperCase()
//toUpperCase() is a method used to uppercase a specific string
let lastCapped = lastName.toUpperCase()
console.log(lastCapped) // => logs 'PATTON' to the console

// String toLowerCase()
//toLowerCase() is a method used to lowercase a specific string
let lastLowered = lastName.toLowerCase()
console.log(lastLowered)// => logs 'patton' to the console


