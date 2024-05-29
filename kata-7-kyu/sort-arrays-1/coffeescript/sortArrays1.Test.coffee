#+ =====================================================================================================================
#+
#+ 7 kyu - Sort arrays - 1  [ ID: 51f41b98e8f176e70d0002a8 ] (sort-arrays-1)
#+ URL: https://www.codewars.com/kata/51f41b98e8f176e70d0002a8
#+ Category: REFERENCE  |  Tags: SORTING | ARRAYS | FUNDAMENTALS
#+
#+ =====================================================================================================================

{ assert } = require "vitest"
{ sortme } = require "./sortArrays1"

describe "Basic Tests", ->
  it "Testing for basic tests", ->
    assert.deepEqual sortme(["one", "two", "three"]), ["one", "three", "two"]

describe "Random Tests", ->
  sol = (names) -> names.sort()

  randint = (min, max) -> Math.floor(Math.random() * (max - min + 1)) + min

  base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

  for i in [1..100]
    arr = Array.from length: randint(3, 6), (_, i) ->
      Array.from(length: randint(4, 10), -> base[randint 0, base.length - 1]).join ""
    expected = sol arr
    it "sortme(#{JSON.stringify arr}) should equal #{JSON.stringify expected}", ->
      assert.deepEqual sortme(arr.slice()), expected
