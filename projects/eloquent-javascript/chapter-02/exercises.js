
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(count) {//declare a function called triangle that takes in a parameter that represents a 
//amount of #'s to add to form a triangle
  let triCount = '' //an empty string that will be added to every iteration of the loop
  for(var i = 1; i <= count; i++){//for loop used to iterate however many times as the number used as the input
    triCount += "#" //the empty sting will have a # added to it every time the loop iterates
    console.log(triCount)
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for(var i = 1; i <= 15; i++){
    if(i % 3 === 0 && i % 5 !== 0 && i <= 15 && i >= 1){
      console.log('fizz')
    } else if(i % 5 === 0 && i % 3 !== 0 && i <= 15 && i >= 1){
      console.log('buzz')
    } else if(i % 5 === 0 && i % 3 === 0 && i <= 15 && i >= 1){
      console.log('fizzbuzz')
    } else if(i <= 15 && i >= 1) {
      console.log(i)
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  let board = ''
  for(var i = 0;i < size;i++){
    let row = ''
    for(var j = 0;j < size;j++){
      if((i+j) % 2 === 0){
        board += ' '
      }else{
        board += '#'
      }
   }
    board += row + '\n'
  }
  console.log(board)

}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
