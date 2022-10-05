// 8 kyu - Grasshopper - Function syntax debugging  [ ID: 56dae9dc54c0acd29d00109a  (grasshopper-function-syntax-debugging) ]
// URL: https://www.codewars.com/kata/56dae9dc54c0acd29d00109a
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Your function", () => {
  it("should be defined", () => {
    Test.expectNoError(main);
  });
  it("should work for sample tests", () => {
    Test.assertEquals(main('take ', 'item'), 'take item');
    Test.assertEquals(main('use ', 'sword'), 'use sword');
  });
  it("should work for fixed tests", () => {
    Test.assertEquals(main('eat ', 'food'), 'eat food');
    Test.assertEquals(main('drink ', 'water'), 'drink water');
    Test.assertEquals(main('open ', 'door'), 'open door');
    Test.assertEquals(main('close ', 'window'), 'close window');
    Test.assertEquals(main('author ', 'kata'), 'author kata');
    Test.assertEquals(main('approve ', 'kata'), 'approve kata');
  });
  it("should work for random tests", () => {
    for (let i = 0; i < 100; i++) {
      var verb = `${Test.randomToken()} `, noun = Test.randomToken();
      Test.assertEquals(main(verb, noun), verb + noun);
    }
  });
});
