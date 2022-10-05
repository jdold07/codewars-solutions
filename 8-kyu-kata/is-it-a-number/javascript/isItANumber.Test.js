// 8 kyu - Is it a number?  [ ID: 57126304cdbf63c6770012bd  (is-it-a-number) ]
// URL: https://www.codewars.com/kata/57126304cdbf63c6770012bd
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Solution", function(){
  it("basic tests", function(){
    let input = "s2324";
    Test.assertEquals(isDigit(input), false);
    
    input = "3 4";    
    Test.assertEquals(isDigit(input), false);    
    
    input = "3-4";    
    Test.assertEquals(isDigit(input), false);    
    
    input = "3  4   ";    
    Test.assertEquals(isDigit(input), false);    
    
    input = "34.65";    
    Test.assertEquals(isDigit(input), true);    
    
    input = "-0";    
    Test.assertEquals(isDigit(input), true);    
    
    input = " ";    
    Test.assertEquals(isDigit(input), false);    
    
    input = "";    
    Test.assertEquals(isDigit(input), false);        
    
    input = "0.0";    
    Test.assertEquals(isDigit(input), true);      
    
    input = "ab";    
    Test.assertEquals(isDigit(input), false);     
    
    input = "ab  cd";    
    Test.assertEquals(isDigit(input), false);         
  });
  
  it("random", function(){
    for (let i = 0; i < 100; i++) {
      let a = Math.random();
      let aa = ""+a;
      let b = Math.random();
      let bb = ""+b;
      let c = Math.random();
      let cc = ""+c;
      let dd = "fsda243fs";
     
      Test.assertEquals(isDigit(aa), true);
      Test.assertEquals(isDigit(bb), true);
      Test.assertEquals(isDigit(cc), true);
      Test.assertEquals(isDigit(dd), false);
    }  
  });  
});
