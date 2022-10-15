//+ ====================================================================================================================
//+
//+ 7 kyu - Mumbling  [ ID: 5667e8f4e3f572a8f2000039 ] (mumbling)
//+ URL: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | PUZZLES
//+
//+ ====================================================================================================================

import { assert } from "chai"
import { accum } from "./mumbling"

function testing(s: string, expected: string) {
  assert.strictEqual(accum(s), expected)
}

describe("Fixed Tests accum", function () {
  it("Basic tests", function () {
    testing("ZpglnRxqenU", "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu")
    testing("NyffsGeyylB", "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb")
    testing("MjtkuBovqrU", "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu")
    testing("EvidjUnokmM", "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm")
    testing("HbideVbxncC", "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc")
    testing("VwhvtHtrxfE", "V-Ww-Hhh-Vvvv-Ttttt-Hhhhhh-Ttttttt-Rrrrrrrr-Xxxxxxxxx-Ffffffffff-Eeeeeeeeeee")
    testing("KurgiKmkphY", "K-Uu-Rrr-Gggg-Iiiii-Kkkkkk-Mmmmmmm-Kkkkkkkk-Ppppppppp-Hhhhhhhhhh-Yyyyyyyyyyy")
    testing("NctlfBlnmfH", "N-Cc-Ttt-Llll-Fffff-Bbbbbb-Lllllll-Nnnnnnnn-Mmmmmmmmm-Ffffffffff-Hhhhhhhhhhh")
    testing("WegunHvbdmV", "W-Ee-Ggg-Uuuu-Nnnnn-Hhhhhh-Vvvvvvv-Bbbbbbbb-Ddddddddd-Mmmmmmmmmm-Vvvvvvvvvvv")
    testing("VoywwSpqidE", "V-Oo-Yyy-Wwww-Wwwww-Ssssss-Ppppppp-Qqqqqqqq-Iiiiiiiii-Dddddddddd-Eeeeeeeeeee")
    testing("VbaixFpxdcO", "V-Bb-Aaa-Iiii-Xxxxx-Ffffff-Ppppppp-Xxxxxxxx-Ddddddddd-Cccccccccc-Ooooooooooo")
    testing("OlyqvYwkuzF", "O-Ll-Yyy-Qqqq-Vvvvv-Yyyyyy-Wwwwwww-Kkkkkkkk-Uuuuuuuuu-Zzzzzzzzzz-Fffffffffff")
    testing("JrhfdMtchiH", "J-Rr-Hhh-Ffff-Ddddd-Mmmmmm-Ttttttt-Cccccccc-Hhhhhhhhh-Iiiiiiiiii-Hhhhhhhhhhh")
    testing("JiwpcSwslvW", "J-Ii-Www-Pppp-Ccccc-Ssssss-Wwwwwww-Ssssssss-Lllllllll-Vvvvvvvvvv-Wwwwwwwwwww")
    testing("EagpiEvmabJ", "E-Aa-Ggg-Pppp-Iiiii-Eeeeee-Vvvvvvv-Mmmmmmmm-Aaaaaaaaa-Bbbbbbbbbb-Jjjjjjjjjjj")
    testing("RznlcEmuxxP", "R-Zz-Nnn-Llll-Ccccc-Eeeeee-Mmmmmmm-Uuuuuuuu-Xxxxxxxxx-Xxxxxxxxxx-Ppppppppppp")
    testing("OrggaExarzP", "O-Rr-Ggg-Gggg-Aaaaa-Eeeeee-Xxxxxxx-Aaaaaaaa-Rrrrrrrrr-Zzzzzzzzzz-Ppppppppppp")
    testing("DriraMtedfB", "D-Rr-Iii-Rrrr-Aaaaa-Mmmmmm-Ttttttt-Eeeeeeee-Ddddddddd-Ffffffffff-Bbbbbbbbbbb")
    testing("BjxseRxgtjT", "B-Jj-Xxx-Ssss-Eeeee-Rrrrrr-Xxxxxxx-Gggggggg-Ttttttttt-Jjjjjjjjjj-Ttttttttttt")
    testing("EquhxOswchE", "E-Qq-Uuu-Hhhh-Xxxxx-Oooooo-Sssssss-Wwwwwwww-Ccccccccc-Hhhhhhhhhh-Eeeeeeeeeee")
  })
})

function randint(a: number, b: number) {
  return Math.floor(Math.random() * (b - a + 1) + a)
}

function accumSol109(s: string) {
  function capitalize(s: string) {
    return s.toLowerCase().replace(/\b./g, function (a) {
      return a.toUpperCase()
    })
  }
  const a = s.split("")
  let res = ""
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
    } else {
      n = randint(97, 122)
    }
    res += String.fromCharCode(n)
    i++
  }
  return res
}

describe("Random Tests", function () {
  for (let i = 0; i < 100; i++) {
    const s1 = doEx()
    const ans = accumSol109(s1)
    it("Test : " + i.toString() + " s1: " + s1 + " --> " + ans, function () {
      testing(s1, ans)
    })
  }
})
