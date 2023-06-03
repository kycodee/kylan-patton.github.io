/**
 * 
 * DATATYPES
 * 
 * 
 * 0) Datatypes are types of data that can be stored in Javascript variables. Once data is stored in
 * variables, you can determine what type it is. There are a lot of datatypes in Javascript. Here is 
 * a list of some of them: 1. String, Number, Boolean, Undefined, Null, Symbol, Object
 * 
 * 1) To determine the datatype of a value, you can use something like the typeOf operator, which
 * returns the type of data of the value tested.
 * 
 * 2) Numbers
 * 
 * 
 * 3) Strings
 * 
 * 
 * 4) Booleans
 * 
 * 
 * 5) Arrays are ordered lists of values that are called elements. These values can be of any data 
 * type. Arrays are surrounded with brackets and the elements are seperated by commas.
 * 
 * 
 * 6) Objects are unordered collections of key-value pairs usually used to list characteristics of a 
 * single person, place, or thing. The key-value pairs are called properties.
 * 
 * 
 * 7) Functions are blocks of code created to perform a particular task. They are created using the
 * keyword 'function' followed by a name and parentheses surrounding a optional parameter. Parameters 
 * are the names listed in the function definition. Once you have defined the function you can write 
 * specific code to be executed inside of the code block.
 * 
 * 
 * 8) Undefined is when a variable hasn't been assigned a value.
 * 
 * 
 * 9) Null is a special value that represents an empty or unknown value.
 * 
 * 10) NaN stands for not-a-number. NaN represents a value that is not a valid number.
 * 
 * 
 * 11) Infinity is a number that represents positive infinty. A number reaches infinty when it exceeds
 * the upper limit for a number.
 * 
 * 
 * 12) -Infinity is a number that represents negative infinty. A number reaches negative infinty when 
 * it exceeds the lower limit for a number.
 * 
 * 
 * 13) Primitive data types refer to a single value. For example: string, number, boolean, undefined,
 * null.
 * 
 * 
 * 14) Complex data types refer to objects that consists of multiple values. For example: objects and
 * arrays. 
 * 
 * 
 * 15) Primitives are copied by VALUE. Primitive values: strings, numbers, booleans, etc – are always 
 * copied “as a whole value”
 * 
 * 16) Complex types are copied by REFERENCE. A variable assigned to a complex data type stores not 
 * the object itself, but its “address in memory” – in other words “a reference” to it.
 */

//Number
// Numbers can be written with or without a decimal and do not need quotation marks surrounding it
var num = 24
console.log(num) // prints 24 to the console

//String
//Strings are written inside single or double quotations and is a series of charcters
var myName = 'Kylan' //string of my first name inside of single quotes
console.log(myName)

//Boolean
//Booleans are usually used in conditional statements and result to either true or false
if(1 < 5){//Since 1 is less than 5, the conditional statement will be true and run the code in the block
    console.log(true)//true(a boolean) will be logged into the console
}


//Array
//An array of software engineer titles is stored in a variable called devTitles.
var devTitles = ['front-end', 'back-end', 'full-stack']
console.log(devTitles) // => ['front-end', 'back-end', 'full-stack'] will be printed to the console

//Object
//An object that describes me is made with the keys: name, age, hometown, birthyear
var mySelf = {
    name: 'Kylan Patton', //name is the [key] and Kylan Patton is the [value]
    age: 21,
    hometown: 'Baton Rouge, LA',
    birthyear: 2001 //2001 is a number, but the value can be of any data type
}
console.log(mySelf) //logs mySelf to the console

//Function
//This is a function named functionOne that takes in 3 parameters.
function functionOne(parameter1, parameter2, parameter3) {
  // code to be executed
  console.log(parameter1) 
}
//Whatever you type in the parentheses when invoking the function will return in the executed code.
functionOne('Tuesday') //the string 'Tuesday will be logged to the console 

//Undefined
//If a variable is declared but not assigned a value, it will be undefined.
var greeting; 
console.log(greeting)// => this returns undefined

//Null
//



//NaN
//



//Infinity and -Infinity
//



//Primitive 
//



//Complex
//



//BY COPY
//



//BY REFERENCE
//

