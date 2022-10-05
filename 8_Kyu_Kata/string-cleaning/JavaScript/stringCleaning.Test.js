// [object Object] - String cleaning  [ ID: 57e1e61ba396b3727c000251  (string-cleaning) ]
// URL: https://www.codewars.com/kata/57e1e61ba396b3727c000251
// Category: REFERENCE  |  Tags: REGULAR EXPRESSIONS | FUNDAMENTALS | STRINGS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("String cleaning", () => {
  it("Fixed tests", () => {
    assert.strictEqual(stringClean(""), "")
    assert.strictEqual(stringClean("! !"), "! !")
    assert.strictEqual(stringClean("123456789"), "")
    assert.strictEqual(stringClean("(E3at m2e2!!)"), "(Eat me!!)")
    assert.strictEqual(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"), "Dsa cdsc csa!!! I Am cool!")
    assert.strictEqual(stringClean("A1 A1! AAA   3J4K5L@!!!"), "A A! AAA   JKL@!!!")
    assert.strictEqual(stringClean("Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@"), "Adgre Asad! AAA fvfdvJKL@")
    assert.strictEqual(stringClean("Ad2dsad3ds21 A  1$$s122ad! A2A3Ae24 f44K5L@222222 "), "Addsadds A  $$sad! AAAe fKL@ ")
    assert.strictEqual(stringClean("33333Ad2dsad3ds21 A3333  1$$s122a!d! A2!A!3Ae$24 f2##222 "), "Addsadds A  $$sa!d! A!A!Ae$ f## ")
    assert.strictEqual(stringClean("My \"me3ssy\" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?"), "My \"messy\" data issues! Will they ever, ever be solved?")
    assert.strictEqual(stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3"), "Why can't we buy the good software? #cheapskates")
  });

  it('Random Tests', () => {
    
    const _ = require("lodash")
    
    let VALIDS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    VALIDS += VALIDS.toLowerCase() + `~#$%^&!@*():;"'.,?`;

    let rnd = x => ~~(Math.random()*x), shuffle = s => _.shuffle([...s]).join('');

    let t = 10;
    while( t-- ){
      let exp = Array.from({length:2+rnd(8)}, _ => shuffle(VALIDS).slice(0,1+rnd(8)) ),
          inp = exp.map( s => rnd(2)<1 ? rnd(1e3)+s : s+rnd(1e3) ).join(' ');
    assert.strictEqual(stringClean(inp), exp.join(' '), `Should work for ${JSON.stringify(inp)}` );
    }    
  })
});
