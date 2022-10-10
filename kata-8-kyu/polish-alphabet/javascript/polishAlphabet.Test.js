//+ ====================================================================================================================
//+
//+ 8 kyu - Polish alphabet  [ ID: 57ab2d6072292dbf7c000039 ] (polish-alphabet)
//+ URL: https://www.codewars.com/kata/57ab2d6072292dbf7c000039
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { correctPolishLetters } = require("./polishAlphabet")

describe("Basic Tests", function () {
  assert.strictEqual(correctPolishLetters("Jędrzej Błądziński"), "Jedrzej Bladzinski")
  assert.strictEqual(correctPolishLetters("Lech Wałęsa"), "Lech Walesa")
  assert.strictEqual(correctPolishLetters("Maria Skłodowska-Curie"), "Maria Sklodowska-Curie")
  assert.strictEqual(correctPolishLetters("Władysław Reymont"), "Wladyslaw Reymont")
  assert.strictEqual(correctPolishLetters("Mikołaj Kopernik"), "Mikolaj Kopernik")
  assert.strictEqual(correctPolishLetters("Józef Piłsudski"), "Jozef Pilsudski")
  assert.strictEqual(correctPolishLetters("Czesław Miłosz"), "Czeslaw Milosz")
  assert.strictEqual(correctPolishLetters("Agnieszka Radwańska"), "Agnieszka Radwanska")
  assert.strictEqual(correctPolishLetters("Wojciech Szczęsny"), "Wojciech Szczesny")
  assert.strictEqual(correctPolishLetters("Zażółć gęślą jaźń"), "Zazolc gesla jazn")
  assert.strictEqual(
    correctPolishLetters("Wół go pyta: 'Panie chrząszczu,Po co pan tak brzęczy w gąszczu?'"),
    "Wol go pyta: 'Panie chrzaszczu,Po co pan tak brzeczy w gaszczu?'"
  )
})

describe("Random Test", function () {
  function polishAlphabetReferance(string) {
    function changeLetters(match) {
      return letters[match]
    }
    return string.replace(/[ąćęłńóśżź]/g, changeLetters)
  }

  let letters = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z"
  }

  it("Dickhead never put a test name", () => {
    for (let i = 0; i <= 25; i++) {
      let arrayOfLetters = [
        "a",
        "ą",
        "b",
        "c",
        "ć",
        "d",
        "e",
        "ę",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "ł",
        "m",
        "n",
        "ń",
        "o",
        "ó",
        "p",
        "r",
        "s",
        "ś",
        "t",
        "u",
        "w",
        "y",
        "z",
        "ż",
        "ź",
        " ",
        ","
      ]
      let shuffledArray = shuffle(arrayOfLetters)
      shuffledArray = shuffledArray.join("")
      assert.strictEqual(correctPolishLetters(shuffledArray), polishAlphabetReferance(shuffledArray))
    }
  })
  function shuffle(a) {
    let j, x, i
    for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i)
      x = a[i - 1]
      a[i - 1] = a[j]
      a[j] = x
    }
    return a
  }
})
