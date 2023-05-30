//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var objectArr = [];//array that the key values will be added to
    for(var key in object){//for in loop to iterate through the object to access the keys
        objectArr.push(object[key])//adding the key values to the array 
    }
    return objectArr
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(' ')

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var arr = []
    for(var key in object){
        if(typeof object[key] === 'string'){
            arr.push(object[key])
        }
    }
    return arr.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return 'array'
    } else if(typeof collection === 'object'){
        return 'object'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    let stringie = string.replace(string[0], string[0].toUpperCase())
    return stringie
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let newStr = string.split(' ');
  for(var i = 0; i < newStr.length; i++){
     newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1).toLowerCase()
  }
  return newStr.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var namie = object['name'].replace(object['name'][0], object['name'][0].toUpperCase())
    return `Welcome ${namie}!`
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return `${object['name'][0].toUpperCase() + object['name'].slice(1).toLowerCase()} is a ${object['species'][0].toUpperCase() + object['species'].slice(1).toLowerCase()}`
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
  if(object && object.noises){

    
    if(object['noises'].length == 0){
        return 'there are no noises'
    } else if(object['noises'].length > 0){
        return object['noises'].join(' ')
    } 
    
}
    else{
        return 'there are no noises'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {//
    let strArr = string.split(' ')
    for(var i = 0; i < strArr.length; i++){
        if(strArr[i] === word){
            return true
        }
        
    }
    return false
     
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object['friends'].push(name)
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(Array.isArray(object['friends'])){
        for(var i = 0;i < object['friends'].length;i++){
        if(object['friends'][i] === name){
          return true
        } else if(object['friends'][i] != name){

        } 
    } 
    }
    return false
}
    
    


//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, arr) {
//     var newArr = []
//     var leArray = []
// for(var i = 0;i < data.length;i++){
//   leArray.push(data[i].name)
// }
//     for(var i = 0;i < array.length;i++){
//             for(var j = 0;j < array[i].friends.length;j++){
//                 if(array[i].friends[j] !== name){
                   
//                 }
            
//         } 
        
//     }

var nameList = [];
var result = [];
var current = null;
for(var i=0; i<arr.length; i++){
    if(name === arr[i].name){
        current = arr[i];
    }else{
        nameList.push(arr[i].name);
    }
}

if(current === null){
    return nameList;
}

for(var i=0; i<nameList.length; i++){
    if(current.friends.indexOf(nameList[i]) == -1){
        result.push(nameList[i]);
    }
}

return result;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
   if(object[key] === undefined){
    object[key] = value
    return object
   } else if(object[key] !== undefined){
    object[key] = value
    return object
   }
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for(var i = 0; i < array.length;i++){
        if(object[array[i]] !== undefined && array.length > 0){
            delete object[array[i]]
            
        }
    }
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    

    let uniqueChars = [];
    array.forEach((c) => {
        if (!uniqueChars.includes(c)) {
            uniqueChars.push(c);
        }
    });
    return uniqueChars
    
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}