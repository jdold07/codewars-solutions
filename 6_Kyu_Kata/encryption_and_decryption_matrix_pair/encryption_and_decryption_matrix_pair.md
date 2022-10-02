# 6 kyu - Encryption and decryption--Matrix pair

##### **ID**: [5827ba50c983ca5d8b000a0d](https://www.codewars.com/kata/5827ba50c983ca5d8b000a0d) | **Slug**: [encryption-and-decryption-matrix-pair](https://www.codewars.com/kata/5827ba50c983ca5d8b000a0d) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2016-11-13 ***by*** [myjinxin2015](https://www.codewars.com/users/myjinxin2015) | **Approved**: 2018-01-21 ***by*** [smile67](https://www.codewars.com/users/smile67)

##### **Languages Available**: javascript

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-09-21

---

## Kata Description


>When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process  --myjinxin2015 said



# Description:

 Please complete the function `encryption` in accordance with the following rules:

 

 - Argument 1: `key`. It's a 5x5 matrix that contains 25 letters(No duplicate and always be lowercase). Given by a string, each row separated by "\n", each letter separated by spaces:

 ```

 key =

 a b c d e

 f g h i j

 k l m n o

 p q r s t

 u v w x y

 ```

 - Argument 2: `str`. It's the string which need to encrypt. The string always contains only lowercase letters.

 ```

 str = "example"

 ```

 - In encryption. At first we need group the string in accordance with two characters(If the length of the string is odd, the last letter is not encrypted):

 ```

 ex | am | pl | (e)

 ```

 - If the two letters are on the vertex of the diagonal of a sub matrix, replace them with the letters on the other diagonal vertices(same row exchange):

 

```

 d<--e      a --> c

  d e        a b c

  i j        f g h

  n o        k l m       k<--l

  s t       k <-- m       k l

  x y                     p q

 x-->y                   p-->q

 

 "example" encrypt to "dyckqke"

```



  - Exception 1: if two letters are in the same row or the same column, swap them:

  ```

  "ab" --> "ba"

  ```

  - Exception 2: if two letters are the same or one letter is not appear in matrix(in the `key` above is "z"), do not encrypt them:

  ```

  "aa" --> "aa"     "az" --> "az"

  ```

  - Run the function with the encrypted string, the string shoule be decrypt to the original string ;-)

  

# Some examples:



```

key=

`a b c d e

f g h i j

k l m n o

p q r s t

u v w x y`

encryption(key,"example") === "dyckqke"

encryption(key,"dyckqke") === "example"



encryption(key,"codewars") === "emeducsr"

encryption(key,"emeducsr") === "codewars"



encryption(key,"zyx") === "zyx"



```



---


🏷 `PUZZLES | ALGORITHMS | MATRIX | CIPHERS | CRYPTOGRAPHY`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5827ba50c983ca5d8b000a0d)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
