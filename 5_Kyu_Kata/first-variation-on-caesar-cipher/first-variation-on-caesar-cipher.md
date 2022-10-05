# 5 kyu - First Variation on Caesar Cipher

##### **ID**: [5508249a98b3234f420000fb](https://www.codewars.com/kata/5508249a98b3234f420000fb) | **Slug**: [first-variation-on-caesar-cipher](https://www.codewars.com/kata/5508249a98b3234f420000fb) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">5 kyu</span>

##### **First Published**: 2015-03-17 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2015-06-05 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: java, csharp, ruby, python, javascript, coffeescript, clojure, haskell, cpp, php, c, typescript, swift, crystal, r, shell, ocaml, go, nim, racket, fsharp, scala, fortran, d

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-09-20

---

## Kata Description


The action of a Caesar cipher is to replace each plaintext letter (plaintext letters are from 'a' to 'z' or from 'A' to 'Z') with a different one a fixed number of places up or down the alphabet.



This program performs a variation of the Caesar shift. The shift increases by 1 for each **character** (on each iteration).



If the shift is initially 1, the first character of the message to be

encoded will be shifted by 1, the second character will be

shifted by 2, etc...



#### Coding: Parameters and return of function "movingShift"



param s: a string to be coded



param shift: an integer giving the initial shift



The function "movingShift" *first* codes the entire string and *then* returns an array of strings 

containing the coded string in 5 parts (five parts

because, to avoid more risks, the coded message will be given to five

runners, one piece for each runner). 



If possible the message will be equally divided by message length between the five runners. If this is not possible, parts 1 to 5 will have subsequently non-increasing lengths, such that parts 1 to 4 are at least as long as when evenly divided, but at most 1 longer. If the last part is the empty string this empty string must be shown in the resulting array.



For example, if the coded message has a length of 17 the five parts will have lengths of 4, 4, 4, 4, 1. The parts 1, 2, 3, 4 are evenly split and the last part of length 1 is shorter. If the length is 16 the parts will be of lengths 4, 4, 4, 4, 0. Parts 1, 2, 3, 4 are evenly split and the fifth runner will stay at home since his part is the empty string. If the length is 11, equal parts would be of length 2.2, hence parts will be of lengths 3, 3, 3, 2, 0.



You will also implement a "demovingShift" function with two parameters 



#### Decoding: parameters and return of function "demovingShift"



1) an array of strings: s (possibly resulting from "movingShift", with 5 strings)



2) an int shift



"demovingShift" returns a string.



#### Example: 



u = "I should have known that you would have a perfect answer for me!!!"



`movingShift(u, 1)` returns : 



v = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]



(quotes added in order to see the strings and the spaces, your program won't write these quotes, see Example Test Cases)



and `demovingShift(v, 1)` returns u.

#Ref:



Caesar Cipher : http://en.wikipedia.org/wiki/Caesar_cipher



---


🏷 `FUNDAMENTALS | CIPHERS | STRINGS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5508249a98b3234f420000fb)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
