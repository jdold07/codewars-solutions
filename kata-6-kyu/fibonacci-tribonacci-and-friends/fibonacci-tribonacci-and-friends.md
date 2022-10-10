# 6 kyu - Fibonacci, Tribonacci and friends

##### **ID**: [556e0fccc392c527f20000c5](https://www.codewars.com/kata/556e0fccc392c527f20000c5) | **Slug**: [fibonacci-tribonacci-and-friends](https://www.codewars.com/kata/556e0fccc392c527f20000c5) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-06-03 ***by*** [GiacomoSorbi](https://www.codewars.com/users/GiacomoSorbi) | **Approved**: 2015-06-05 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: python, ruby, javascript, haskell, java, coffeescript, csharp, crystal, fsharp, cpp, php, go

##### **My Completed Languages**: python ***as at*** 2022-10-08 | **Originally completed**: 2022-05-01

---

## Kata Description


If you have completed the <a href="http://www.codewars.com/kata/tribonacci-sequence" target="_blank" title="Tribonacci sequence">Tribonacci sequence kata</a>, you would know by now that mister Fibonacci has at least a bigger brother. If not, give it a quick look to get how things work.



Well, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well *Cinquebonacci* would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.



Well, guess what? You have to build a Xbonacci function that takes a **signature** of X elements *- and remember each next element is the sum of the last X elements -* and returns the first **n** elements of the so seeded sequence.



```

xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}

xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}

xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}

xbonacci {1,1} produces the Fibonacci sequence

```

---


🏷 `ARRAYS | LISTS | NUMBER THEORY | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/556e0fccc392c527f20000c5)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
