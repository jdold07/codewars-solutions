#+ =====================================================================================================================
#+
#+ 8 kyu - Remove String Spaces  [ ID: 57eae20f5500ad98e50002c5 ] (remove-string-spaces)
#+ URL: https://www.codewars.com/kata/57eae20f5500ad98e50002c5
#+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
#+
#+ =====================================================================================================================

{ assert } = require "vitest"
{ noSpace } = require "./removeStringSpaces"

describe "Basic tests", ->
  assert.strictEqual noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"), "8j8mBliB8gimjB8B8jlB"
  assert.strictEqual noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"), "88Bifk8hB8BB8BBBB888chl8BhBfd"
  assert.strictEqual noSpace("8aaaaa dddd r     "), "8aaaaaddddr"
  assert.strictEqual noSpace("jfBm  gk lf8hg  88lbe8 "), "jfBmgklf8hg88lbe8"
  assert.strictEqual noSpace("8j aam"), "8jaam"

describe "Random tests", ->
  randint = (a, b) ->
    ~~(Math.random() * (b - a + 1)) + a

  names = [
    "a"
    "b"
    "c"
    "d"
    "e"
    "f"
    "g"
    "h"
    "i"
    "j"
    "k"
    "l"
    "m"
    "n"
    "o"
    "P"
    "q"
    "r"
    "s"
    "t"
    "u"
    "v"
    "w"
    "x"
    "y"
    "z"
    "0"
    "1"
    "2"
    "3"
    "4"
    "5"
    "6"
    "7"
    "8"
    "9"
    " "
    " "
    " "
    " "
    " "
    " "
  ]

  mynoSpace = (x) ->
    x.split(" ").join ""

  i = 0
  while i < 100
    x = []
    len = randint 1, 30
    k = 0
    while k < len
      x.push names[randint 0, names.length - 1]
      k++
    x = x.join ""
    it "Testing for #{x}", ->
      assert.strictEqual noSpace(x), mynoSpace(x), "It should work for random inputs too"
    i++
