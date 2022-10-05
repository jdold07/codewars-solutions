// 8 kyu - Ensure question  [ ID: 5866fc43395d9138a7000006  (ensure-question) ]
// URL: https://www.codewars.com/kata/5866fc43395d9138a7000006
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Ensure question", () => {
  it("Fixed tests", () => {
    assert.strictEqual(ensureQuestion(""),"?","Expected: '?'");
    assert.strictEqual(ensureQuestion("Yes"),"Yes?","Expected: '?'");
    assert.strictEqual(ensureQuestion("No?"),"No?","Expected: '?'");
  });

  it("Random Tests", () => {
    const words = ["racecar","madam","kitty","wolf","robert","kata","code wars",
                  "code","anna","level","radar","sagas","man","woman","internet","website",
                  "yes","no","this","is","another","word","in","the","random","array","of","word"];
    
    function opi(s){
       return s[s.length-1] === "?" ? s : s+"?"
    }
    
    function randint(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    for(let cwtests = 0; cwtests < 97; cwtests++){
      let word = `${words[randint(0, words.length - 1)]}${Math.floor(Math.random() * 2) > 0 ? "?" : ""}`
      assert.strictEqual(ensureQuestion(word),opi(word), `Testing for s = ${JSON.stringify(word)}`)
    };
  })
});
