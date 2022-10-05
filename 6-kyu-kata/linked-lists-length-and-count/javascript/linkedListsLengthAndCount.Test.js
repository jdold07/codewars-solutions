// 6 kyu - Linked Lists - Length & Count  [ ID: 55beec7dd347078289000021  (linked-lists-length-and-count) ]
// URL: https://www.codewars.com/kata/55beec7dd347078289000021
// Category: REFERENCE  |  Tags: LINKED LISTS | DATA STRUCTURES | FUNDAMENTALS
// *****************************************************************************
const { assert } = require("chai")

it("tests for counting the length of a linked list.", function () {
  assert.strictEqual(length(null), 0, "Length of null list should be zero.")
  assert.strictEqual(length(new Node(99)), 1, "Length of single node list should be one.")
  assert.strictEqual(length(buildOneTwoThree()), 3, "Length of the three node list should be three.")
})

it("tests for counting occurrences of a particular integer in a linked list.", function () {
  const list = buildOneTwoThree()
  assert.strictEqual(count(list, 1), 1, "list should only contain one 1.")
  assert.strictEqual(count(list, 2), 1, "list should only contain one 2.")
  assert.strictEqual(count(list, 3), 1, "list should only contain one 3.")
  assert.strictEqual(count(list, 99), 0, "list should return zero for integer not found in list.")
  assert.strictEqual(count(null, 1), 0, "null list should always return count of zero.")
})

it("tests for counting multiple occurrences of a particular integer in a linked list.", function () {
  const list = buildNodes([1, 1, 1, 2, 2, 2, 2, 3, 3])
  assert.strictEqual(count(list, 1), 3, "list should contain three 1's.")
  assert.strictEqual(count(list, 2), 4, "list should contain four 2's.")
  assert.strictEqual(count(list, 3), 2, "list should contain two 3's.")
})

const rnd = (m, n = 0) => (Math.random() * (n - m) + m) | 0
const rndList = (size) => Array.from({ length: rnd(size) }, () => rnd(size))

it("random tests: length", () => {
  const refLength = (xs) => xs.length
  for (let i = 1; i <= 100; i++) {
    const xs = rndList(i)
    const actual = length(buildNodes(xs))
    const expected = refLength(xs)
    assert.strictEqual(actual, expected, `length( ${[...xs, "null"].join(" -> ")} )`)
  }
})

it("random tests: count", () => {
  const refCount = (xs, x) => xs.filter((y) => y === x).length
  for (let i = 1; i <= 100; i++) {
    const xs = rndList(i),
      x = rnd(i)
    const actual = count(buildNodes(xs), x)
    const expected = refCount(xs, x)
    assert.strictEqual(actual, expected, `count( ${[...xs, "null"].join(" -> ")}, ${x} )`)
  }
})
