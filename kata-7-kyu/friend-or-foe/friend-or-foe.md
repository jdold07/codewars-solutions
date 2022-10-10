# 7 kyu - Friend or Foe?

##### **ID**: [55b42574ff091733d900002f](https://www.codewars.com/kata/55b42574ff091733d900002f) | **Slug**: [friend-or-foe](https://www.codewars.com/kata/55b42574ff091733d900002f) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2015-07-26 ***by*** [Aweson1](https://www.codewars.com/users/Aweson1) | **Approved**: 2016-11-26 ***by*** [suic](https://www.codewars.com/users/suic)

##### **Languages Available**: python, ruby, csharp, javascript, coffeescript, haskell, julia, crystal, factor

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2021-11-07

---

## Kata Description


Make a program that filters a list of strings and returns a list with only your friends name in it.



If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...



~~~if-not:factor

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

~~~



~~~if:factor

Ex: Input = `{ "Ryan" "Kieran" "Jason" "Yous" }`, Output = `{ "Ryan" "Yous" }`

~~~



i.e.

```haskell

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

```



```factor

{ "Ryan" "Kieran" "Mark" } friend -> { "Ryan" "Mark" }

```





Note: keep the original order of the names in the output.

---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/55b42574ff091733d900002f)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
