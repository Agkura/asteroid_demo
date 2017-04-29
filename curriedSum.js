// function curriedSum(){
//   let numbers = [];
//
//   function _curriedSum(numArgs, ...nums){
//     nums.forEach(el => numbers.push(el));
//     if (numbers.length === numArgs){
//       return numbers.reduce((a,b) => a + b);
//     } else {
//       return _curriedSum;
//     }
//   }
//   return _curriedSum;
// }
//
//
function curriedSum(num) {
  let numbers = [], count = num;

  function _curriedSum(add) {
    numbers.push(add);
    count--;
    if (count === 0) {
        let total = 0;
        numbers.forEach(el => {total += el;});
        console.log(total);
    }
    return _curriedSum;
  }
  return _curriedSum;
}

// const adding = curriedSum(4);
// adding(5)(30)(20)(1);

function sum(){
  let total = 0;
  let array = Array.from(arguments);
  array.forEach(el => {total += el;});
  console.log(total);
}


Function.prototype.curry = function(numArgs) {
  let numbers = [], count = numArgs;
  let that = this;

  function _curry(arg) {
    numbers.push(arg);
    count--;
    if (count === 0){
      return that(...numbers);
    } else {
      return _curry;
    }
  }

  return _curry;
};


let me = sum.curry(3)(1)(2)(3);
console.log(me);
