# 6 kyu - Prize Draw

##### **ID**: [5616868c81a0f281e500005c](https://www.codewars.com/kata/5616868c81a0f281e500005c) | **Slug**: [prize-draw](https://www.codewars.com/kata/5616868c81a0f281e500005c) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-10-08 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2015-11-06 ***by*** [joh_pot](https://www.codewars.com/users/joh_pot)

##### **Languages Available**: ruby, python, javascript, coffeescript, haskell, java, csharp, clojure, cpp, php, crystal, c, typescript, rust, swift, r, shell, fsharp, ocaml, scala, julia, powershell, go, nim, reason, racket, kotlin, pascal, perl, lua, elm, d, prolog

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-09-10

---

## Kata Description


To participate in a prize draw each one gives his/her firstname. 



Each letter of a firstname

has a value which is its rank in the English alphabet. `A` and `a` have rank `1`, `B` and `b` rank `2` and so on. 



The *length* of the firstname is added to the *sum* of these ranks hence a number `som`. 



An array of random weights is linked to the firstnames and each `som` is multiplied by its corresponding weight to get what they call a `winning number`.



#### Example:

```

names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"

weights: [1, 4, 4, 5, 2, 1]



PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54

The *weight* associated with PauL is 2 so PauL's *winning number* is 54 * 2 = 108.

```

Now one can sort the firstnames in *decreasing* order of the `winning numbers`. When two people have the same `winning number` sort them *alphabetically* by their firstnames.



#### Task:



- parameters: `st` a string of firstnames, `we` an array of weights, `n` a rank 



- return: the firstname of the participant whose rank is `n` 

(ranks are numbered from 1)



#### Example:

```

names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"

weights: [1, 4, 4, 5, 2, 1]

n: 4



The function should return: "PauL"

```

#### Notes:

- The weight array is at least as long as the number of names, it may be longer.



- If `st` is empty return "No participants".



- If n is greater than the number of participants then return "Not enough participants".



- See Examples Test Cases for more examples.

---


🏷 `FUNDAMENTALS | STRINGS | SORTING`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5616868c81a0f281e500005c)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
