# 7 kyu - Check the exam

##### **ID**: [5a3dd29055519e23ec000074](https://www.codewars.com/kata/5a3dd29055519e23ec000074) | **Slug**: [check-the-exam](https://www.codewars.com/kata/5a3dd29055519e23ec000074) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2017-12-23 ***by*** [Dmitry Kudla](https://www.codewars.com/users/Dmitry%20Kudla) | **Approved**: 2017-12-23 ***by*** [smile67](https://www.codewars.com/users/smile67)

##### **Languages Available**: javascript, python, ruby, racket, typescript, c, rust, csharp

##### **My Completed Languages**: python ***as at*** 2022-10-05 | **Originally completed**: 2022-04-23

---

## Kata Description


The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers. 



The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).



If the score < 0, return 0.



For example:

```

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6

checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7

checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16

checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

```



---


🏷 `FUNDAMENTALS | ARRAYS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5a3dd29055519e23ec000074)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
