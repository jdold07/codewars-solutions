// [object Object] - Nth Smallest Element (Array Series  #4)   [ ID: 5a512f6a80eba857280000fc  (nth-smallest-element-array-series-number-4) ]
// URL: https://www.codewars.com/kata/5a512f6a80eba857280000fc
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
// *****************************************************************************
describe("Basic tests",() =>{
  Test.assertEquals(nthSmallest([3,1,2],2),2);
  Test.assertEquals(nthSmallest([15,20,7,10,4,3],3),7);
  Test.assertEquals(nthSmallest([-5,-1,-6,-18],4),-1);
  Test.assertEquals(nthSmallest([-102,-16,-1,-2,-367,-9],5),-2);
  Test.assertEquals(nthSmallest([2,169,13,-5,0,-1],4),2);
});

describe("Random tests",() =>{
const randint=(a,b)=>Math.floor(Math.random()*(b-a+1)+a);
const sol=(arr,n)=>arr.sort((a,b)=>a-b)[n-1];

for (let i=0;i<40;i++){
  const arr=Array.from({length:randint(3,40)},_=>randint(-Math.pow(10,randint(0,4)),Math.pow(10,randint(0,4))));
  const n=randint(1,arr.length);
  it(`Testing for [${arr.join(" ,")}] and ${n}`,() =>{
  Test.assertEquals(nthSmallest([].concat(arr),n),sol(arr,n),"It should work for random inputs too");
  })
}
});
