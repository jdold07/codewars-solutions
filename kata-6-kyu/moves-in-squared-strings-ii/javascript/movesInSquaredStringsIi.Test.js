//+ ====================================================================================================================
//+
//+ 6 kyu - Moves in squared strings (II)  [ ID: 56dbe7f113c2f63570000b86 ] (moves-in-squared-strings-ii)
//+ URL: https://www.codewars.com/kata/56dbe7f113c2f63570000b86
//+ Category: REFERENCE  |  Tags: ALGORITHMS | STRINGS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { oper, rot, selfieAndRot } = require("./movesInSquaredStringsIi")

function testing(actual, expected) {
  assert.strictEqual(actual, expected)
}

describe("opstrings", function () {
  it("Basic tests rot", function () {
    testing(oper(rot, "fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL"), "LyfUVC\nGUFjWk\nABpfre\nJMmPrD\ntcVYqC\nooujif")
    testing(oper(rot, "rkKv\ncofM\nzXkh\nflCB"), "BClf\nhkXz\nMfoc\nvKkr")
    testing(oper(rot, "lVHt\nJVhv\nCSbg\nyeCt"), "tCey\ngbSC\nvhVJ\ntHVl")
    testing(oper(rot, "QMxo\ntmFe\nWLUG\nowoq"), "qowo\nGULW\neFmt\noxMQ")
  })
  it("Basic tests selfieAndRot", function () {
    testing(
      oper(selfieAndRot, "xZBV\njsbS\nJcpN\nfVnP"),
      "xZBV....\njsbS....\nJcpN....\nfVnP....\n....PnVf\n....NpcJ\n....Sbsj\n....VBZx"
    )
    testing(
      oper(selfieAndRot, "uLcq\nJkuL\nYirX\nnwMB"),
      "uLcq....\nJkuL....\nYirX....\nnwMB....\n....BMwn\n....XriY\n....LukJ\n....qcLu"
    )
    testing(
      oper(selfieAndRot, "lVHt\nJVhv\nCSbg\nyeCt"),
      "lVHt....\nJVhv....\nCSbg....\nyeCt....\n....tCey\n....gbSC\n....vhVJ\n....tHVl"
    )
    testing(
      oper(selfieAndRot, "QMxo\ntmFe\nWLUG\nowoq"),
      "QMxo....\ntmFe....\nWLUG....\nowoq....\n....qowo\n....GULW\n....eFmt\n....oxMQ"
    )
  })
})

it("Random tests", function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }
  //................
  function revStr214(strng) {
    return [...strng].reverse().join("")
  }
  function vertMirror214(strng) {
    return strng
      .split("\n")
      .map(function (x) {
        return revStr214(x)
      })
      .join("\n")
  }
  function horMirror214(strng) {
    return strng.split("\n").reverse().join("\n")
  }
  function rot214(strng) {
    return vertMirror214(horMirror214(strng))
  }
  function selfieAndRot214(strng) {
    let newstr1 = strng
      .split("\n")
      .map(function (x) {
        return x + Array(x.length + 1).join(".")
      })
      .join("\n")
    let newstr2 = rot214(strng)
      .split("\n")
      .map(function (x) {
        return Array(x.length + 1).join(".") + x
      })
      .join("\n")
    return newstr1 + "\n" + newstr2
  }

  //................
  function doEx(k) {
    if (k % 2 === 1) k += 1
    let j = 0,
      res = []
    while (j < k) {
      let s = "",
        i = 0
      while (i < k) {
        if (randint(0, 100) % 2 === 0) s += String.fromCharCode(randint(97, 122))
        else s += String.fromCharCode(randint(65, 90))
        i++
      }
      res.push(s)
      j++
    }
    return res.join("\n")
  }
  console.log("***************** rot")
  function tests_code1() {
    let i = 0
    while (i < 100) {
      let s = doEx(randint(8, 20))
      testing(oper(rot, s), rot214(s))
      i++
    }
  }
  tests_code1()
  console.log("***************** selfieAndRot")
  function tests_code2() {
    let i = 0
    while (i < 100) {
      let s = doEx(randint(8, 20))
      testing(oper(selfieAndRot, s), selfieAndRot214(s))
      i++
    }
  }
  tests_code2()
})
