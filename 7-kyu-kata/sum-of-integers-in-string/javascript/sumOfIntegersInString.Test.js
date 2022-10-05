// 7 kyu - Sum of integers in string  [ ID: 598f76a44f613e0e0b000026  (sum-of-integers-in-string) ]
// URL: https://www.codewars.com/kata/598f76a44f613e0e0b000026
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Example test cases", () =>{

  let = exampleTests = [
    ["12.4", 16],
    ["h3ll0w0rld", 3],
    ["2 + 3 = ", 5],
    ["Our company made approximately 1 million in gross revenue last quarter.", 1],
    ["The Great Depression lasted from 1929 to 1939.", 3868],
    ["Dogs are our best friends.", 0],
    ["C4t5 are 4m4z1ng.", 18],
    ["The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", 3635]
  ]
  
  exampleTests.forEach( ([testString, correctAnswer]) => Test.assertEquals(sumOfIntegersInString(testString), correctAnswer ) )
});

describe("Random tests", () =>{
  let rnd = x => ~~(Math.random()*x), rndOf = xx => xx[rnd(xx.length)],
      rndStr = _ => [...Array(3+rnd(5))].map( _ => rndOf("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ;,?:!§%()#[]")).join``;
      
  for( let x=0; x < 99; x++ ){
    let data = rndStr(), exp = 0, r, rrr=[];
    for( let z=0; z < 1+rnd(9); z++ ){ r = rnd(1e4); rrr.push(r); data += r+rndStr(); exp += r } 
    it( `Should sum numbers in "${data}" : (=${rrr.join("+")})`, () =>{ Test.assertEquals( sumOfIntegersInString(data), exp ) } )
  }
  
});
