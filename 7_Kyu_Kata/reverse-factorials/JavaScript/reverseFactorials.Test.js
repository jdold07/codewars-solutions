// [object Object] - Reverse Factorials  [ ID: 58067088c27998b119000451  (reverse-factorials) ]
// URL: https://www.codewars.com/kata/58067088c27998b119000451
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(reverseFactorial(120), '5!');
Test.assertEquals(reverseFactorial(3628800), '10!');
Test.assertEquals(reverseFactorial(150), 'None');

function reverseFactorialCheck(num) {
  let x = 1;
  while (num > 1 && Math.round(num) === num) {
    x += 1;
    num /= x;
  }
  if (num === 1) {
    return x + '!';
  } else {
    return 'None'
  }
}
for(let i = 0; i < 100; i++){
  let random1 = Math.round(Math.random() * 10);  
  let random2 = Math.round(Math.random() * 10);  
  Test.assertEquals(reverseFactorial(random1, random2), reverseFactorialCheck(random1, random2))
}
  });
});

