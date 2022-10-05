// null - Inverse FizzBuzz  [ ID: 5459f67b85166aee840000f3  (inverse-fizzbuzz) ]
// URL: https://www.codewars.com/kata/5459f67b85166aee840000f3
// Category: ALGORITHMS  |  Tags: ALGORITHMS | FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {

Test.assertEquals(AreArraysEqual(Sequence(["fizz"]), [3]), true, "Array ['fizz'] should give output [3]");
Test.assertEquals(AreArraysEqual(Sequence(["buzz"]), [5]), true, "Array ['buzz'] should give output [5]");
Test.assertEquals(AreArraysEqual(Sequence(["fizz", "buzz"]), [9, 10]), true, "Array ['fizz', 'buzz'] should give output [9, 10]");
Test.assertEquals(AreArraysEqual(Sequence(["buzz", "fizz"]), [5, 6]), true, "Array ['buzz', 'fizz'] should give output [5, 6]");
Test.assertEquals(AreArraysEqual(Sequence(["fizz", "buzz", "fizz"]), [3, 4, 5, 6]), true, "Array ['fizz', 'buzz', 'fizz'] should give output [3, 4, 5, 6]");
Test.assertEquals(AreArraysEqual(Sequence(["fizz", "fizz"]), [6, 7, 8, 9]), true, "Array ['fizz', 'fizz'] should give output [6, 7, 8, 9]");
Test.assertEquals(AreArraysEqual(Sequence(["fizz", "fizz", "buzz"]), [6, 7, 8, 9, 10]), true, "Array ['fizz', 'fizz', 'buzz'] should give output [6, 7, 8, 9, 10]");
Test.assertEquals(AreArraysEqual(Sequence(["buzz", "fizz", "fizzbuzz"]), [10, 11, 12, 13, 14, 15]), true, "Array ['buzz', 'fizz', 'fizzbuzz'] should give output [10, 11, 12, 13, 14, 15]");
Test.assertEquals(AreArraysEqual(Sequence(["buzz", "fizz", "buzz"]), []), true, "Array ['buzz', 'fizz', 'buzz'] should give output [ ]");

function AreArraysEqual(array1, array2) { 
    if (array1.length != array2.length) {return false;};
    for (k = 0; k < array1.length; k++) {
        if (array1[k] != array2[k]) {return false;};
    };
    
    console.log("Array [" + array1 + "] matches [" + array2 + "]");
    return true;
};
  });
});

