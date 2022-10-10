# 6 kyu - Consonant value

##### **ID**: [59c633e7dcc4053512000073](https://www.codewars.com/kata/59c633e7dcc4053512000073) | **Slug**: [consonant-value](https://www.codewars.com/kata/59c633e7dcc4053512000073) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2017-09-25 ***by*** [KenKamau](https://www.codewars.com/users/KenKamau) | **Approved**: 2017-09-25 ***by*** [Blind4Basics](https://www.codewars.com/users/Blind4Basics)

##### **Languages Available**: javascript, python, ruby, haskell, csharp, c, nasm, coffeescript, crystal, php, typescript, go, dart, cpp, java, elixir

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2021-11-09

---

## Kata Description


Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except `"aeiou"`. 



We shall assign the following values: `a = 1, b = 2, c = 3, .... z = 26`.



For example, for the word "zodiacs", let's cross out the vowels. We get: "z **~~o~~** d **~~ia~~** cs"



```haskell

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.

solve("zodiacs") = 26



For the word "strength", solve("strength") = 57

-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

```



For C: do not mutate input.



More examples in test cases. Good luck!



If you like this Kata, please try:



[Word values](https://www.codewars.com/kata/598d91785d4ce3ec4f000018)



[Vowel-consonant lexicon](https://www.codewars.com/kata/59cf8bed1a68b75ffb000026)

---


🏷 `STRINGS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/59c633e7dcc4053512000073)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
