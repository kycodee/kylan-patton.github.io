// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
// 'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
   _.identity = function(value){
    return value
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
    if(typeof value !== 'object'){
        return typeof value
    } else if(value == null){
        return 'null'
    } else if(Array.isArray(value)){
        return 'array'
    } else{
        return 'object'
    }
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number){
    var output = []
    if(Array.isArray(array) === false || number < 0){
        return []
    } else if(number === undefined || number === NaN){
        return array[0]
    } else if(number >= array.length){
        return array
    }
        for(var i = 0; i < array.length; i++){
            if(number < array.length){
                array.length = number
            }
            output.push(array[i])
        }return output
        
    }
    
    

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number){
    // if(Array.isArray(array) !== true || number < 0){
    //     return []
    // } else if(number === undefined || number === NaN){
    //     return array[array.length - 1]
    // } else if(number > array.length){
    //     return array
    // }
    // var output = []
    // for(var i = array.length; i > number; i--){
    //     output.push(array[i])
    // }
    // output.reverse()
    // return output
    var outie = number * -1
  
    if(Array.isArray(array) !== true || number < 0){
        return []
    } else if(number === undefined || number === NaN){
        return array[array.length - 1]
    } else if(number > array.length){
        return array
    } return array.slice(outie)
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
    function valName(val){
        return val === value //'c'
    }
    return array.findIndex(valName)
    // for(var i = 0; i < array.length;i++){
    //     if(value === value[i]){
    //       function findVal(val3){
    //         return val3 === value
    //       }  
    //       var determine = array.findIndex(findVal)
            
    //       return determine
    //     } else if(value !== array[i]){
    //          return -1
    //       }  
    //   }
}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
    for(var i = 0; i < array.length; i++){
         if(value === array[i] && value !== undefined){
            return true
         } 
    
} return false
// for(var i = 0; i < array.length; i++){
//      return value !== undefined && value === array[i] && array.length > 0 ? true 
//      : false
     
// } 
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, func){
    if(Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++){
            func(collection[i],i,collection)
        }
    } else if(typeof collection === 'object' && !Array.isArray(collection) && collection != null){
        for(var key in collection){
            func(collection[key],key,collection)
        }
    }
}




/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){
    let output = [];//create an out array
    //loop over the array
    for(let i = 0; i < array.length; i++){
    if (_.indexOf(output, array[i]) === -1 ){
        output.push(array[i]);
        
    }
}   return output;
}
    
    
function isEven(num) {
    //what if the number passed in is a negative number?
    if(num < 0){
      num = Math.abs(num);
    }
    if(num === 0){
      return true;
    }
    if (num === 1){
      return false;
    }//in all other cases apply isEven to n - 2
    return isEven(num - 2);
    
    }

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array,func){
    //call function for each element in array
    let result = []
   for(var i = 0; i < array.length; i++){
    func(array[i],i,array)
        if(func(array[i],i,array) === true){
            result.push(array[i])
            
        }
    }return result
  }
   

     
    


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array,func){
    let result = []
    for(var i = 0; i < array.length;i++){
        func(array[i],i,array)
        if(func(array[i],i,array) === false){
            result.push(array[i])
        }
    }return result
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array,func){
    let result = [[],[]]
    for(var i = 0; i < array.length;i++){
        func(array[i],i,array)
        if(func(array[i],i,array) === true){
            result[0].push(array[i])
        }else if(func(array[i],i,array) === false){
            result[1].push(array[i])
        }
    }return result
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection,func){
    let result = []
    let result2 = []
    for(var i = 0; i < collection.length;i++){
        if(Array.isArray(collection)){
            func(collection[i],i,collection)
            result.push(func(collection[i],i,collection))
        }
    }      
        
        for(var key in collection){
     if(typeof collection === 'object' && !Array.isArray(collection) && collection != null){
            func(collection[key],key,collection)
            result.push(func(collection[key],key,collection))
            }
        }return result
    }


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(array,property){
    // let result2 = []
    // pluckFunc = function(){
    //     for(var i = 0; i < array.length;i++){
    //     result2.push(array[i][property])
    //     } return result2
    // }
    // return array.map(pluckFunc)
    let output = []
    output = array.map(item => item[property])
    return output
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
    let result = true
    if(func === undefined){
        
           if(Array.isArray(collection)){
            for(var i = 0; i < collection.length;i++){
                if(collection[i] === false){
                    result = false
                }
            }
           }else if(typeof collection === 'object' && !Array.isArray(collection) && collection != null){
                for(var key in collection){
                    if(collection[key] === false){
                        result = false
                        
                    }
                }    
           }
        } let result2 = true
        if(func !== undefined){
            if(Array.isArray(collection)){
                    for(var i = 0; i < collection.length;i++){
                         func(collection[i],i,collection)
                          if(func(collection[i],i,collection) === false){
                            result = false
                          }
                     }
        }}else if(typeof collection === 'object' && !Array.isArray(collection) && collection != null){
                 for(var key in collection){
                     func(collection[key],key,collection)
                        if(func(collection[key],key,collection) === false){
                            result = false
                        }
                 } 
                }return result
    
    }
    



/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
    // let result = false
    // if(func === undefined){
    //        if(Array.isArray(collection)){
    //         for(var i = 0; i < collection.length;i++){
    //             if(collection[i] === true){
    //                 result = true
    //             }
    //         }
    //        }else if(typeof collection === 'object' && !Array.isArray(collection) && collection != null){
    //             for(var key in collection){
    //                 if(collection[key] === true){
    //                     result = true
    //                 }
    //             }    
    //        }
    //     } 
    //     if(func !== undefined){
    //         if(Array.isArray(collection)){
    //                 for(var i = 0; i < collection.length;i++){
    //                      func(collection[i],i,collection)
    //                       if(func(collection[i],i,collection) === true){
    //                         result = true
    //                       } 
    //                  }
    //     }}else if(typeof collection === 'object' && !Array.isArray(collection) && collection != null){
    //              for(var key in collection){
    //                  func(collection[key],key,collection)
    //                     if(func(collection[key],key,collection) === true){
    //                         result = true
    //                     } 
    //              } 
    //             }return result
    if (typeof func !== "function") {
        return collection.some(function(element) {
          return Boolean(element);
        });
      }
      // Use Array.every or Object.every based on the type of the collection
      if (Array.isArray(collection)) {
        return collection.some(function(element, index) {
          return func(element, index, collection);
        });
      } else if (typeof collection === "object" && collection !== null) {
        return Object.values(collection).some(function(value, key) {
          return func(value, Object.keys(collection)[key], collection);
        });
      }
      // Return false for any other type of collection
      return false;
    };
    


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed){
    let result;
    //determine if seed recieved a value or not 
    if(seed === undefined){//if no seed value
        result = array[0];
        for(let i = 1; i < array.length; i++){
            result = func(result, array[i], i, array);//reassigning 'result' to result of func invocation
        }
    } else {//else it recieved no value
        result = seed;
        for(let i = 0; i < array.length;i++){
            result = func(result, array[i], i, array);
        }
    }

    return result;




}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(obj1, ...obj2){
    let returnedObject = Object.assign(obj1, ...obj2);
    return returnedObject
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
