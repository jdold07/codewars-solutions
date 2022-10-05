// 8 kyu - Pre-FizzBuzz Workout #1  [ ID: 569e09850a8e371ab200000b  (pre-fizzbuzz-workout-number-1) ]
// URL: https://www.codewars.com/kata/569e09850a8e371ab200000b
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
//######Security Tests######
if(Math.random == undefined)
  Test.assertEquals(false,true,'Math Object must contain random Method!')
if(Math.floor == undefined)
  Test.assertEquals(false,true,'Math Object must contain floor Method!')
if(Math.random.toString().indexOf('[native code]')==-1||Math.random.toString().length!=35)
  Test.assertEquals(false,true,'Math.random method must be Native!')
if(Math.floor.toString().indexOf('[native code]')==-1||Math.floor.toString().length!=34)
  Test.assertEquals(false,true,'Math.floor method must be Native!')
//######Security Tests######


describe('Fixed Tests', () => {
  it("Test", () => {
    Test.assertSimilar(preFizz(1), [1], `Array should be from 1 to 1`);
    Test.assertSimilar(preFizz(2), [1,2], `Array should be from 1 to 2`);
    Test.assertSimilar(preFizz(3), [1,2,3], `Array should be from 1 to 3`);
    Test.assertSimilar(preFizz(4), [1,2,3,4], `Array should be from 1 to 4`);
    Test.assertSimilar(preFizz(5), [1,2,3,4,5], `Array should be from 1 to 5`);
  });
});

describe('Random Tests', () => {
  it("Test", () => {
    for(let i=0;i<100;i++){
      let num = Math.floor(Math.random()*1000)+1;
      Test.assertSimilar(preFizz(num),new Array(num+1).join('0').split('').map((a,i)=>i+1), `Array should be from 1 to ${num}`);
    }
  });
});
