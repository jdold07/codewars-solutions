# 7 kyu - Last Survivor

##### **ID**: [609eee71109f860006c377d1](https://www.codewars.com/kata/609eee71109f860006c377d1) | **Slug**: [last-survivor](https://www.codewars.com/kata/609eee71109f860006c377d1) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2021-05-14 ***by*** [Schulzkafer](https://www.codewars.com/users/Schulzkafer) | **Approved**: 2021-05-17 ***by*** [JohanWiltink](https://www.codewars.com/users/JohanWiltink)

##### **Languages Available**: javascript, haskell, python, csharp, prolog, powershell, julia, fsharp, typescript, c, java

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-09-11

---

## Kata Description


You are given a string of letters and an array of numbers.  

The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.  

After each removal the size of the string decreases (there is no empty space).  

Return the only letter left.



Example:





~~~if-not:java

```

let str = "zbk", arr = [0, 1]

    str = "bk", arr = [1]

    str = "b", arr = []

    return 'b'

```

~~~



~~~if:java

```java

    str = "zbk", arr = {0, 1}

    str = "bk", arr = {1}

    str = "b", arr = {}

    return "b"

```

~~~



#### Notes



* The given string will never be empty.

* The length of the array is always one less than the length of the string.

* All numbers are valid.

* There can be duplicate letters and numbers.



If you like this kata, check out the next one: [Last Survivors Ep.2](https://www.codewars.com/kata/60a1aac7d5a5fc0046c89651)



---


🏷 `FUNDAMENTALS | ARRAYS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/609eee71109f860006c377d1)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
