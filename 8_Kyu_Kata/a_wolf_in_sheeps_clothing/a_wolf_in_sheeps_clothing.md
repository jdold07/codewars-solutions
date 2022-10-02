# 8 kyu - A wolf in sheep's clothing

##### **ID**: [5c8bfa44b9d1192e1ebd3d15](https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15) | **Slug**: [a-wolf-in-sheeps-clothing](https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2019-03-15 ***by*** [jkempster34](https://www.codewars.com/users/jkempster34) | **Approved**: 2019-03-16 ***by*** [FArekkusu](https://www.codewars.com/users/FArekkusu)

##### **Languages Available**: javascript, python, haskell, java, typescript, rust, swift, scala

##### **My Completed Languages**: python ***as at*** 2022-10-02 | **Originally completed**: 2022-04-26

---

## Kata Description


Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them. 



Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing **at the front of the queue** which is at the end of the array:



```

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)

   7      6      5      4      3            2      1

```



If the wolf is the closest animal to you, return `"Pls go away and stop eating my sheep"`. Otherwise, return `"Oi! Sheep number N! You are about to be eaten by a wolf!"` where `N` is the sheep's position in the queue.



**Note:** there will always be exactly one wolf in the array.



### Examples



Input: `["sheep", "sheep", "sheep", "wolf", "sheep"]`  

Output: `"Oi! Sheep number 1! You are about to be eaten by a wolf!"`



Input: `["sheep", "sheep", "wolf"]`  

Output: `"Pls go away and stop eating my sheep"`

---


🏷 `FUNDAMENTALS | ARRAYS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
