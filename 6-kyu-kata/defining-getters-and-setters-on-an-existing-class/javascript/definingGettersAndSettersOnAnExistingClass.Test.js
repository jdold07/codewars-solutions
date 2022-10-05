// 6 kyu - Defining getters and setters on an existing class  [ ID: 55bcf04de45497c54a0000d0  (defining-getters-and-setters-on-an-existing-class) ]
// URL: https://www.codewars.com/kata/55bcf04de45497c54a0000d0
// Category: REFERENCE  |  Tags: OBJECT-ORIENTED PROGRAMMING | FUNDAMENTALS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const _ = require("lodash");

describe("Anti-Cheat", () => {
  it("Don't overwrite the original Person class", () => {
    assert.strictEqual(Person, _InitPerson93247594859385495834435, "The original Person class has been overwritten");
  })
})

describe("Fixed Tests", () => {
  it("Tests", () => {
let marcusFenix = new Person('Marcus', 'Fenix'),
    augustusCole = new Person('Augustus', 'Cole'),
    damonBaird = new Person('Damon', 'Baird'),
    dominicSantiago = new Person('Dominic', 'Santiago');

    assert.strictEqual(marcusFenix.name, 'Marcus Fenix');
    assert.strictEqual(augustusCole.name, 'Augustus Cole');
    assert.strictEqual(damonBaird.name, 'Damon Baird');
    assert.strictEqual(dominicSantiago.name, 'Dominic Santiago');

    augustusCole.name = 'Cole Train';
    dominicSantiago.name = 'Dom Santiago';

    assert.strictEqual(augustusCole.getName(), 'Cole Train');
    assert.strictEqual(dominicSantiago.getName(), 'Dom Santiago');
  });
});

describe("Random Tests", () => {
  const uppercase = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const lowercase = [..."abcdefghijklmnopqrstuvwxyz"];
  function getRandName() {
    return _.sample(uppercase) + _.sampleSize(lowercase, _.random(3,8)).join("");
  }
  it("Tests", () => {
    for (let i = 0; i < 100; i++) {
      let initialFirstName = getRandName();
      let initialLastName = getRandName();
      let initialFullName = initialFirstName + " " + initialLastName;
      let obj = new Person(initialFirstName, initialLastName);
      
      assert.strictEqual(obj.firstName, initialFirstName);
      assert.strictEqual(obj.lastName, initialLastName);
      assert.strictEqual(obj.getName(), initialFullName);
      assert.strictEqual(obj.name, initialFullName);
      
      for (let j = 0; j < 5; j++) {
        let newFirstName = getRandName();
        let newLastName = getRandName();
        let newFullName = newFirstName + " " + newLastName;
        obj.name = newFullName;
        
        assert.strictEqual(obj.firstName, newFirstName);
        assert.strictEqual(obj.lastName, newLastName);
        assert.strictEqual(obj.getName(), newFullName);
        assert.strictEqual(obj.name, newFullName);
      }
    }
  })
})

