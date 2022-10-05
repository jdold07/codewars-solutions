// [object Object] - Jenny's secret message  [ ID: 55225023e1be1ec8bc000390  (jennys-secret-message) ]
// URL: https://www.codewars.com/kata/55225023e1be1ec8bc000390
// Category: BUG_FIXES  |  Tags: DEBUGGING
// *****************************************************************************
describe("Jenny's greeting function", function(){
  it("should greet some people normally",function(){
    Test.assertEquals(greet("Jim"), "Hello, Jim!");
    Test.assertEquals(greet("Jane"), "Hello, Jane!");
    Test.assertEquals(greet("Simon"), "Hello, Simon!");
  });
  it("should greet Johnny a little bit more special",function(){
    Test.assertEquals(greet("Johnny"), "Hello, my love!");
  });
});
