// 8 kyu - SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes  [ ID: 56ff9b53140fcca90b000530  (speedcode-number-3-x-fun-with-es6-classes-number-5-dogs-and-classes) ]
// URL: https://www.codewars.com/kata/56ff9b53140fcca90b000530
// Category: GAMES  |  Tags: OBJECT-ORIENTED PROGRAMMING | REFACTORING | PUZZLES
// *****************************************************************************
describe("class Labrador", () => {
  const CHARACTER_LIMIT = 233;
  it("should instantiate objects as expected", () => {
    var spitsy = new Labrador("Spitsy", 10, "Male", "Donald");
    Test.assertEquals(spitsy.name, "Spitsy");
    Test.assertEquals(spitsy.age, 10);
    Test.assertEquals(spitsy.gender, "Male");
    Test.assertEquals(spitsy.species, "Labrador");
    Test.assertEquals(spitsy.legs, 4);
    Test.assertEquals(spitsy.size, "Large");
    Test.assertEquals(spitsy.master, "Donald");
    Test.assertEquals(spitsy.loyal, true);
    var edward = new Labrador("Edward", 3, "Male", "Emma");
    Test.assertEquals(edward.name, "Edward");
    Test.assertEquals(edward.age, 3);
    Test.assertEquals(edward.gender, "Male");
    Test.assertEquals(edward.species, "Labrador");
    Test.assertEquals(edward.legs, 4);
    Test.assertEquals(edward.size, "Large");
    Test.assertEquals(edward.master, "Emma");
    Test.assertEquals(edward.loyal, true);
  });
  it(`should contain no more than ${CHARACTER_LIMIT} characters`, () => {
    console.log(`Your character count: ${Labrador.prototype.constructor.toString().length}`);
    Test.expect(Labrador.prototype.constructor.toString().length <= CHARACTER_LIMIT);
  });
  it("should work for random tests", () => {
    class Solution extends Dog {
      constructor(name, age, gender, master) {
        super(name, age, gender, "Labrador", "Large", master, true);
      }
    }
    var name, age, gender, master, lab, sol;
    for (let i = 0; i < 10; i++) {
      name = Test.randomToken();
      age = Test.randomNumber();
      gender = Test.randomToken();
      master = Test.randomToken();
      sol = new Solution(name, age, gender, master);
      lab = new Labrador(name, age, gender, master);
      Test.assertEquals(lab.name, sol.name);
      Test.assertEquals(lab.age, sol.age);
      Test.assertEquals(lab.gender, sol.gender);
      Test.assertEquals(lab.species, sol.species);
      Test.assertEquals(lab.legs, sol.legs);
      Test.assertEquals(lab.size, sol.size);
      Test.assertEquals(lab.master, sol.master);
      Test.assertEquals(lab.loyal, sol.loyal);
    }
  });
});
