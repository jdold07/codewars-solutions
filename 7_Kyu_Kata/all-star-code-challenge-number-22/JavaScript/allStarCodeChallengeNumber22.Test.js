// [object Object] - All Star Code Challenge #22  [ ID: 5865cff66b5699883f0001aa  (all-star-code-challenge-number-22) ]
// URL: https://www.codewars.com/kata/5865cff66b5699883f0001aa
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
var random = function(num){
//returns a random integer from 0 - num
  return Math.floor(Math.random()*num);
}

var mySol = function(sec){
  var HH = Math.floor(sec / 3600);
  var MM = Math.floor((sec / 60) - (HH * 60));
  return (HH + " hour(s) and " + MM + " minute(s)");
}

describe("testing toTime()",function(){
  it("should properly work with example test cases",function(){
    Test.assertEquals(toTime(3600), '1 hour(s) and 0 minute(s)');
    Test.assertEquals(toTime(3601), '1 hour(s) and 0 minute(s)');
    Test.assertEquals(toTime(3500), '0 hour(s) and 58 minute(s)');
    Test.assertEquals(toTime(323500), '89 hour(s) and 51 minute(s)');
    Test.assertEquals(toTime(0), '0 hour(s) and 0 minute(s)');  
  });
  
  it("should function properly with random input",function(){
    var counter = 10;
    var input, answer, output;
    while (counter >0){
      input = random(999999);
      answer = mySol(input);
      Test.assertEquals(toTime(input),mySol(input));
      counter--;
    }
  });
})
