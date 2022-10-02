# 6 kyu - Salesman's Travel

##### **ID**: [56af1a20509ce5b9b000001e](https://www.codewars.com/kata/56af1a20509ce5b9b000001e) | **Slug**: [salesmans-travel](https://www.codewars.com/kata/56af1a20509ce5b9b000001e) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2016-02-01 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2016-02-08 ***by*** [NaMe613](https://www.codewars.com/users/NaMe613)

##### **Languages Available**: ruby, python, javascript, coffeescript, haskell, clojure, csharp, java, cpp, php, c, typescript, swift, elixir, r, shell, ocaml, kotlin, fsharp, scala, julia, powershell, go, nim, rust, pascal, perl, elm, d

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-09-13

---

## Kata Description


A traveling salesman has to visit clients. He got each client's address e.g. `"432 Main Long Road St. Louisville OH 43071"` as a list.



The basic zipcode format usually consists of two capital letters followed by a white space and five digits.

The list of clients to visit was given as a string of all addresses, each separated from the others by a comma, e.g. :



`"123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"`.



To ease his travel he wants to group the list by zipcode.

#### Task

The function `travel` will take two parameters `r` (addresses' list of all clients' as a string) and `zipcode` and returns a string in the following format:



`zipcode:street and town,street and town,.../house number,house number,...` 



The street numbers must be in the same order as the streets where they belong.



If a given zipcode doesn't exist in the list of clients' addresses return `"zipcode:/"`



#### Examples

```

r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"



travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"



travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"



travel(r, "NY 5643") --> "NY 5643:/"

```



#### Note for Elixir:

In Elixir the empty addresses' input is an empty *list*, not an empty string.



#### Note: 

You can see a few addresses and zipcodes in the test cases.

---


🏷 `FUNDAMENTALS | STRINGS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/56af1a20509ce5b9b000001e)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
