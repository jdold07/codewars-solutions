// [object Object] - Digital cypher  [ ID: 592e830e043b99888600002d  (digital-cypher) ]
// URL: https://www.codewars.com/kata/592e830e043b99888600002d
// Category: REFERENCE  |  Tags: FUNDAMENTALS | CIPHERS | CRYPTOGRAPHY
// *****************************************************************************
 describe("Encoding..", function(){
   it("Basic Tests", function(){  
    Test.assertEquals( encode("scout",1939).join() , [ 20, 12, 18, 30, 21].join() );
    Test.assertEquals( encode("masterpiece",1939).join() , [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8].join());
  });
  
   it("Random Tests", function(){
   let loop = 0;
    while ( loop < 50000) {
      let str = makeStr();
       Test.assertEquals( encode(str, loop + 2).join() ,  e(str, loop + 2).join() );
      loop += 123;
    }
  });
  
 }); 
 
function makeStr()
{
    let text = "";
    let possible = "abcdefghijklmnopqrstuvwxyz";

    for( let i=0; i < Math.round( Math.random() * 100) + 1; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
 function e(s, n) 
{
    return s.split('').map((e, i) => e.charCodeAt(0) - 'a'.charCodeAt(0) + 1 + parseInt(n.toString()[i % n.toString().length]));
}
