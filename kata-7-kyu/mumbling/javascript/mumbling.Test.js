//+ ====================================================================================================================
//+
//+ 7 kyu - Mumbling  [ ID: 5667e8f4e3f572a8f2000039 ] (mumbling)
//+ URL: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | PUZZLES
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { accum } = require("./mumbling")

describe("accum", function () {
  it("Basic tests", function () {
    assert.strictEqual(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu")
    assert.strictEqual(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb")
    assert.strictEqual(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu")
    assert.strictEqual(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm")
    assert.strictEqual(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc")
    assert.strictEqual(accum("VwhvtHtrxfE"), "V-Ww-Hhh-Vvvv-Ttttt-Hhhhhh-Ttttttt-Rrrrrrrr-Xxxxxxxxx-Ffffffffff-Eeeeeeeeeee")
    assert.strictEqual(accum("KurgiKmkphY"), "K-Uu-Rrr-Gggg-Iiiii-Kkkkkk-Mmmmmmm-Kkkkkkkk-Ppppppppp-Hhhhhhhhhh-Yyyyyyyyyyy")
    assert.strictEqual(accum("NctlfBlnmfH"), "N-Cc-Ttt-Llll-Fffff-Bbbbbb-Lllllll-Nnnnnnnn-Mmmmmmmmm-Ffffffffff-Hhhhhhhhhhh")
    assert.strictEqual(accum("WegunHvbdmV"), "W-Ee-Ggg-Uuuu-Nnnnn-Hhhhhh-Vvvvvvv-Bbbbbbbb-Ddddddddd-Mmmmmmmmmm-Vvvvvvvvvvv")
    assert.strictEqual(accum("VoywwSpqidE"), "V-Oo-Yyy-Wwww-Wwwww-Ssssss-Ppppppp-Qqqqqqqq-Iiiiiiiii-Dddddddddd-Eeeeeeeeeee")
    assert.strictEqual(accum("VbaixFpxdcO"), "V-Bb-Aaa-Iiii-Xxxxx-Ffffff-Ppppppp-Xxxxxxxx-Ddddddddd-Cccccccccc-Ooooooooooo")
    assert.strictEqual(accum("OlyqvYwkuzF"), "O-Ll-Yyy-Qqqq-Vvvvv-Yyyyyy-Wwwwwww-Kkkkkkkk-Uuuuuuuuu-Zzzzzzzzzz-Fffffffffff")
    assert.strictEqual(accum("JrhfdMtchiH"), "J-Rr-Hhh-Ffff-Ddddd-Mmmmmm-Ttttttt-Cccccccc-Hhhhhhhhh-Iiiiiiiiii-Hhhhhhhhhhh")
    assert.strictEqual(accum("JiwpcSwslvW"), "J-Ii-Www-Pppp-Ccccc-Ssssss-Wwwwwww-Ssssssss-Lllllllll-Vvvvvvvvvv-Wwwwwwwwwww")
    assert.strictEqual(accum("EagpiEvmabJ"), "E-Aa-Ggg-Pppp-Iiiii-Eeeeee-Vvvvvvv-Mmmmmmmm-Aaaaaaaaa-Bbbbbbbbbb-Jjjjjjjjjjj")
    assert.strictEqual(accum("RznlcEmuxxP"), "R-Zz-Nnn-Llll-Ccccc-Eeeeee-Mmmmmmm-Uuuuuuuu-Xxxxxxxxx-Xxxxxxxxxx-Ppppppppppp")
    assert.strictEqual(accum("OrggaExarzP"), "O-Rr-Ggg-Gggg-Aaaaa-Eeeeee-Xxxxxxx-Aaaaaaaa-Rrrrrrrrr-Zzzzzzzzzz-Ppppppppppp")
    assert.strictEqual(accum("DriraMtedfB"), "D-Rr-Iii-Rrrr-Aaaaa-Mmmmmm-Ttttttt-Eeeeeeee-Ddddddddd-Ffffffffff-Bbbbbbbbbbb")
    assert.strictEqual(accum("BjxseRxgtjT"), "B-Jj-Xxx-Ssss-Eeeee-Rrrrrr-Xxxxxxx-Gggggggg-Ttttttttt-Jjjjjjjjjj-Ttttttttttt")
    assert.strictEqual(accum("EquhxOswchE"), "E-Qq-Uuu-Hhhh-Xxxxx-Oooooo-Sssssss-Wwwwwwww-Ccccccccc-Hhhhhhhhhh-Eeeeeeeeeee")
  })
})

describe("Random tests", function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }

  //................
  function accumSol109(s) {
    function capitalize(s) {
      return s.toLowerCase().replace(/\b./g, function (a) {
        return a.toUpperCase()
      })
    }
    let a = s.split(""),
      res = ""
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < i + 1; j++) res += a[i]
      res += "-"
    }
    return capitalize(res.substr(0, res.length - 1))
  }
  //................

  function doEx() {
    let i = 0
    let res = ""
    let n
    while (i < 11) {
      if (i % 5 === 0) {
        n = randint(65, 90)
      } else n = randint(97, 122)
      res += String.fromCharCode(n)
      i++
    }
    return res
  }

  for (let i = 0; i < 100; i++) {
    let s1 = doEx()
    it("Testing accum: ", function () {
      assert.strictEqual(accum(s1), accumSol109(s1), "It should work for random tests too")
    })
  }
})
