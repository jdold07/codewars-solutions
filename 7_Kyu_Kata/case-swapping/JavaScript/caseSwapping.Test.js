// [object Object] - Case Swapping  [ ID: 5590961e6620c0825000008f  (case-swapping) ]
// URL: https://www.codewars.com/kata/5590961e6620c0825000008f
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const assert = require('chai').assert;
describe("Basic tests", () => {
  it(`Testing for "HelloWorld"`, () => assert.strictEqual(swap('HelloWorld'), 'hELLOwORLD'));
  it(`Testing for "CodeWars"`, () => assert.strictEqual(swap('CodeWars'), 'cODEwARS'));
  it(`Testing for "ThIs iS A l0NG sENTence witH nUMbERs in IT 123 456"`, () => assert.strictEqual(swap('ThIs iS A l0NG sENTence witH nUMbERs in IT 123 456'), 'tHiS Is a L0ng SentENCE WITh NumBerS IN it 123 456'));
  it(`Testing for ""`, () => assert.strictEqual(swap(''), ''));
  it(`Testing for " "`, () => assert.strictEqual(swap(' '), ' '));
  it(`Testing for "H_E_l-l_0 WO|||Rld"`, () => assert.strictEqual(swap('H_E_l-l_0 WO|||Rld'), 'h_e_L-L_0 wo|||rLD'));
  it(`Testing for "TeSt"`, () => assert.strictEqual(swap('TeSt'), 'tEsT'));
  it(`Testing for "EeEEeeEEEeee"`, () => assert.strictEqual(swap('EeEEeeEEEeee'), 'eEeeEEeeeEEE'));
});

describe("Random tests", () => {
  const randint = (a,b) => Math.floor(Math.random() * (b - a + 1)) + a;
  const base="abcdefghijklmnopqrstuvwxyz 0123456789 ,._-";
  function sol(str) {
    let res = [];
    str = str.split("");
    for (let i = 0; i < str.length; i++) {
      if (str[i] == str[i].toUpperCase()) res.push(str[i].toLowerCase());
      else res.push(str[i].toUpperCase());
    }
    return res.join("");
  }

  it("should work for random strings", () => {
    for (let _ = 0; _ < 40; _++) {
      let s = [], len = randint(1, 50);
      for (let j = 0; j < len; j++)
        s.push(randint(0,1) == 1 ? base[randint(0, base.length-1)].toUpperCase() : base[randint(0, base.length-1)])
      s = s.join("")
      assert.strictEqual(swap(s), sol(s), `Testing for "${s}"`)
    }
  });
});
