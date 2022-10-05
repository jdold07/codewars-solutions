// [object Object] - Product Of Maximums Of Array (Array Series #2)   [ ID: 5a63948acadebff56f000018  (product-of-maximums-of-array-array-series-number-2) ]
// URL: https://www.codewars.com/kata/5a63948acadebff56f000018
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
// *****************************************************************************
describe("Basic tests",() =>{
  Test.assertEquals(maxProduct([4,3,5], 2), 20);
  Test.assertEquals(maxProduct([10,8,7,9], 3), 720);
  Test.assertEquals(maxProduct([8,6,4,6], 3), 288);
  Test.assertEquals(maxProduct([10,2,3,8,1,10,4], 5), 9600);
  Test.assertEquals(maxProduct([13,12,-27,-302,25,37,133,155,-14], 5), 247895375);
  Test.assertEquals(maxProduct([-4,-27,-15,-6,-1], 2), 4);
  Test.assertEquals(maxProduct([-17,-8,-102,-309], 2), 136);
  Test.assertEquals(maxProduct([10,3,-27,-1], 3), -30);
  Test.assertEquals(maxProduct([14,29,-28,39,-16,-48], 4), -253344);
  Test.assertEquals(maxProduct([1], 1), 1);
});

describe("Random tests",() =>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
const sol=(n,s)=>n.sort((a,b)=>b-a).slice(0,s).reduce((a,b)=>a*b,1);

for (let i=0;i<40;i++){
  const n=Array.from({length:randint(3,10)},_=>randint(-10,10));
  const s=randint(1,n.length);
  it(`Testing for [${n.join(", ")}] and ${s}`,() =>{
  Test.assertEquals(maxProduct([].concat(n),s),sol(n,s),"It should work for random inputs too");
  })
}
});
