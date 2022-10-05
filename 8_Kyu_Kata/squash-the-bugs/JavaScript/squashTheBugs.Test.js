// [object Object] - Squash the bugs  [ ID: 56f173a35b91399a05000cb7  (squash-the-bugs) ]
// URL: https://www.codewars.com/kata/56f173a35b91399a05000cb7
// Category: BUG_FIXES  |  Tags: DEBUGGING | FUNDAMENTALS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(findLongest("The quick white fox jumped around the massive dog"), 7);
    assert.strictEqual(findLongest("Take me to tinseltown with you"), 10); 
    assert.strictEqual(findLongest("Sausage chops"), 7); 
    assert.strictEqual(findLongest("Wind your body and wiggle your belly"), 6); 
    assert.strictEqual(findLongest("Lets all go on holiday"), 7); 
  })
});

describe("Random tests",() =>{
  
  const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
  
  const sol=s=>Math.max.apply(this, s.split(" ").map(a=>a.length));
  
  let names=["Arsene", "Lupin", "III", "Daisuke", "Jigen", "Goemon", "Ishikawa", "Fujiko", "Mine", "Rebecca", "Rossellini", "Koichi", "Zenigata", "Justin", "Nix", "Person", "Leonardo", "Da", "Vinci"];

  it("Testing for 40 random tests", () => {
    for (let i=0;i<40;i++){
      let s=[], len=randint(1,20);
      for (let k=0;k<len;k++) s.push(names[randint(0,names.length-1)]);
      s=s.join(" ");
      assert.strictEqual(findLongest(s),sol(s),`Testing for ${JSON.stringify(s)}`);
    }
  })
})
