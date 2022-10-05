// 6 kyu - Keyword Cipher  [ ID: 57241cafef90082e270012d8  (keyword-cipher) ]
// URL: https://www.codewars.com/kata/57241cafef90082e270012d8
// Category: ALGORITHMS  |  Tags: CRYPTOGRAPHY | STRINGS | ALGORITHMS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests",() =>{
  it("Tests", () => {
    assert.strictEqual(keywordCipher("Welcome home","secret"), "wticljt dljt", "Expect 'Welcome home' to return 'wlfimhl kmhl'");
    assert.strictEqual(keywordCipher("hello","wednesday"), "bshhk");
    assert.strictEqual(keywordCipher("HELLO","wednesday"), "bshhk");
    assert.strictEqual(keywordCipher("HeLlO","wednesday"), "bshhk");
    assert.strictEqual(keywordCipher("WELCOME HOME", "gridlocked"), "wlfimhl kmhl", "Expect 'WELCOME HOME' to return 'wlfimhl kmhl'");
    assert.strictEqual(keywordCipher("alpha bravo charlie", "delta"), "djofd eqdvn lfdqjga", "Expect 'alpha bravo chalie' to return 'djofd eqdvn lfdqjga'");
    assert.strictEqual(keywordCipher("Home Base", "seven"), "dlja esqa", "Expect 'Home Base' to return 'dlja esqa'");
    assert.strictEqual(keywordCipher("basecamp", "covert"), "ocprvcil", "Expect 'basecamp' to return 'ocprvcil");
    assert.strictEqual(keywordCipher("one two three", "rails"), "mks twm tdpss", "Expect 'one two three' to return 'mks twm tdpss'");
    assert.strictEqual(keywordCipher("Test", "unbuntu"), "raqr", "Expect 'Test' to return 'raqr'");
  })
})

describe("Random tests",() =>{
  const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
  const sol=(s, k)=>(k=>s.toLowerCase().split("").map(a=>(i=>i!=-1 ? k[i] : a)("abcdefghijklmnopqrstuvwxyz".indexOf(a))).join(""))(k.split("").filter((a,i)=>k.indexOf(a)==i).join("")+"abcdefghijklmnopqrstuvwxyz".split("").filter(a=>k.indexOf(a)==-1).join(""));
  const base="   abcdefghijklmnopqrstuvwxyz  ", alpha="abcdefghijklmnopqrstuvwxyz";
  
  for (let i=0;i<40;i++){
    let s=Array.from({length: randint(5,35)}, a=>(randint(0,1)==0 ? base[randint(0,base.length-1)] : base[randint(0,base.length-1)].toUpperCase())).join("").trim(), k=Array.from({length: randint(5,35)}, a=>(alpha[randint(0,alpha.length-1)])).join("");
    it(`Testing for '${s}' and '${k}'`,() =>{
      assert.strictEqual(keywordCipher(s,k),sol(s,k),"It should work for random inputs too")
    })
  }
})
