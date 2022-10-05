// 7 kyu - Extra Perfect Numbers (Special Numbers Series  #7)  [ ID: 5a662a02e626c54e87000123  (extra-perfect-numbers-special-numbers-series-number-7) ]
// URL: https://www.codewars.com/kata/5a662a02e626c54e87000123
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
// *****************************************************************************
describe("Basic tests",() =>{
  Test.assertSimilar(extraPerfect(3), [1,3]);
  Test.assertSimilar(extraPerfect(5), [1,3,5]);
  Test.assertSimilar(extraPerfect(7), [1,3,5,7]);
  Test.assertSimilar(extraPerfect(28), [1,3,5,7,9,11,13,15,17,19,21,23,25,27]);
  Test.assertSimilar(extraPerfect(39), [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]);
});

describe("Random tests",() =>{
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
const sol=n=>Array.from({length:Math.ceil(n/2)},(_,i)=>i*2+1);

for (let i=0;i<40;i++){
  const n=randint(1, Math.pow(10, randint(1,2)));
  it(`Testing for ${n}`,() =>{
  Test.assertSimilar(extraPerfect(n), sol(n), "It should work for random inputs too");
  })
}
});
