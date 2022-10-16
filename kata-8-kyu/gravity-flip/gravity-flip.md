# 8 kyu - Gravity Flip

##### **ID**: [5f70c883e10f9e0001c89673](https://www.codewars.com/kata/5f70c883e10f9e0001c89673) | **Slug**: [gravity-flip](https://www.codewars.com/kata/5f70c883e10f9e0001c89673) | **Category**: `GAMES` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2020-09-27 ***by*** [LogicalX](https://www.codewars.com/users/LogicalX) | **Approved**: 2020-10-09 ***by*** [JohanWiltink](https://www.codewars.com/users/JohanWiltink)

##### **Languages Available**: python, javascript, c, haskell, ruby, prolog, commonlisp, fortran, powershell, typescript, cfml, rust, julia, php, clojure, swift, coffeescript, crystal, cpp, csharp, java, r, cobol, d

##### **My Completed Languages**: typescript, javascript ***as at*** 2022-10-16 | **Originally completed**: 2022-10-16

---

## Kata Description


If you've completed this kata already and want a bigger challenge, here's the [3D version](https://www.codewars.com/kata/5f849ab530b05d00145b9495/)



Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity. 



There are some columns of toy cubes in the box arranged in a line. The `i`-th column contains `a_i` cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, `d`, which can be either `'L'` or `'R'` (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.



```

+---+                                       +---+

|   |                                       |   |

+---+                                       +---+

+---++---+     +---+              +---++---++---+

|   ||   |     |   |   -->        |   ||   ||   |

+---++---+     +---+              +---++---++---+

+---++---++---++---+         +---++---++---++---+

|   ||   ||   ||   |         |   ||   ||   ||   |

+---++---++---++---+         +---++---++---++---+

```



Given the initial configuration of the cubes in the box, find out how many cubes are in each of the `n` columns after Bob switches the gravity.



### Examples (input -> output:



```

* 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]

* 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

```



---


🏷 `FUNDAMENTALS | PUZZLES`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5f70c883e10f9e0001c89673)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
