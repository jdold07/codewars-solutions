// 7 kyu - Return String of First Characters  [ ID: 5639bdcef2f9b06ce800005b  (return-string-of-first-characters) ]
// URL: https://www.codewars.com/kata/5639bdcef2f9b06ce800005b
// Category: REFERENCE  |  Tags: STRINGS | REGULAR EXPRESSIONS | FUNDAMENTALS
// *****************************************************************************
describe( "makeString should work for some examples" , () => {
    Test.assertEquals(makeString("sees eyes xray yoat"), "sexy", "Wrong result for 'sees eyes xray yoat'");
    Test.assertEquals(makeString("brown eyes are nice"), "bean", "Wrong result for 'brown eyes are nice'");
    Test.assertEquals(makeString("cars are very nice"), "cavn", "Wrong result for 'cars are very nice'");
    Test.assertEquals(makeString("kaks de gan has a big head"), "kdghabh", "Wrong result for 'kaks de gan has a big head'")
})

describe( "should work for random input" , () => {
  
  let rnd = (x) => ~~(Math.random()*x),
      chrs= "abcdefghijklmnopqrstuvwxyz";
  
  chrs = Test.randomize((chrs+chrs.toUpperCase()).split(''));
  
  let rndWord = (len) => { let i = rnd(26); return Test.randomize( chrs.slice(i, i+len)).join('') }
  
  for( let t=0; t< 40; t++ ){
    let solution = rndWord(4+rnd(5)), input = solution.split('').map( c => c+rndWord( 3+rnd(5)) ).join(" ");
    Test.assertEquals( makeString(input), solution, `Wrong result for ${input}`)
  }
  
});//z.
