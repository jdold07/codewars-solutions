# 7 kyu - Going to the cinema

##### **ID**: [562f91ff6a8b77dfe900006e](https://www.codewars.com/kata/562f91ff6a8b77dfe900006e) | **Slug**: [going-to-the-cinema](https://www.codewars.com/kata/562f91ff6a8b77dfe900006e) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2015-10-27 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2015-11-06 ***by*** [joh_pot](https://www.codewars.com/users/joh_pot)

##### **Languages Available**: ruby, python, javascript, haskell, java, csharp, clojure, coffeescript, cpp, elixir, typescript, php, crystal, fsharp, c, shell, ocaml, kotlin, fortran, scala, julia, r, powershell, go, nim, rust, reason, racket, forth, dart, haxe, swift, pascal, lua, perl, elm, d, erlang, prolog

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-08-25

---

## Kata Description


My friend John likes to go to the cinema. He can choose between system A and system B.

```

System A : he buys a ticket (15 dollars) every time

System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price, 

then for each additional ticket he pays 0.90 times the price paid for the previous ticket.

```

#### Example: 

If John goes to the cinema 3 times:

```

System A : 15 * 3 = 45

System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)

```

John wants to know how many times he must go to the cinema so that the *final result* of System B, when rounded *up* to the next dollar, will be cheaper than System A.



The function `movie` has 3 parameters: `card` (price of the card), `ticket` (normal price of 

a ticket), `perc` (fraction of what he paid for the previous ticket) and returns the first `n` such that

```

ceil(price of System B) < price of System A.

```

#### More examples:

```

movie(500, 15, 0.9) should return 43 

    (with card the total price is 634, with tickets 645)

movie(100, 10, 0.95) should return 24 

    (with card the total price is 235, with tickets 240)

```

---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/562f91ff6a8b77dfe900006e)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
