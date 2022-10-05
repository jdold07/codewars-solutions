// 7 kyu - Number encrypting: cypher  [ ID: 57aa3927e298a757820000a8  (number-encrypting-cypher) ]
// URL: https://www.codewars.com/kata/57aa3927e298a757820000a8
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | CIPHERS | CRYPTOGRAPHY
// *****************************************************************************
let Solution = (function () {
  let words =
    "elite credit cable entertaining engine steady x-ray dog incredible flaky help well-groomed lavish approve island torpid porter winter snake trace fear channel warn grubby noise bad occur hobbies handy gullible grandmother gorgeous haircut uppity paltry pause superb idiotic name milky amuse plant encouraging maniacal oatmeal reply worry act arrogant pipe addition cure unequaled peace snow dance guarantee chase stain land control tent necessary answer system tan panicky route throne drain worm load strange rain stiff wriggle representative argue plant town combative teeth jagged stingy realise dream acoustics disillusioned chin jazzy unequal meat pricey zephyr massive spot grab easy chalk pigs"

  let cypher = function (string) {
    let letters = {
      I: 1,
      l: 1,
      R: 2,
      z: 2,
      E: 3,
      e: 3,
      A: 4,
      a: 4,
      S: 5,
      s: 5,
      G: 6,
      b: 6,
      T: 7,
      t: 7,
      B: 8,
      g: 9,
      O: 0,
      o: 0
    }

    return string.replace(/./g, (letter) => {
      return letters[letter] !== undefined ? letters[letter] : letter
    })
  }

  let api = {}

  api.getResult = function (string) {
    return cypher(string)
  }

  api.getRandomString = function (lengthInWords) {
    let str = ""
    let possibleWords = words.split(" ")

    let rand
    let adding
    let pointChances = 0
    for (let i = 0; i < lengthInWords; i++) {
      rand = Math.floor(Math.random() * possibleWords.length)
      adding = possibleWords[rand]

      pointChances++

      if (pointChances > rand / 10) {
        adding =
          ". " +
          adding.replace(/^(\w)/, (match) => {
            return match.toUpperCase()
          })
        pointChances = 0
      } else {
        adding = " " + adding
      }

      str += adding
    }

    return str.trim()
  }

  return api
})()

describe('The function "cypher"', function () {
  it("should pass the basic tests", function () {
    Test.assertEquals(cypher("Hello World"), "H3110 W0r1d", 'Testing "Hello World"')
    Test.assertEquals(cypher("I am your father"), "1 4m y0ur f47h3r", 'Testing "I am your father"')
    Test.assertEquals(
      cypher("I do not know what else I can test. Be cool. Good luck"),
      "1 d0 n07 kn0w wh47 3153 1 c4n 7357. 83 c001. 600d 1uck",
      'Testing "I do not know what else I can test. Be cool. Good luck"'
    )
    Test.assertEquals(cypher("IlRzEeAaSsGbTtBgOo"), "112233445566778900", 'Testing "IlRzEeAaSsGbTtBgOo"')
  })

  let string
  it("should pass 20 random test (10-20 words)", function () {
    for (let i = 0; i < 20; ++i) {
      let minRandNumber = 10
      let maxRandNumber = 20
      let rand = Math.floor(Math.random() * (maxRandNumber - minRandNumber + 1) + minRandNumber)
      string = Solution.getRandomString(rand)
      Test.assertEquals(cypher(string), Solution.getResult(string), 'Testing "' + string + '"')
    }
  })

  it("should pass 10 random test (50-100 words)", function () {
    for (let i = 0; i < 10; ++i) {
      let minRandNumber = 50
      let maxRandNumber = 100
      let rand = Math.floor(Math.random() * (maxRandNumber - minRandNumber + 1) + minRandNumber)
      string = Solution.getRandomString(rand)
      Test.assertEquals(cypher(string), Solution.getResult(string), 'Testing "' + string + '"')
    }
  })
})
