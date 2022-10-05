// 8 kyu - Unfinished Loop -  Bug Fixing #1  [ ID: 55c28f7304e3eaebef0000da  (unfinished-loop-bug-fixing-number-1) ]
// URL: https://www.codewars.com/kata/55c28f7304e3eaebef0000da
// Category: BUG_FIXES  |  Tags: DEBUGGING
// *****************************************************************************
describe("Fix Timmys Counter", function() {
  it("Fixed Tests", function() {
    Test.assertSimilar(createArray(1),[1]);
    Test.assertSimilar(createArray(2),[1,2]);
    Test.assertSimilar(createArray(3),[1,2,3]);
    Test.assertSimilar(createArray(4),[1,2,3,4]);
    Test.assertSimilar(createArray(5),[1,2,3,4,5]);
    Test.assertSimilar(createArray(6),[1,2,3,4,5,6]);
    Test.assertSimilar(createArray(7),[1,2,3,4,5,6,7]);
    Test.assertSimilar(createArray(8),[1,2,3,4,5,6,7,8]);
    Test.assertSimilar(createArray(9),[1,2,3,4,5,6,7,8,9]);
    Test.assertSimilar(createArray(10),[1,2,3,4,5,6,7,8,9,10]);
  });
});
