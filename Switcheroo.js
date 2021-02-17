// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). 
// Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'



function switcheroo(x){
    return x.replace(/[ab]/g, match => (match === 'a' ? 'b' : 'a'))
  }


//////another solution

const switcheroo = x => x.split('').map(letter => letter === 'a' ? 'b' : (letter === 'b' ? 'a' : 'c')).join('');

//////another solution

function switcheroo(x){
    return x.split('').map(function(e){
      if (e =='b')return 'a';
      if (e == 'a') return 'b';
      if(e=='c') return 'c'
    }).join('');
  }


//////another solution


function switcheroo(x){

const arr = x.split('');
const answer = [];

for (i of arr) {
  if(i==='a') {
    answer.push('b');
  } else if(i==='b') {
    answer.push('a');
  } else {
    answer.push (i);
  }
}
  return answer.join('');
}


