// [object Object] - Simple beads count  [ ID: 58712dfa5c538b6fc7000569  (simple-beads-count) ]
// URL: https://www.codewars.com/kata/58712dfa5c538b6fc7000569
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Solution", function(){
  it("Basic tests", function(){
    Test.assertEquals(countRedBeads(0), 0);
    Test.assertEquals(countRedBeads(1), 0);
    Test.assertEquals(countRedBeads(3), 4);
    Test.assertEquals(countRedBeads(5), 8);
  });
  it("Random testing", function() {
    let sol = n => n < 2 ? 0 : (n-1) * 2;
    for(let i = 0; i < 100; i++) {
      let t = Math.floor(Math.random() * 5000);
      Test.assertEquals(countRedBeads(t), sol(t), 'Wrong result for ' + t);
    }
  });
});
