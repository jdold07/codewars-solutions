# 6 kyu - Help the bookseller !

##### **ID**: [54dc6f5a224c26032800005c](https://www.codewars.com/kata/54dc6f5a224c26032800005c) | **Slug**: [help-the-bookseller](https://www.codewars.com/kata/54dc6f5a224c26032800005c) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-02-12 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2015-04-11 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: java, ruby, python, csharp, javascript, clojure, haskell, coffeescript, cpp, php, c, typescript, swift, crystal, r, shell, ocaml, fsharp, julia, scala, go, nim, rust, racket, kotlin, groovy, dart, pascal, lua, perl, elm, d, erlang, prolog

##### **My Completed Languages**: python ***as at*** 2022-10-02 | **Originally completed**: 2022-04-27

---

## Kata Description


A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. 

Each book has a code `c` of 3, 4, 5 or more characters. The **1st** character of a code is a capital letter which defines the book category.

  

  In the bookseller's stocklist each code `c` is followed by a space and by a positive integer n (int n >= 0) 

  which indicates the quantity of books of this code in stock.



For example an extract of a stocklist could be:

```

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.

or

L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....

```



  You will be given a stocklist (e.g. : L) and a list of categories in capital letters 

  e.g : 

```

M = {"A", "B", "C", "W"} 

or

M = ["A", "B", "C", "W"] or ...

```

  

  and your task is to find all the books of L with codes 

  belonging to each category of M and to sum their quantity according to each category. 





  For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket/Prolog a list of pairs):  

  ```

  (A : 20) - (B : 114) - (C : 50) - (W : 0)

  ```  



  where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding

  to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.



  If L or M are empty return string is `""` (Clojure/Racket/Prolog should return an empty array/list instead).

  

#### Notes:

- In the result codes and their values are in the same order as in M.

- See "Samples Tests" for the return.



---


🏷 `FUNDAMENTALS | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/54dc6f5a224c26032800005c)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
