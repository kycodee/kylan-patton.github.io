/**
 * 
 * OPERATORS
 * 
 * 
 * 0) An operator performs an operation on a single or multiple operands and produces a 
 * result. They can be used to do things like perform mathematic operations or add strings to other
 * strings.
 * 
 * 1) ASSIGNMENT OPERATORS
 *   Assignment operators assign values to variables without having to use all of the characters
 *   normally used in the assignment of a value.
 * 
 * 
 * 2) ARITHMETIC OPERATORS
 *   Arithmetic operators are used to perform mathematical operations between numeric operands.
 * 
 * 
 * 3) COMPARISON OPERATOR
 *   Comparison operators compare two operands and return a boolean value(true or false).
 * 
 * 
 * 4) LOGICAL OPERATORS
 *   Logical operators are used to combine two or more conditions to be tested and return a boolean.
 * 
 * 
 * 5) UNARY OPERATORS
 *   A unary operation is an operation with only one operand. This operand comes either before or 
 *   after the operator. For instance, the NOT operator(!) comes before a operand and returns true
 *   if the operand is equals false.
 * 
 * 
 * 6) TERNARY OPERATORS
 *   Ternary operators assign a value to a variable based on some condition and is the 
 *   short form of the if else condition.
 * 
 * 
 */

//ASSIGNMENT OPERATORS
// = Equal Assignment Operator
//Assigns a value to a variable
let age = 21 // the number 21 is assigned to the variable age
console.log(age) //=> 21 is printed to the console

// += Addition Assignment Operator 
//Adds a value to a variable
age += 5 // 5 is added to 21 and the result is assigned to the variable 'age'
console.log(age) // => prints 26 to the console

// -= Subtraction Assignment Operator
//Subtracts a value from a variable
age -= 3 // 3 is subtracted from 26 and the result is assigned to the variable 'age'
console.log(age) // => prints 23 to the console


// *= Multiplication Assignment Operator
//Multiplies a variable 
age *= 2 // 23 is multiplied by 2 and the result is assigned to the variable 'age'
console.log(age) // => prints 46 to the console

// /= Division Assignment Operator
//Divides a variable by a number
age /= 4 // 46 is divided by 4 and the reseult is assigned to the variable 'age'
console.log(age) // => prints 11.5 to the console

// %= Remainder Assignment Operator
//Assigns a remainder to a variable
age %= 2 // age is divided by 2 and the remainder is assigned to the variable 'age'
console.log(age) // => prints 1.5 to the console

// **= Exponentiation Assignment Operator 
//Raises a variable to the power of the operand.
let size = 10
size **= 2 // 10 is raised to the second(2) power and the result is assigned to the variable 'size'
console.log(size) // => prints 100 to the console



//ARITHMETIC OPERATORS
// +    Addition
//Addition Operator adds numbers(or values)
let x = 21 + 9 // 9 was added to 21 using the addition operator(+)
console.log(x) // => prints 30 to the console


// -	Subtraction
//The subtraction operator subtracts numbers
let a = x - 5 // x equals 30 and 5 is subtracted from it using the subtraction operator(-)
console.log(a) // => prints 25 to the console

// *	Multiplication
//The multiplication operator divides numbers
let b = a * 2 // a equals 25 and is multiplied by 2 using the multiplication operator(*)
console.log(b) // => prints 25 to the console



// **	Exponentiation 
//The exponentiation operator raises the first operand to the power of the second operand.
let year = 23 ** 2  // the exponentiation operator raises 23 to the second power
console.log(year) // => prints 529 to the console


// /	Division
//The division operator divides numbers
let teamPlayers = 24 / 2 // 24 is divided by two using the division operator
console.log(teamPlayers) // => prints 12 to the console


// %	Remainder
//The remainder operator returns the division remainder
let d = 5 
let e = 2
let f = d % e // 2 is placed into 5 however many times it can be an the leftover number is assigned to f
console.log(f) // => prints 1 to the console

// ++	Increment
//The increment operator increases numbers by 1
d++ // d is equal to 5 and the increment operator increases it by 1
console.log(d) // => prints 6 to the console


// --	Decrement
//The decrement operator decreases numbers by 1
e++ // e is equal to 2 and the decrement operator decreases it by 1
console.log(e) // => prints 1 to the console


//COMPARISON OPERATORS
// ==	equal to
//Equal returns true if the operands are equal and false if they are not
let birthDate = 0806
birthDate == '0806' // returns true since the values are equal

// ===	equal value and equal type
//Strictly equal to returns true if the operands are equal AND of the same type
birthDate === '0806' // returns false since the values are equal but the type isn't 


// !=	not equal
//Not equal to compares two values and returns true if they are not equal
birthDate != 0807 // returns true because birthDate equals 0806 and it is being compared to 0807


// !==	not equal value or not equal type
//Strictly not equal to compares two values to see if they are equal but of different type or
// not equal at all
birthDate !== '0806' //returns 


// >	greater than
//Greater than operator returns true if the left value is greater than the right value


// <	less than
//Less than operator returns true if the left value is less than the right value



// >=	greater than or equal to
//Greater than or equal to returns true if the left operand is greater than or equal to the 
// right operand



// <=	less than or equal to
//Less than or equal to returns true if the less operand is less than or equal to the right operand



//LOGICAL OPERATORS
// &&	AND
//AND Operator returns true if more than one comparison operation equation is tested and all return true



// ||	OR
//OR Operator returns true if atleast one of the comparison operator equations return true




//UNARY OPERATORS
// !	NOT
//NOT Operator reverse the boolean result of the operand(or condition).




//TERNARY OPERATOR
//Begins with a conditional expression followed by ? The following part will be executed if
// the condition is true : If the conditional expression returns false the last part will be
//  executed
// 