# 6 kyu - Detect Pangram

##### **ID**: [545cedaa9943f7fe7b000048](https://www.codewars.com/kata/545cedaa9943f7fe7b000048) | **Slug**: [detect-pangram](https://www.codewars.com/kata/545cedaa9943f7fe7b000048) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2014-11-07 ***by*** [anindyabd](https://www.codewars.com/users/anindyabd) | **Approved**: 2014-11-14 ***by*** [xcthulhu](https://www.codewars.com/users/xcthulhu)

##### **Languages Available**: python, haskell, clojure, javascript, csharp, java, r, ruby, php, c, prolog, pascal, typescript, lambdacalc, factor

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2021-11-20

---

## Kata Description


A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant). 



Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.



```if:prolog

**Note for prolog users**: your task is to write a predicate **is_pangram/1** instead.

```

```if:lambdacalc

**For Lambda Calculus**: the string is a list of [BinaryScott-encoded numbers](https://github.com/codewars/lambda-calculus/wiki/encodings-guide#scott-binary-encoded-numerals) representing [Unicode code points](https://en.wikipedia.org/wiki/List_of_Unicode_characters#Basic_Latin).*



`succ :: Number -> Number` and `add :: Number -> Number -> Number` are provided for free, if you need them. Church boolean and Scott list encodings are also provided for free, but you can optionally use your own encodings by replacing the exported functions `if-then-else`, `nil`, and `cons`, which are used by the tests.



- purity: `LetRec`

- numEncoding: `BinaryScott`



**For example, the letter 'B' is represented by the decimal code point 66, which in big-endian binary is `1000010`, and therefore in little-endian BinaryScott would be `Bit0 (Bit1 (Bit0 (Bit0 (Bit0 (Bit0 (Bit1 End))))))`.*

```



---


🏷 `STRINGS | DATA STRUCTURES | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/545cedaa9943f7fe7b000048)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
