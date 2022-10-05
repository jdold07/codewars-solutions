// 6 kyu - Kama Sutra Cipher Helper  [ ID: 5361372e700d2a9627000cf1  (kama-sutra-cipher-helper) ]
// URL: https://www.codewars.com/kata/5361372e700d2a9627000cf1
// Category: ALGORITHMS  |  Tags: CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS | ALGORITHMS
// *****************************************************************************
var c, abc, key, desc

desc = "Testing lowercase Latin alphabet"
describe(desc, function () {
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
  desc = "Testing provided test cases"
  it(desc, function () {
    c = new KamaSutraCipher(key)
    Test.assertEquals(c.encode("mutt"), "jqgg")
    Test.assertEquals(c.encode("panda"), "dwopw")
  })
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
  desc = "Testing key of " + JSON.stringify(key)
  it(desc, function () {
    c = new KamaSutraCipher(key)
    Test.assertEquals(c.encode("abc"), "zyx")
    Test.assertEquals(c.encode("zyx"), "abc")
    Test.assertEquals(c.decode("abc"), "zyx")
    Test.assertEquals(c.decode("zyx"), "abc")
    Test.assertEquals(c.encode("codewars"), "xlwvdzih")
    Test.assertEquals(c.decode("codewars"), "xlwvdzih")
    Test.assertEquals(c.encode("xlwvdzih"), "codewars")
    Test.assertEquals(c.decode("xlwvdzih"), "codewars")
    Test.assertEquals(c.encode("CODEWARS"), "CODEWARS")
  })

  key = [["a", "z"]]
  desc = "Testing key of " + JSON.stringify(key)
  it(desc, function () {
    c = new KamaSutraCipher(key)
    Test.assertEquals(c.encode("apple"), "zpple")
    Test.assertEquals(c.encode("zebra"), "aebrz")
    Test.assertEquals(c.encode("orange"), "orznge")
    Test.assertEquals(c.encode("maize"), "mziae")
    Test.assertEquals(c.decode("codewzrs"), "codewars")
    Test.assertEquals(c.decode("elephznt"), "elephant")
    Test.assertEquals(c.decode("aed"), "zed")
    Test.assertEquals(c.decode("dzae"), "daze")
  })
})

desc = "Testing Sanskrit Alphabet"
describe(desc, function () {
  var key = [
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
  desc = "Testing key of " + JSON.stringify(key)
  it(desc, function () {
    c = new KamaSutraCipher(key)
    Test.assertEquals(c.encode("सत्यमेव जयते"), "सत्यमेह जयते")
    Test.assertEquals(c.encode("जननी जन्मभूमिश्च स्वर्गादपि गरीयसी"), "जननी जन्मभूमिश्च स्हर्गादङि गरीयसी")
    Test.assertEquals(c.encode("पञ्चचित"), "ङञ्चचित")
    Test.assertEquals(c.encode("बहुजनहिताय बहुजन‍सुखाय‌"), "बवुजनविताय बवुजन‍सुखाय‌")
    Test.assertEquals(c.decode("सद्रक्षणाय खलनिग्रवणाय"), "सद्रक्षणाय खलनिग्रहणाय")
    Test.assertEquals(c.decode("हीरभोग्या हसुन्धरा"), "वीरभोग्या वसुन्धरा")
    Test.assertEquals(c.decode("ऐदित्यात् जायते हृष्टिः"), "आदित्यात् जायते वृष्टिः")
    Test.assertEquals(c.decode("सत्‍यं शिहम सुंदरम"), "सत्‍यं शिवम सुंदरम")
  })
  var key = [
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
  desc = "Testing key of " + JSON.stringify(key)
  it(desc, function () {
    c = new KamaSutraCipher(key)
    Test.expect(c.encode("सत्यमेव जयते") == "सत्यमेह जयते")
    Test.expect(c.encode("जननी जन्मभूमिश्च स्वर्गादपि गरीयसी") == "जननी जन्मभूमिश्च स्हर्गादङि गरीयसी")
    Test.expect(c.encode("पञ्चचित") == "ङञ्चचित")
    Test.expect(c.encode("बहुजनहिताय बहुजन‍सुखाय‌") == "बवुजनविताय बवुजन‍सुखाय‌")
    Test.expect(c.decode("सद्रक्षणाय खलनिग्रवणाय") == "सद्रक्षणाय खलनिग्रहणाय")
    Test.expect(c.decode("हीरभोग्या हसुन्धरा") == "वीरभोग्या वसुन्धरा")
    Test.expect(c.decode("ऐदित्यात् जायते हृष्टिः") == "आदित्यात् जायते वृष्टिः")
    Test.expect(c.decode("सत्‍यं शिहम सुंदरम") == "सत्‍यं शिवम सुंदरम")
  })
})

desc = "Testing random input"
describe(desc, function () {
  var map, x
  key = []
  abc = Test.randomize("abcdefghijklmnopqrstuvwxyz".split(""))
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

  for (var i = 0; i < 15; i++) {
    var token = Test.randomToken()
    Test.assertEquals(c.encode(token), x(token))
  }

  for (var i = 0; i < 15; i++) {
    var token = Test.randomToken()
    Test.assertEquals(c.decode(token), x(token))
  }
})
