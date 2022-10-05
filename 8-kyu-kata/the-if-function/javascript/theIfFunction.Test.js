// 8 kyu - The 'if' function  [ ID: 54147087d5c2ebe4f1000805  (the-if-function) ]
// URL: https://www.codewars.com/kata/54147087d5c2ebe4f1000805
// Category: REFERENCE  |  Tags: FUNCTIONAL PROGRAMMING | FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
var a,b,c,d,e = false;

_if(true,function(){ Test.expect(true); a = true }, function(){ Test.expect(false,"Should respond to true correctly") })
_if(null ,function(){ Test.expect(false, "Should support falsy/truesy values") }, function(){ Test.expect(true); b = true})
_if(1, function(){ Test.expect(true); c=true} ,function(){ Test.expect(false, "Should support falsy/truesy values") })
_if(3 < 4, function(){ Test.expect(true); d=true} ,function(){ Test.expect(false, "Should support comparison") })
_if(9%3==0, function(){ Test.expect(true); e=true} ,function(){ Test.expect(false, "Should support comparison") })

Test.expect(a && b && c && d && e)
  });
});

