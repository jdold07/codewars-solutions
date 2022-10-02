# 5 kyu - Weight for weight

##### **ID**: [55c6126177c9441a570000cc](https://www.codewars.com/kata/55c6126177c9441a570000cc) | **Slug**: [weight-for-weight](https://www.codewars.com/kata/55c6126177c9441a570000cc) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">5 kyu</span>

##### **First Published**: 2015-08-08 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2015-08-11 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: ruby, python, javascript, haskell, java, csharp, clojure, coffeescript, cpp, php, crystal, c, typescript, rust, swift, fsharp, r, shell, ocaml, kotlin, objc, lua, scala, elixir, julia, powershell, go, nim, reason, racket, pascal, perl, elm, cobol, d, prolog

##### **My Completed Languages**: python ***as at*** 2022-10-02 | **Originally completed**: 2022-05-02

---

## Kata Description


My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because

each month a list with the weights of members is published and each month he is the last on the list

which means he is the heaviest. 



I am the one who establishes the list so I told him:

"Don't worry any more, I will modify the order of the list".

It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits. 



For example `99` will have "weight" `18`, `100` will have "weight" `1` so in the list `100` will come before `99`.



Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?



#### Example:

```

"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 



"100 180 90 56 65 74 68 86 99"



```



When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:



`180` is before `90` since, having the same "weight" (9),  it comes before as a *string*.



All numbers in the list are positive numbers and the list can be empty.



#### Notes



- it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers

- For C: The result is freed.





---


🏷 `ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/55c6126177c9441a570000cc)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
