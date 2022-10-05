// [object Object] - All Star Code Challenge #18  [ ID: 5865918c6b569962950002a1  (all-star-code-challenge-number-18) ]
// URL: https://www.codewars.com/kata/5865918c6b569962950002a1
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
letters = "abcdefghijklz"
letters = letters.split("")
function strCountSolve(str, letter){  
 let letter_Count = 0;  
 for (let position = 0; position < str.length; position++)   
 {  
    if (str.charAt(position) == letter)   
      {  
      letter_Count += 1;  
      }  
  }  
  return letter_Count;  
} 

describe("testing strCount()",function(){
  it("should correctly return the correct count",function(){
    Test.assertEquals(strCount('Hello', 'o'), 1);
    Test.assertEquals(strCount('Hello', 'l'), 2);
    Test.assertEquals(strCount('abcedfghijklmnopqrstuvwxyz', 'z'), 1);
  });
  
  it("should return 0 when no occurance found",function(){
    Test.assertEquals(strCount('ww234n', 'z'), 0, "Should return 0 when no occurances found");
  });
  
  it("should be able to handle an empty string",function(){
    Test.assertEquals(strCount('', 'k'), 0);
  });
  
  for(rtest=0;rtest<95;rtest++){
    word = "";
    for(qqq=0;qqq< Math.floor(Math.random() * 300)+2;qqq++){
      word += letters[Math.floor(Math.random() * letters.length)]; 
    }
    le = letters[Math.floor(Math.random() * letters.length)];
    console.log("Testing for '"+word+"' with the letter '"+le+"'");
    poi = strCountSolve(word,le);
    it("should be able to handle random tests",function(){
      Test.assertEquals(strCount(word, le), poi);
    });
  }
})

