//+ ====================================================================================================================
//+
//+ 6 kyu - Permute a Palindrome  [ ID: 58ae6ae22c3aaafc58000079 ] (permute-a-palindrome)
//+ URL: https://www.codewars.com/kata/58ae6ae22c3aaafc58000079
//+ Category: REFERENCE  |  Tags: ALGORITHMS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { permuteAPalindrome } = require("./permuteAPalindrome")

describe("Should work for the sample Tests", () => {
  it("Basic Tests", () => {
    assert.strictEqual(permuteAPalindrome("a"), true)
    assert.strictEqual(permuteAPalindrome("aa"), true)
    assert.strictEqual(permuteAPalindrome("baa"), true)
    assert.strictEqual(permuteAPalindrome("aab"), true)
    assert.strictEqual(permuteAPalindrome("baabcd"), false)
    assert.strictEqual(permuteAPalindrome("racecars"), false)

    assert.strictEqual(permuteAPalindrome("abcdefghba"), false)
    assert.strictEqual(permuteAPalindrome(""), true)

    let test_string = "a".repeat(500) + "bb" + "c" + "za".repeat(100)
    assert.strictEqual(permuteAPalindrome(test_string), true)

    let test_string2 = "a".repeat(5000) + "bb" + "cd" + "za".repeat(1000)
    assert.strictEqual(permuteAPalindrome(test_string2), false)
  })
})
function an(input) {
  let counter = {}

  for (let i = 0; i < input.length; i++) {
    if (counter[input[i]]) {
      counter[input[i]] ^= 1
    } else {
      counter[input[i]] = 1
    }
  }

  let sum = 0
  for (let c in counter) {
    sum += counter[c]
  }

  return sum <= 1
}
function rand(from, to) {
  return Math.floor((to - from + 1) * Math.random() + from)
}
function shuff(arr) {
  for (let i = 0; i < 100; i++) {
    let idx1 = rand(0, arr.length - 1),
      idx2 = rand(0, arr.length - 1)
    let t = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = t
  }
}
function rndtest() {
  return rand(0, 2) ? trueCase() : falseCase()
}
const chars = "abcdefghijklmnopqrstuvwxyz"
function trueCase() {
  //console.log("maybe true")
  let len = rand(1, 30),
    r = []
  while (len--) {
    let c = chars[rand(0, chars.length - 1)]
    r.push(c, c)
  }
  if (rand(0, 1)) r.push(chars[rand(0, chars.length - 1)])
  shuff(r)
  return r.join("")
}
function falseCase() {
  //console.log("perhaps false")
  let r = trueCase(),
    modify = rand(3, 5)
  while (modify--) {
    let c = r[rand(0, r.length - 1)]
    r += c
  }
  return r
}

describe("100 Random Tests --- Testing for correctness of solution", function () {
  it("It should works for random tests.", function () {
    for (let iii = 0; iii < 100; iii++) {
      let ddd = rndtest()
      console.log(
        "<font face='sans-serif' color='#00cc00' size=3><b>Testing for:</b></font><font face='sans-serif' color='#eeee00' size=3>" +
          "\ninput = " +
          JSON.stringify(ddd) +
          "</font>",
        ""
      )
      let ans = an(ddd),
        useran = permuteAPalindrome(ddd)
      assert.strictEqual(useran, ans)
    }
  })
})
