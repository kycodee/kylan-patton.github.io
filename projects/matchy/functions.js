/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// declare a function called search that takes in a parameter representing an array of animals and 
//another parameter that represents a string, the name of an animal to do a search on
function search(animals, string){
//loop through the animals array
for(var i = 0; i < animals.length - 1; i++){
//return the animals object if an animal with that name is in the array
if(animals[i].name === string){
    return animals[i]
}  
}
return null
//if the animals name is not in the array, return null

}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare a function called replace that takes in 3 parameters:'animals' an ARRAY of animals, 
//'name' a STRING representing the name of an animal to do a search on, & 'replacement' an OBJECT
//that represents the replacement animal
function replace(animals,name,replacement){
//loop through the animals array
for(var i = 0; i < animals.length; i++){
//if the 'name' exists in the animals array, 
if(name === animals[i].name){
//replace its entire object with the entire replacement object
    return animals[i] = replacement
    //otherwise do nothing
}
}
}




//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare a function called remove that takes two parameters: an array of 'animals'
//and a 'name' that should be a name of a animal to search
function remove(animals,name){
//loop through the 'animals' array to access the indexes of the array
for(var i = 0;i < animals.length; i++){
//if the animal with that 'name' exists, remove that animal
    if(animals[i].name === name){
        animals.splice(i, 1)
    }
}
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare a function called add that takes two parameters:'animals' an array of animals
//'animal' an object representing a new animal to be added
function add(animals,animal){
for(var i = 0;i < animals.length;i++){
//checks if the animal object has a name property with a length greater than 0
//checks if the animal object has a species property with a length greater than 0
if(animal['name'].length > 0 && animal['species'].length > 0 && animal['name'] !== animals[i]['name']){
//if the animal has a unique name, add the new object to the animals array    
     return animals.push(animal) 
}else{//else, do nothing to the animals array
    return animals
}
}
}




/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
