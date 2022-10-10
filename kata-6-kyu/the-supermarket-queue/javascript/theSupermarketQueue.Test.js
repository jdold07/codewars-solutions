//+ ====================================================================================================================
//+
//+ 6 kyu - The Supermarket Queue  [ ID: 57b06f90e298a7b53d000a86 ] (the-supermarket-queue)
//+ URL: https://www.codewars.com/kata/57b06f90e298a7b53d000a86
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { queueTime } = require("./theSupermarketQueue")

it("Basic tests", function () {
  assert.strictEqual(queueTime([], 1), 0, "wrong answer for an empty queue")
  assert.strictEqual(queueTime([5], 1), 5, "wrong answer for a single person in the queue")
  assert.strictEqual(queueTime([2], 5), 2, "wrong answer for a single person in the queue")
  assert.strictEqual(queueTime([1, 2, 3, 4, 5], 1), 15, "wrong answer for a single till")
  assert.strictEqual(queueTime([1, 2, 3, 4, 5], 100), 5, "wrong answer for a case with a large number of tills")
  assert.strictEqual(queueTime([2, 2, 3, 3, 4, 4], 2), 9, "wrong answer for a case with two tills")
})
;(function () {
  function testFn(customers, n) {
    let time = 0
    let tills = Array(n).fill(0)
    while (customers.length != 0) {
      if (tills.indexOf(0) != -1) {
        tills[tills.indexOf(0)] = customers.shift()
      } else {
        let tdelta = Math.min(...tills)
        time += tdelta
        tills = tills.map(function (x) {
          return x - tdelta
        })
      }
    }
    return time + Math.max(...tills)
  }

  it("Short random tests", function () {
    for (let i = 0; i < 10; i++) {
      let len = Math.floor(Math.random() * 20 + 10)
      let testArr = Array(len)
        .fill(50)
        .map((x) => Math.floor(x * Math.random()) + 1)
      let testArrCopy = testArr.slice()
      let testN = Math.floor(Math.random() * 6) + 1
      let message = "Wrong answer for customers = [" + testArr.toString() + "] and n = " + testN
      assert.strictEqual(queueTime(testArr, testN), testFn(testArrCopy, testN), message)
    }
  })

  it("Long random tests", function () {
    for (let i = 0; i < 10; i++) {
      let len = Math.floor(Math.random() * 140 + 10)
      let testArr = Array(len)
        .fill(20)
        .map((x) => Math.floor(x * Math.random()) + 1)
      let testArrCopy = testArr.slice()
      let testN = Math.floor(Math.random() * 20) + 1
      let message = "Wrong answer for customers = [" + testArr.toString() + "] and n = " + testN
      assert.strictEqual(queueTime(testArr, testN), testFn(testArrCopy, testN), message)
    }
  })

  it("Big number random tests", function () {
    for (let i = 0; i < 10; i++) {
      let len = Math.floor(Math.random() * 40 + 10)
      let testArr = Array(len)
        .fill(100)
        .map((x) => Math.floor(x * (Math.random() ^ 2)) + 1)
      let testArrCopy = testArr.slice()
      let testN = Math.floor(Math.random() * 10) + 1
      let message = "Wrong answer for customers = [" + testArr.toString() + "] and n = " + testN
      assert.strictEqual(queueTime(testArr, testN), testFn(testArrCopy, testN), message)
    }
  })
})()
