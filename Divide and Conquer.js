// Divide and Conquer

// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.



function divCon(x){
  
  return x.reduce((a, b) => {
   return (typeof(b) === 'number') ? a += b : a -= b;
},  0)

}


//////another solution

var divCon = ($) => $.filter( el => typeof el === 'number').reduce((a, b)=> a+b, 0) - $.filter( el => typeof el === 'string').reduce((a, b)=> +a + +b, 0)

//////another solution

with(require('ramda')){
  const isNumber = pipe(type, equals('Number'))
  const disjointAccordingTypes = partition(isNumber)
  var divCon = pipe(disjointAccordingTypes, map(sum), apply(subtract))              
}


//////another solution


function divCon(x){
  let str = x.filter(el => typeof(el) === 'string');
    let sum = 0;
    for(let el of str){
      sum += +el;
    }
    let num = x.filter(el => typeof(el) === 'number');
    let numS = 0;
    for(let el of num){
      numS += +el;
    }
    return numS - sum;
  }


  //////another solution


  function divCon(x){
    let numValue = 0;
    let strValue = 0;
    
    for(let i = 0; i < x.length; i++) {
      if(typeof(x[i]) === 'string' ) {
        strValue += parseFloat(x[i]);
      } else if(typeof(x[i]) === 'number' ) {
        numValue += x[i];
      }
    }
    return numValue - strValue;
  }



    //////another solution
    function divCon(x){
      var total = 0
      x.forEach(function (num) {
        if (typeof num === 'string') {
          total -= parseInt(num)
        } else {
          total += num
        }
      });
      return total
    }

