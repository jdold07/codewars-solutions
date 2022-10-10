//+ ====================================================================================================================
//+
//+ 8 kyu - A Strange Trip to the Market  [ ID: 55ccdf1512938ce3ac000056 ] (a-strange-trip-to-the-market)
//+ URL: https://www.codewars.com/kata/55ccdf1512938ce3ac000056
//+ Category: REFERENCE  |  Tags: REGULAR EXPRESSIONS | STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { expect } = require("chai")
const { isLockNessMonster } = require("./aStrangeTripToTheMarket")

describe("Tests", () => {
  it("test", () => {
    console.log("Your girlscout cookies are ready to ship. Your total comes to tree fiddy")
    expect(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"))
    console.log("Howdy Pardner. Name's Pete Lexington. I reckon you're the kinda stiff who carries about tree fiddy?")
    expect(
      isLockNessMonster(
        "Howdy Pardner. Name's Pete Lexington. I reckon you're the kinda stiff who carries about tree fiddy?"
      )
    )
    console.log(
      "I'm from Scottland. I moved here to be with my family sir. Please, $3.50 would go a long way to help me find them"
    )
    expect(
      isLockNessMonster(
        "I'm from Scottland. I moved here to be with my family sir. Please, $3.50 would go a long way to help me find them"
      )
    )
    console.log("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.")
    expect(!isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."))
    console.log(
      "I will absolutely, positively, never give that darn Lock Ness Monster any of my three dollars and fifty cents"
    )
    expect(
      !isLockNessMonster(
        "I will absolutely, positively, never give that darn Lock Ness Monster any of my three dollars and fifty cents"
      )
    )
    console.log(
      "Did I ever tell you about my run with that paleolithic beast? He tried all sorts of ways to get at my three dolla and fitty cent? I told him 'this is MY 4 dolla!'. He just wouldn't listen. "
    )
    expect(
      !isLockNessMonster(
        "Did I ever tell you about my run with that paleolithic beast? He tried all sorts of ways to get at my three dolla and fitty cent? I told him 'this is MY 4 dolla!'. He just wouldn't listen. "
      )
    )
  })
})
