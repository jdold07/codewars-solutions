// 8 kyu - Find the Integral  [ ID: 59811fd8a070625d4c000013  (find-the-integral) ]
// URL: https://www.codewars.com/kata/59811fd8a070625d4c000013
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
//rand num generator
const randNum = (min, max) => Math.ceil((Math.random()*(max-min))+min)

describe("Should work with example test cases", () => {
  Test.assertEquals(integrate(3,2), "1x^3");
  Test.assertEquals(integrate(12,5), "2x^6");
  Test.assertEquals(integrate(20,1), "10x^2")
  Test.assertEquals(integrate(40,3), "10x^4")
  Test.assertEquals(integrate(90,2), "30x^3")
});

describe("Should work with randmly generated test cases", () => {
  let randCo;
  let randEx;
  for(let i = 0; i < 50; i++) {
    randCo = randNum(1,100)
    randEx = randNum(3,100)
    Test.assertEquals(integrate(randCo * randEx, randEx - 1), `${randCo}x^${randEx}`);
  }
});
