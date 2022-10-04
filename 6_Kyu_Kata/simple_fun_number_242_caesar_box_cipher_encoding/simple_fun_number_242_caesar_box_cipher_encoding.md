# 6 kyu - Simple Fun #242: Caesar Box Cipher Encoding

##### **ID**: [590a853a093675b283000008](https://www.codewars.com/kata/590a853a093675b283000008) | **Slug**: [simple-fun-number-242-caesar-box-cipher-encoding](https://www.codewars.com/kata/590a853a093675b283000008) | **Category**: `GAMES` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2017-05-04 ***by*** [myjinxin2015](https://www.codewars.com/users/myjinxin2015) | **Approved**: 2018-08-11 ***by*** [docgunthrop](https://www.codewars.com/users/docgunthrop)

##### **Languages Available**: javascript

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-09-19

---

## Kata Description


# Task

`Caesar Box` is a simple transposition cipher used in the Roman Empire. It is described as the following two-step process:

```

The characters of the given message are broken into n lines

of equal lengths and stacked up;

The letters from the resulting rectangle are written from 

top to bottom column by column.```

Given a string `message`, count the number of different `n` such that the message, obtained by applying encoding two times, is the same as initial message.





# Input/Output





`[input]` string `message`



The initial message. It contains only lowercase english lettes.



`4 ≤ message.length ≤ 25.`



`[output]` an integer



The number of above-described `n`s



`1 < n < message.length.`



# Example



For `message = "abaaba"`, the output should be `2`.



It is possible to apply the encoding algorithm for `n = 2 or n = 3`.

```

For n = 2:



The first encoding: "abaaba" -> "aabbaa"

aba   ==>    aab

aba          baa

The second encoding: "aabbaa" -> "abaaba".

aab   ==>    aba

baa          aba



For n = 3:

The first encoding: "abaaba" -> "aabbaa"

ab   ==>  aa

aa        bb

ba        aa

The second encoding: "aabbaa" -> "abaaba".

aa   ==>  ab

bb        aa

aa        ba



```



For `message = "a_message"`, the output should be `1`.



It is possible to apply the encoding algorithm for `n = 3`.

```



The first encoding: "a_message" -> "aea_sgmse"

a_m   ==>    aea

ess          _sg

age          mse

The second encoding: "aea_sgmse" -> "a_message".

aea   ==>    a_m

_sg          ess

mse          age



```

---


🏷 `PUZZLES`


[View this Kata on Codewars.com](https://www.codewars.com/kata/590a853a093675b283000008)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
