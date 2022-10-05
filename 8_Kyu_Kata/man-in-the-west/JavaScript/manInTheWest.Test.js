// [object Object] - Man in the west  [ ID: 59bd5dc270a3b7350c00008b  (man-in-the-west) ]
// URL: https://www.codewars.com/kata/59bd5dc270a3b7350c00008b
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Basic tests",() =>{
  Test.assertEquals(checkTheBucket(["stone", "stone", "stone", "stone", "stone"]), false);
  Test.assertEquals(checkTheBucket(["stone", "stone", "stone", "stone", "gold"]), true);
  Test.assertEquals(checkTheBucket(["gold", "stone", "stone", "stone", "stone"]), true);
  Test.assertEquals(checkTheBucket([]), false);
  Test.assertEquals(checkTheBucket(["stone", "stone", "stone", "gold", "gold"]), true);
})

describe("Random tests",() =>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
const sol=b=>b.includes("gold");

for (i=0;i<40;i++){
  const b=Array.from({length:randint(0,60)},a=>randint(0,15)==0 ? "gold" : "stone");
  it(`Testing for ["${b.join('", "')}"]`,() =>{
  Test.assertEquals(checkTheBucket(b),sol(b),"It should work for random inputs too");
  })
}
});
