// [object Object] - Power  [ ID: 562926c855ca9fdc4800005b  (power) ]
// URL: https://www.codewars.com/kata/562926c855ca9fdc4800005b
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
( _ => { ["log","log10","log2","sqrt","cbrt","pow"].forEach(m=>Math[m] = _ => `Sorry, ${m}. is disabled for the moment.`); global.eval = _ => "Eviiiil!"})()

describe("Check un-use of '**'", () =>{
  const testedCode = require("fs").readFileSync('/home/codewarrior/solution.txt', 'utf8');
  Test.expect( testedCode.indexOf("**")<0, "Verbotten !!!" )
})

describe("Integers raised to a power", () =>{
  Test.assertEquals(numberToPower(4, 2), 16);
  Test.assertEquals(numberToPower(10, 4), 10000);
  Test.assertEquals(numberToPower(10, 0), 1);
  Test.assertEquals(numberToPower(31, 7), 27512614111);
});


describe("Floats raised to a power", () =>{
  Test.assertApproxEquals(numberToPower(14.5, 9), 28334269484.11914);
  Test.assertApproxEquals(numberToPower(Math.PI, 2), 9.869604401089358);
  Test.assertApproxEquals(numberToPower(Math.PI/2, 14), 556.7731434176238);
});


describe("Random tests", () =>{
  let rnd = _ => ~~(Math.random()*13);
  for( let i=0; i< 99; i++ ){
    let n = rnd(), p = rnd(), exp = [...Array(p)].reduce(r=>r*n,1);
    console.log( `${n}^${p} => ... ?` );
    Test.assertEquals( numberToPower(n,p), exp )
  }
});
