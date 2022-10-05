// [object Object] - If you can read this...  [ ID: 586538146b56991861000293  (if-you-can-read-this-dot-dot-dot) ]
// URL: https://www.codewars.com/kata/586538146b56991861000293
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
// These are some CW specific test methods available:
//    Test.expect(boolean, [optional] message)
//    Test.assertEquals(actual, expected, [optional] message)
//    Test.assertSimilar(actual, expected, [optional] message)
//    Test.assertNotEquals(actual, expected, [optional] message)

// NodeJS assert is also automatically required for you.
//    assert(true)
//    assert.strictEqual({a: 1}, {a: 1})
//    assert.deepEqual({a: [{b: 1}]}, {a: [{b: 1}]})

// You can also use Chai (http://chaijs.com/) by requiring it yourself
// var expect = require("chai").expect;
// var assert = require("chai").assert;
// require("chai").should();

function randTests(num){
  var arr = ["Alfa","November","Bravo","Oscar","Charlie","Papa","Delta","Quebec","Echo","Romeo",
      "Foxtrot","Sierra","Golf","Tango","Hotel","Uniform","India","Victor", "Juliett","Whiskey","Xray","Kilo",
      "Lima","Yankee","Mike","Zulu","?",".","!"];
      
  for (k=0;k<num;k++){
    var strIn = [], strOut = [];
      
    for (i=0;i<9;i++){
      rd = Math.floor(Math.random() * (arr.length - 1));
      strIn.push(arr[rd][0]);
      strOut.push(arr[rd]);
    }
    
    Test.assertEquals(to_nato(strIn.join('')), strOut.join(' '));
  }
}


describe("Tests using hard-coded strings", function(){
  it("Should return a correctly translated string", function(){
    Test.assertEquals(to_nato('If you can read'), "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta");
    Test.assertEquals(to_nato('Did not see that coming'), "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf");
    Test.assertEquals(to_nato('go for it!'),"Golf Oscar Foxtrot Oscar Romeo India Tango !");
  });
});

describe("Tests using random strings", function(){
  it("Should return a correctly translated string", function(){
  	randTests(10);
  });
});
