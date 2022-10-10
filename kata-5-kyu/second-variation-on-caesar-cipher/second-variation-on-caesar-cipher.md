# 5 kyu - Second Variation on Caesar Cipher

##### **ID**: [55084d3898b323f0aa000546](https://www.codewars.com/kata/55084d3898b323f0aa000546) | **Slug**: [second-variation-on-caesar-cipher](https://www.codewars.com/kata/55084d3898b323f0aa000546) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">5 kyu</span>

##### **First Published**: 2015-03-18 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2015-11-07 ***by*** [joh_pot](https://www.codewars.com/users/joh_pot)

##### **Languages Available**: ruby, python, java, javascript, coffeescript, csharp, haskell, clojure, cpp, php, c, typescript, swift, crystal, r, ocaml, go, fsharp, scala, d

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-09-19

---

## Kata Description


In this country soldiers are poor but they need a certain level of secrecy for their communications so, though they do not know Caesar cypher, they reinvent it in the following way.



The action of a Caesar cipher is to replace each plaintext letter (plaintext letters are from 'a' to 'z' or from 'A' to 'Z') with a different one a fixed number of places up or down the alphabet. This displacement of a number of places is called the "shift" or the "rotate" of the message. For example, if the shift is `1` letter `a` becomes `b` and `A` becomes `B`; the shift is cyclic so, with a shift of `1`, `z` becomes `a` and `Z` becomes`A`.



They use ASCII, without really knowing it, but code only letters a-z and A-Z. Other characters are kept such as.



They change the "rotate" each new message. This "rotate" is a prefix for their message once the message is coded. The prefix is built of 2 letters, the second one being shifted from the first one by the "rotate", the first one is the first letter, after being downcased,

of the uncoded message.



For example if the "rotate" is 2, if the first letter of the uncoded message is 'J' the prefix should be 'jl'.



To lessen risk they cut the coded message and the prefix in five pieces since they have only five runners and each runner has only one piece. 



If possible the message will be evenly split between the five runners; if not possible, parts 1, 2, 3, 4 will be longer and part 5 shorter. The fifth part can have length equal to the other ones or shorter. If there are many options of how to split, choose the option where the fifth part has the longest length, provided that the previous conditions are fulfilled. *If the last part is the empty string don't put this empty string in the resulting array.*



For example, if the coded message has a length of 17 the five parts will have lengths of 4, 4, 4, 4, 1. The parts 1, 2, 3, 4 are evenly split and the last part of length 1 is shorter. If the length is 16 the parts will be of lengths 4, 4, 4, 4, 0. Parts 1, 2, 3, 4 are evenly split and the fifth runner will stay at home since his part is the empty string and is not kept.



Could you ease them in programming their coding?



Example with shift = 1 :



message : "I should have known that you would have a perfect answer for me!!!"



code : => ["ijJ tipvme ibw", "f lopxo uibu z", "pv xpvme ibwf ", "b qfsgfdu botx", "fs gps nf!!!"]



By the way, maybe could you give them a hand to decode?



Caesar cipher : see Wikipedia



---


🏷 `FUNDAMENTALS | CIPHERS | CRYPTOGRAPHY`


[View this Kata on Codewars.com](https://www.codewars.com/kata/55084d3898b323f0aa000546)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
