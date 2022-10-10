# 5 kyu - Where my anagrams at?

##### **ID**: [523a86aa4230ebb5420001e1](https://www.codewars.com/kata/523a86aa4230ebb5420001e1) | **Slug**: [where-my-anagrams-at](https://www.codewars.com/kata/523a86aa4230ebb5420001e1) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">5 kyu</span>

##### **First Published**: 2013-09-19 ***by*** [sandbochs](https://www.codewars.com/users/sandbochs) | **Approved**: *not available* ***by*** [*not available*](*https://www.codewars.com*)

##### **Languages Available**: javascript, coffeescript, ruby, haskell, python, csharp, php, r, objc, rust, go, factor

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2021-11-28

---

## Kata Description


What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:



```

'abba' & 'baab' == true



'abba' & 'bbaa' == true



'abba' & 'abbba' == false



'abba' & 'abca' == false

```



Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:



```javascript

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']



anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']



anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

```



```if:go

Empty string slice is expected when there are no anagrams found.

```

---


🏷 `STRINGS | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/523a86aa4230ebb5420001e1)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
