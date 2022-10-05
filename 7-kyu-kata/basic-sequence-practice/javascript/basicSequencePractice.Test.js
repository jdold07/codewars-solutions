// 7 kyu - Basic Sequence Practice  [ ID: 5436f26c4e3d6c40e5000282  (basic-sequence-practice) ]
// URL: https://www.codewars.com/kata/5436f26c4e3d6c40e5000282
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(sumOfN(3), [0, 1, 3, 6]); 
    Test.assertSimilar(sumOfN(-4), [0, -1, -3, -6, -10]);  
    Test.assertSimilar(sumOfN(1), [0, 1]);    
    Test.assertSimilar(sumOfN(0), [0]);
    Test.assertSimilar(sumOfN(10), [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55]);   


 
  });
});

