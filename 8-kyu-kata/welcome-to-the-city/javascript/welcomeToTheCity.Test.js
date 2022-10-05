// 8 kyu - Welcome to the City  [ ID: 5302d846be2a9189af0001e4  (welcome-to-the-city) ]
// URL: https://www.codewars.com/kata/5302d846be2a9189af0001e4
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests", () => {
  it("Should pass Basic Tests", () => {
    assert.strictEqual(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'), 'Hello, John Smith! Welcome to Phoenix, Arizona!')
    assert.strictEqual(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'), 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!')
    assert.strictEqual(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'), 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!')
  });
});

describe("Random Tests", () => {
  
  function sayHelloSolution( name, city, state ) {
    return 'Hello, ' + name.join(' ') + '! Welcome to ' + city + ', ' + state + '!';
  }
  
  const names=[["Frank", "Underwood"],["Claire", "Underwood"],["Douglas", '"Doug"', "Stamper"],["Zoe", "Barnes"], ["Peter", "Russo"], ["Remy", "Danton"], ["Former", "President", "Garrett", "Walker"]],
        cities=["New York City","Los Angeles","Chicago","Houston","Philadelphia", "Detroit"],
        states=["New York","California","Illinois","Texas","Pennsylvania", "Michigan"];
      
  for (let i = 0; i < 40; i++) {
    let name = names[Math.floor(Math.random() * names.length)],
        location = Math.floor(Math.random() * cities.length),
        city = cities[location],
        state = states[location],
        expected = sayHelloSolution( name, city, state );
    it(`Testing for ["${name.join("\", \"")}"], "${city}" and "${state}"`, () => {
      assert.strictEqual(sayHello(name, city, state), expected);
    });    
  }  
  
});


