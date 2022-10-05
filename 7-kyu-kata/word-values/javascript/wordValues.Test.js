// 7 kyu - Word values  [ ID: 598d91785d4ce3ec4f000018  (word-values) ]
// URL: https://www.codewars.com/kata/598d91785d4ce3ec4f000018
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Word values", ()=>{
  it("simple examples", ()=>{
    Test.assertDeepEquals( wordValue(["codewars","abc","xyz"]), [88,12,225] );
    Test.assertDeepEquals( wordValue(["abc abc","abc abc","abc","abc"]), [12,24,18,24] );
  });
  it("detailed cases", ()=>{
    Test.assertDeepEquals( wordValue(["abc","abc","abc","abc"]), [6,12,18,24] );
    Test.assertDeepEquals( wordValue(["abcdefghijklmnopqrstuvwxyz","stamford bridge","haskellers"]), [351,282,330] );
    Test.assertDeepEquals( wordValue(["i love coding","better than pizza","i got this"]), [115,382,321] );
    Test.assertDeepEquals( wordValue(["mercury","venus","earth mars","jupiter saturn","uranus neptune"]), [103, 162, 309, 768, 945] );
    Test.assertDeepEquals( wordValue(["a cup","some tea","more coffee","one glass"]), [41, 156, 273, 368] );
    Test.assertDeepEquals( wordValue(["a","e","i","o","u","the end"]), [1, 10, 27, 60, 105, 336] );
    Test.assertDeepEquals( wordValue(["coding","better pizza","i got this too"]), [52, 296, 471] );
  });
  const LETTERS = " abcdefghijklmnopqrstuvwxyz";
  const rnd = n => Math.floor(Math.random()*n) ;
  const randomString = n => Array.from( { length: rnd(n) }, () => LETTERS[rnd(LETTERS.length)] ).join("") ;
  const randomArray = n => Array.from( { length: rnd(n) }, () => randomString(n) ) ;
  const referenceWordValue = a => a.map( (v,i) => [].reduce.call( v, (acc,c) => acc + LETTERS.indexOf(c) , 0 ) * (i+1) ) ;
  it("small random sets", ()=>{
    for ( let i=100; i--; ) {
      const arg = [ randomString(32) ];
      const expected = referenceWordValue(arg);
      const actual = wordValue(arg) ;
      Test.assertDeepEquals( actual, expected );
    }
  });
  it("larger random sets", ()=>{
    for ( let i=100; i--; ) {
      const arg = randomArray(128);
      const expected = referenceWordValue(arg);
      const actual = wordValue(arg) ;
      Test.assertDeepEquals( actual, expected );
    }
  });
});


