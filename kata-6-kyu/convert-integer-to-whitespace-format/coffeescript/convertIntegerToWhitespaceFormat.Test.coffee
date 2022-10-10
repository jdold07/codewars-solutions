#+ =====================================================================================================================
#+
#+ 6 kyu - Convert integer to Whitespace format  [ ID: 55b350026cc02ac1a7000032 ] (convert-integer-to-whitespace-format)
#+ URL: https://www.codewars.com/kata/55b350026cc02ac1a7000032
#+ Category: REFERENCE  |  Tags: BINARY | FUNDAMENTALS
#+
#+ =====================================================================================================================

{ assert } = require "chai"
{ unbleach } = require "./convertIntegerToWhitespaceFormat"

unbleach = (ws) ->
  ws
    .replace(/ /g, "[space]")
    .replace /\t/g, "[tab]"
    .replace /\n/g, "[LF]"

tester1238971409 = (n, expected = undefined) ->
  it "Let's try it with #{n}:", ->
    actual = whitespaceNumber n
    if actual.match /[^ \n\t]/
      throw "Please return only spaces, tabs and newlines. " +
        "Other characters are not allowed.\n" +
        "Tests will convert the allowed characters" +
        "to readable tags for your convenience."
    expected ?=
      " \t"[~~(n < 0)] + (
        if n
          Math.abs n
            .toString 2
            .replace /0/g, " "
            .replace /1/g, "\t"
        else
          ""
      ) +
      "\n"
    assert.strictEqual unbleach(actual), unbleach expected

describe "Example tests", ->
  for [n, expected] in [[1, " \t\n"], [0, " \n"], [-1, "\t\t\n"], [2, " \t \n"], [-3, "\t\t\t\n"]]
    tester1238971409 n, expected

describe "Random tests", ->
  for i174271 in [1..37]
    limit = 2 ** i174271
    tester1238971409 ~~(9 - limit / 2 + Math.random() * limit)
