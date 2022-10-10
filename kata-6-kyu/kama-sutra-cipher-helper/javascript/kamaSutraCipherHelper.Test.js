//+ ====================================================================================================================
//+
//+ 6 kyu - Kama Sutra Cipher Helper  [ ID: 5361372e700d2a9627000cf1 ] (kama-sutra-cipher-helper)
//+ URL: https://www.codewars.com/kata/5361372e700d2a9627000cf1
//+ Category: ALGORITHMS  |  Tags: CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS | ALGORITHMS
//+
//+ ====================================================================================================================

const { randomToken, randomize } = require("../../../utils/cwUtils")
const { assert, expect } = require("chai")
const { KamaSutraCipher } = require("./kamaSutraCipherHelper")

let c
let key

describe("Testing lowercase Latin alphabet", function () {
  it("Testing provided test cases", function () {
    key = [
      ["d", "p"],
      ["n", "o"],
      ["a", "w"],
      ["f", "c"],
      ["h", "s"],
      ["l", "v"],
      ["m", "j"],
      ["x", "b"],
      ["e", "z"],
      ["r", "i"],
      ["k", "y"],
      ["u", "q"],
      ["t", "g"]
    ]
    c = new KamaSutraCipher(key)
    assert.strictEqual(c.encode("mutt"), "jqgg")
    assert.strictEqual(c.encode("panda"), "dwopw")
  })

  it("Testing key of " + JSON.stringify(key), function () {
    key = [
      ["a", "z"],
      ["b", "y"],
      ["c", "x"],
      ["d", "w"],
      ["e", "v"],
      ["f", "u"],
      ["g", "t"],
      ["h", "s"],
      ["i", "r"],
      ["j", "q"],
      ["k", "p"],
      ["l", "o"],
      ["m", "n"]
    ]
    c = new KamaSutraCipher(key)
    assert.strictEqual(c.encode("abc"), "zyx")
    assert.strictEqual(c.encode("zyx"), "abc")
    assert.strictEqual(c.decode("abc"), "zyx")
    assert.strictEqual(c.decode("zyx"), "abc")
    assert.strictEqual(c.encode("codewars"), "xlwvdzih")
    assert.strictEqual(c.decode("codewars"), "xlwvdzih")
    assert.strictEqual(c.encode("xlwvdzih"), "codewars")
    assert.strictEqual(c.decode("xlwvdzih"), "codewars")
    assert.strictEqual(c.encode("CODEWARS"), "CODEWARS")
  })

  it("Testing key of " + JSON.stringify(key), function () {
    key = [["a", "z"]]
    c = new KamaSutraCipher(key)
    assert.strictEqual(c.encode("apple"), "zpple")
    assert.strictEqual(c.encode("zebra"), "aebrz")
    assert.strictEqual(c.encode("orange"), "orznge")
    assert.strictEqual(c.encode("maize"), "mziae")
    assert.strictEqual(c.decode("codewzrs"), "codewars")
    assert.strictEqual(c.decode("elephznt"), "elephant")
    assert.strictEqual(c.decode("aed"), "zed")
    assert.strictEqual(c.decode("dzae"), "daze")
  })
})

describe("Testing Sanskrit Alphabet", function () {
  it("Testing key of " + JSON.stringify(key), function () {
    key = [
      ["अ", "इ"],
      ["उ", "ऌ"],
      ["ऋ", "ए"],
      ["ओ", "औ"],
      ["ऐ", "आ"],
      ["ॠ", "ई"],
      ["छ", "ड"],
      ["ङ", "प"],
      ["व", "ह"]
    ]
    c = new KamaSutraCipher(key)
    assert.strictEqual(c.encode("सत्यमेव जयते"), "सत्यमेह जयते")
    assert.strictEqual(c.encode("जननी जन्मभूमिश्च स्वर्गादपि गरीयसी"), "जननी जन्मभूमिश्च स्हर्गादङि गरीयसी")
    assert.strictEqual(c.encode("पञ्चचित"), "ङञ्चचित")
    assert.strictEqual(c.encode("बहुजनहिताय बहुजन‍सुखाय‌"), "बवुजनविताय बवुजन‍सुखाय‌")
    assert.strictEqual(c.decode("सद्रक्षणाय खलनिग्रवणाय"), "सद्रक्षणाय खलनिग्रहणाय")
    assert.strictEqual(c.decode("हीरभोग्या हसुन्धरा"), "वीरभोग्या वसुन्धरा")
    assert.strictEqual(c.decode("ऐदित्यात् जायते हृष्टिः"), "आदित्यात् जायते वृष्टिः")
    assert.strictEqual(c.decode("सत्‍यं शिहम सुंदरम"), "सत्‍यं शिवम सुंदरम")
  })

  it("Testing key of " + JSON.stringify(key), function () {
    key = [
      ["व", "ह"],
      ["ॠ", "ई"],
      ["उ", "ऌ"],
      ["ऋ", "ए"],
      ["ओ", "औ"],
      ["ऐ", "आ"],
      ["अ", "इ"],
      ["छ", "ड"],
      ["ङ", "प"]
    ]
    c = new KamaSutraCipher(key)
    expect(c.encode("सत्यमेव जयते") == "सत्यमेह जयते")
    expect(c.encode("जननी जन्मभूमिश्च स्वर्गादपि गरीयसी") == "जननी जन्मभूमिश्च स्हर्गादङि गरीयसी")
    expect(c.encode("पञ्चचित") == "ङञ्चचित")
    expect(c.encode("बहुजनहिताय बहुजन‍सुखाय‌") == "बवुजनविताय बवुजन‍सुखाय‌")
    expect(c.decode("सद्रक्षणाय खलनिग्रवणाय") == "सद्रक्षणाय खलनिग्रहणाय")
    expect(c.decode("हीरभोग्या हसुन्धरा") == "वीरभोग्या वसुन्धरा")
    expect(c.decode("ऐदित्यात् जायते हृष्टिः") == "आदित्यात् जायते वृष्टिः")
    expect(c.decode("सत्‍यं शिहम सुंदरम") == "सत्‍यं शिवम सुंदरम")
  })
})

it("Testing random input", function () {
  var map, x
  key = []
  let abc = randomize("abcdefghijklmnopqrstuvwxyz".split(""))
  while (abc.length) key.push(abc.splice(0, 2))
  c = new KamaSutraCipher(key)

  map = key.reduce(function (map, pair) {
    map[pair[0]] = pair[1]
    map[pair[1]] = pair[0]
    return map
  }, {})
  x = function (str) {
    return str
      .split("")
      .map(function (x) {
        return map[x] ? map[x] : x
      })
      .join("")
  }

  for (let i = 0; i < 15; i++) {
    let token = randomToken()
    assert.strictEqual(c.encode(token), x(token))
  }

  for (let i = 0; i < 15; i++) {
    let token = randomToken()
    assert.strictEqual(c.decode(token), x(token))
  }
})
