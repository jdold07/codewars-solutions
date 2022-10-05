# 8 kyu - Student's Final Grade

##### **ID**: [5ad0d8356165e63c140014d4](https://www.codewars.com/kata/5ad0d8356165e63c140014d4) | **Slug**: [students-final-grade](https://www.codewars.com/kata/5ad0d8356165e63c140014d4) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2018-04-13 ***by*** [ledocod](https://www.codewars.com/users/ledocod) | **Approved**: 2018-04-16 ***by*** [Voile](https://www.codewars.com/users/Voile)

##### **Languages Available**: javascript, fortran, python, csharp, php, ruby, c, nasm, julia, racket, typescript, cpp, r, coffeescript, crystal, cobol, haskell

##### **My Completed Languages**: python ***as at*** 2022-10-05 | **Originally completed**: 2022-04-20

---

## Kata Description


Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.



This function should take two arguments:

exam - grade for exam (from 0 to 100);

projects - number of completed projects (from 0 and above);



This function should return a number (final grade).

There are four types of final grades:

- 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.

- 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.

- 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.

- 0, in other cases



Examples(**Inputs**-->**Output**):

```

100, 12 --> 100

99, 0 --> 100

10, 15 --> 100



85, 5 --> 90



55, 3 --> 75



55, 0 --> 0

20, 2 --> 0

```



*Use Comparison and Logical Operators.



---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5ad0d8356165e63c140014d4)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
