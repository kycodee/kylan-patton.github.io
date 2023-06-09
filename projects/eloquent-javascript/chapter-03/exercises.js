////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(a,b) {
  return Math.min(a,b)
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(n) {
if(n < 0){
    return isEven(-n)
  }
  else if(n == 0){
    return true
  } else if(n == 1){
    return false
  }else if(n !== 0 || n !== 1 ){
    return isEven(n-2)
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char, count = 0) {
  if(string.length === 0){
    return count
  }
  //recursive
  if(string[0] === char){
    count += 1
    return countChars(string.slice(1), char, count)
  }
  if(string[0] !== char){
    return countChars(string.slice(1), char, count)
  }
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string, count = 0) {
//return how many uppercase B's are in string

//base
if(string.length === 0){
  return count
}
//recursive
if(string[0] === 'B'){
  count += 1
  return countBs(string.slice(1), count)
}
if(string[0] !== 'B'){
  return countBs(string.slice(1), count)
}

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
