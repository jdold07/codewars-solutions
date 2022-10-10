# 6 kyu - Data Reverse

##### **ID**: [569d488d61b812a0f7000015](https://www.codewars.com/kata/569d488d61b812a0f7000015) | **Slug**: [data-reverse](https://www.codewars.com/kata/569d488d61b812a0f7000015) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2016-01-19 ***by*** [sataman](https://www.codewars.com/users/sataman) | **Approved**: 2016-10-01 ***by*** [suic](https://www.codewars.com/users/suic)

##### **Languages Available**: csharp, python, java, haskell, ruby, javascript, nasm, c, cobol

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2021-11-11

---

## Kata Description


A stream of data is received and needs to be reversed.



Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:



```

11111111  00000000  00001111  10101010

 (byte1)   (byte2)   (byte3)   (byte4)

```



should become:



```

10101010  00001111  00000000  11111111

 (byte4)   (byte3)   (byte2)   (byte1)

```



The total number of bits will always be a multiple of 8.



The data is given in an array as such:



```

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

```



Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.

---


🏷 `ARRAYS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/569d488d61b812a0f7000015)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
