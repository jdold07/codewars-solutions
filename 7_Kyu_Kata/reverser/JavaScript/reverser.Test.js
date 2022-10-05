// [object Object] - Reverser  [ ID: 58069e4cf3c13ef3a6000168  (reverser) ]
// URL: https://www.codewars.com/kata/58069e4cf3c13ef3a6000168
// Category: REFERENCE  |  Tags: RECURSION | FUNDAMENTALS
// *****************************************************************************
function reverseAnswer(n){
  let rev = 0
  while (n) {
      rev = rev * 10 + n % 10;
      n = Math.floor(n/10);
  }
  return rev;
}

describe("Basic tests",() =>{
  Test.assertEquals(reverse(1234), 4321);
  Test.assertEquals(reverse(10987), 78901);
  Test.assertEquals(reverse(1020), 201);
});

describe("Random tests",() =>{
  for(let i = 0; i < 100; ++i){
    const n = Math.floor(Math.random() * 100000) + 100;
    Test.assertEquals(reverse(n), reverseAnswer(n));
  }
});
