// 7 kyu - Average Scores  [ ID: 57b68bc7b69bfc8209000307  (average-scores) ]
// URL: https://www.codewars.com/kata/57b68bc7b69bfc8209000307
// Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
// *****************************************************************************
let string = average.toString();
let re = / ((\bin\b) | (\bdo\b) | (\bforEach\b) | (\bwhile\b) | (\bfor\b))/g;
test = !re.test(string);
let re2 = /in|do|forEach|while|for/g;
test2 = !re2.test(string);
let finalTest = false;
if(test && test2){
  finalTest = true;
}
Test.assertEquals(finalTest, true, "Solution does not use any loops");

scores = [5, 78, 52, 900, 1];
Test.assertEquals(average(scores), 207);

scores = [5, 25, 50, 75];
Test.assertEquals(average(scores), 39);

scores = [2];
Test.assertEquals(average(scores), 2);

scores = [1, 1, 1, 1, 9999];
Test.assertEquals(average(scores), 2001);

// Random Tests

describe("Random Test 1", function() {
  let arr1 = [];
  for (let i=0; i<15; i++) {
    arr1.push(Math.round(Math.random() * 100));
  }
  soltn1 = Math.round(arr1.reduce((acc, cur) => acc + cur, 0)/(arr1.length));
  Test.assertEquals(average(arr1), soltn1);
})

describe("Random Test 2", function() {
  let arr2 = [];
  for (let i=0; i<20; i++) {
    arr2.push(Math.round(Math.random() * 200));
  }
  soltn2 = Math.round(arr2.reduce((acc, cur) => acc + cur, 0)/(arr2.length));
  Test.assertEquals(average(arr2), soltn2);
})
