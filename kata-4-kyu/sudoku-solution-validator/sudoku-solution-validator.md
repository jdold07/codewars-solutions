# 4 kyu - Sudoku Solution Validator

##### **ID**: [529bf0e9bdf7657179000008](https://www.codewars.com/kata/529bf0e9bdf7657179000008) | **Slug**: [sudoku-solution-validator](https://www.codewars.com/kata/529bf0e9bdf7657179000008) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:blue">4 kyu</span>

##### **First Published**: 2013-12-02 ***by*** [xDranik](https://www.codewars.com/users/xDranik) | **Approved**: 2013-12-05 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, coffeescript, python, ruby, csharp, php, java, clojure, c, cpp, go, scala, prolog, rust

##### **My Completed Languages**: python ***as at*** 2022-10-08 | **Originally completed**: 2022-05-05

---

## Kata Description


### Sudoku Background



Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9. <br/>

(More info at: http://en.wikipedia.org/wiki/Sudoku)



### Sudoku Solution Validator



Write a function `validSolution`/`ValidateSolution`/`valid_solution()` that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.



The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

 



### Examples



```

validSolution([

  [5, 3, 4, 6, 7, 8, 9, 1, 2],

  [6, 7, 2, 1, 9, 5, 3, 4, 8],

  [1, 9, 8, 3, 4, 2, 5, 6, 7],

  [8, 5, 9, 7, 6, 1, 4, 2, 3],

  [4, 2, 6, 8, 5, 3, 7, 9, 1],

  [7, 1, 3, 9, 2, 4, 8, 5, 6],

  [9, 6, 1, 5, 3, 7, 2, 8, 4],

  [2, 8, 7, 4, 1, 9, 6, 3, 5],

  [3, 4, 5, 2, 8, 6, 1, 7, 9]

]); // => true

```



```

validSolution([

  [5, 3, 4, 6, 7, 8, 9, 1, 2], 

  [6, 7, 2, 1, 9, 0, 3, 4, 8],

  [1, 0, 0, 3, 4, 2, 5, 6, 0],

  [8, 5, 9, 7, 6, 1, 0, 2, 0],

  [4, 2, 6, 8, 5, 3, 7, 9, 1],

  [7, 1, 3, 9, 2, 4, 8, 5, 6],

  [9, 0, 1, 5, 3, 7, 2, 1, 4],

  [2, 8, 7, 4, 1, 9, 6, 3, 5],

  [3, 0, 0, 4, 8, 1, 1, 7, 9]

]); // => false

```

---


🏷 `DATA STRUCTURES | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/529bf0e9bdf7657179000008)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
