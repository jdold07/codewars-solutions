//+ ====================================================================================================================
//+
//+ 6 kyu - Valid Braces  [ ID: 5277c8a221e209d3f6000b56 ] (valid-braces)
//+ URL: https://www.codewars.com/kata/5277c8a221e209d3f6000b56
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { validBraces } = require("./validBraces")

function doTest(braces, expected) {
  const actual = validBraces(braces)
  assert.strictEqual(actual, expected, `for braces:\n"${braces}"\n`)
}

describe("Tests suite", function () {
  it("sample tests", function () {
    doTest("()))", false)
    doTest("()", true)
    doTest("[]", true)
    doTest("{}", true)
    doTest("(){}[]", true)
    doTest("([{}])", true)
    doTest("(}", false)
    doTest("[(])", false)
    doTest("({})[({})]", true)
    doTest("(})", false)
    doTest("(({{[[]]}}))", true)
    doTest("{}({})[]", true)
    doTest(")(}{][", false)
    doTest("())({}}{()][][", false)
    doTest("(((({{", false)
    doTest("}}]]))}])", false)
  })
})
