# 6 kyu - Convert integer to Whitespace format

##### **ID**: [55b350026cc02ac1a7000032](https://www.codewars.com/kata/55b350026cc02ac1a7000032) | **Slug**: [convert-integer-to-whitespace-format](https://www.codewars.com/kata/55b350026cc02ac1a7000032) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-07-25 ***by*** [MMMAAANNN](https://www.codewars.com/users/MMMAAANNN) | **Approved**: 2015-08-11 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: python, coffeescript, javascript, ruby, csharp, c, cpp, java, julia, elixir, haskell

##### **My Completed Languages**: javascript, coffeescript, python ***as at*** 2022-10-05 | **Originally completed**: 2022-09-26

---

## Kata Description


# Story

Hereinafter, `[space]` refers to `" "`, `[tab]` refers to `"\t"`, and `[LF]` refers to `"\n"` for illustrative purposes. This does not mean that you can use these placeholders in your solution.



In esoteric language called [Whitespace](http://compsoc.dur.ac.uk/whitespace/), numbers are represented in the following format:



* first character represents the sign: `[space]` for plus, `[tab]` for minus;

* characters after that are the binary representation of the absolute value of the number, with `[space]` for 0, `[tab]` for 1, the rightmost bit is the least significand bit, and no leading zero bits.

* the binary representation is immediately followed by `[LF]`.



# Notes

* Valid Whitespace number must always have at least two characters: a sign and the terminator. In case there are only two characters, the number is equal to zero.

* For the purposes of this kata, zero must always be represented as `[space][LF]`.

* In Whitespace, only space, tabulation and linefeed are meaningful characters. All other characters are ignored. However, for the purposes of this simple kata, please do not add any other characters in the output.

* In this kata, input will always be a valid negative or positive integer.

* For your convenience, in this kata we will use `unbleach()` function when evaluating your results. This function replaces whitespace characters with `[space]`, `[tab]`, and `[LF]` to make fail messages more obvious. You can see how it works in Example Test Cases.



# Examples

* `1` in Whitespace is `" \t\n"`.

* `0` in Whitespace is `" \n"`.

* `-1` in Whitespace is `"\t\t\n"`.

* `2` in Whitespace is `" \t \n"`.

* `-3` in Whitespace is `"\t\t\t\n"`.



# More on Whitespace

If you liked this kata, you may also enjoy a much harder Whitespace-related kata: [Whitespace interpreter](http://www.codewars.com/kata/whitespace-interpreter) by @jacobb.

---


🏷 `BINARY | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/55b350026cc02ac1a7000032)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
