// [object Object] - FizzBuzz Backwards  [ ID: 59ad13d5589d2a1d84000020  (fizzbuzz-backwards) ]
// URL: https://www.codewars.com/kata/59ad13d5589d2a1d84000020
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe('STATIC TESTS', function(){
  Test.assertDeepEquals(reverseFizzBuzz([1,2,"Fizz",4,"Buzz"]), [3,5]);
  Test.assertDeepEquals(reverseFizzBuzz([1,"Fizz","Buzz","Fizz",5,"FizzBuzz"]), [2,3]);
  Test.assertDeepEquals(reverseFizzBuzz([1,"FizzBuzz",3,"FizzBuzz",5,"FizzBuzz"]), [2,2]);
  Test.assertDeepEquals(reverseFizzBuzz(["Fizz","Fizz","Fizz","Fizz","Fizz","FizzBuzz"]), [1,6]);
});

function reverseFizzBuzzChecker(array) {
  
  let fizzBuzz = [];
  
  for (i = 0; i < array.length; i++) {
    if (array[i] == "Fizz" || array[i] == "FizzBuzz") {
      fizzBuzz[0] = i + 1;
      break
    }
  }
  
  for (j = 0; j < array.length; j++) {
    if (array[j] == "Buzz" || array[j] == "FizzBuzz") {
      fizzBuzz[1] = j + 1;
      break
    }
  }

  return fizzBuzz
  
};

function fizzBuzz(a,b) {
  let array = [];
  for (let k = 1; k <= 100; k++) {
    let entry = '';
    if (k % a === 0) entry += 'Fizz';
    if (k % b === 0) entry += 'Buzz';
    array[k] = (entry || k);
  }
  array.shift();
  return array;
}

describe('RANDOM TESTS: Fizz = 1', function(){
  for (m = 0; m < 2; m++) {
   let randomTwo = Math.floor((Math.random() * 49 + 1));
   let fizzBuzzArray = fizzBuzz(1, randomTwo);
   Test.assertDeepEquals(reverseFizzBuzz(fizzBuzzArray), reverseFizzBuzzChecker(fizzBuzzArray));
  };
});

describe('RANDOM TESTS: Fizz = Buzz', function(){
  for (m = 0; m < 2; m++) {
   let randomTwo = Math.floor((Math.random() * 49 + 1));
   let fizzBuzzArray = fizzBuzz(randomTwo, randomTwo);
   Test.assertDeepEquals(reverseFizzBuzz(fizzBuzzArray), reverseFizzBuzzChecker(fizzBuzzArray));
  };
});

describe('RANDOM TESTS', function(){
  for (m = 0; m < 12; m++) {
   let randomOne = Math.floor((Math.random() * 49 + 1));
   let randomTwo = Math.floor((Math.random() * 49 + 1));
   let fizzBuzzArray = fizzBuzz(randomOne, randomTwo);
   Test.assertDeepEquals(reverseFizzBuzz(fizzBuzzArray), reverseFizzBuzzChecker(fizzBuzzArray));
  };
});
