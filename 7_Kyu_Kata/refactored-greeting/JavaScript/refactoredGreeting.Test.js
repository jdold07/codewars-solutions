// [object Object] - Refactored Greeting  [ ID: 5121303128ef4b495f000001  (refactored-greeting) ]
// URL: https://www.codewars.com/kata/5121303128ef4b495f000001
// Category: REFACTORING  |  Tags: OBJECT-ORIENTED PROGRAMMING | REFACTORING
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
jack = new Person("Jack")
jill = new Person("Jill")

Test.assertEquals(jack.greet("Jill"), "Hello Jill, my name is Jack")
Test.assertEquals(jack.greet("Mary"), "Hello Mary, my name is Jack")

Test.assertEquals(jill.greet("Jack"), "Hello Jack, my name is Jill")
Test.assertEquals(jill.name, 'Jill', "Person's name could not be retrieved")
  });
});

