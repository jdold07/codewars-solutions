# 6 kyu - Word a10n (abbreviation)

##### **ID**: [5375f921003bf62192000746](https://www.codewars.com/kata/5375f921003bf62192000746) | **Slug**: [word-a10n-abbreviation](https://www.codewars.com/kata/5375f921003bf62192000746) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2014-05-16 ***by*** [wthit56](https://www.codewars.com/users/wthit56) | **Approved**: 2014-10-14 ***by*** [OverZealous](https://www.codewars.com/users/OverZealous)

##### **Languages Available**: javascript, haskell, python, ruby, java, csharp, factor

##### **My Completed Languages**: javascript, python ***as at*** 2022-10-04 | **Originally completed**: 2022-05-01

---

## Kata Description


The word `i18n` is a common abbreviation of `internationalization` in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, `a11y` is an abbreviation of `accessibility`.



Write a function that takes a string and turns any and all "words" (see below) within that string of **length 4 or greater** into an abbreviation, following these rules:



* A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").

* The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").



## Example



```javascript

abbreviate("elephant-rides are really fun!")

//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*

// words (^):   "elephant" "rides" "are" "really" "fun"

//                123456     123     1     1234     1

// ignore short words:               X              X



// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"

// all non-word characters (*) remain in place

//                     "-"      " "    " "     " "     "!"

=== "e6t-r3s are r4y fun!"

```

---


🏷 `STRINGS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5375f921003bf62192000746)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
