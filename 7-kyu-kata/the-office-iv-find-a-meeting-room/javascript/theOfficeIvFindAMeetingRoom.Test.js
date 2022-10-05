// 7 kyu - The Office IV - Find a Meeting Room  [ ID: 57f604a21bd4fe771b00009c  (the-office-iv-find-a-meeting-room) ]
// URL: https://www.codewars.com/kata/57f604a21bd4fe771b00009c
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("The Office IV - Find a Meeting Room", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(meeting(['X', 'O', 'X']), 1);
    assert.strictEqual(meeting(['O','X','X','X','X']), 0);
    assert.strictEqual(meeting(['X','X','O','X','X']), 2);
    assert.strictEqual(meeting(['X','X','X','X','X']), 'None available!');
  });

  it("Random tests",() =>{
    const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
    function mymeeting(x){
      for (let i = 0; i < x.length; i++) {
        if (x[i] == 'O') return i;
    }
    return 'None available!';
    }
    let names=["X"];

    for (let i=0;i<100;i++){
      let z='O', c='X', x=[], len=randint(1,10);
      for (let k=0;k<len;k++) {
      let room=randint(0, 7);
          if (room == 7) x.push(z);
          else {
            x.push(c);
          }
      }   
      assert.strictEqual(meeting(x.slice()), mymeeting(x), `Testing for ${JSON.stringify(x)}`);
    }
  })
})
