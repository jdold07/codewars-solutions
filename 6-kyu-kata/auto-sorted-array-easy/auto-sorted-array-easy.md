# 6 kyu - Auto Sorted Array - Easy

##### **ID**: [5a0ddb08c374cb18e900006b](https://www.codewars.com/kata/5a0ddb08c374cb18e900006b) | **Slug**: [auto-sorted-array-easy](https://www.codewars.com/kata/5a0ddb08c374cb18e900006b) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2017-11-16 ***by*** [notVitaliy](https://www.codewars.com/users/notVitaliy) | **Approved**: 2019-03-15 ***by*** [JohanWiltink](https://www.codewars.com/users/JohanWiltink)

##### **Languages Available**: javascript

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-09-17

---

## Kata Description


Create a derived collection object that automatically sorts itself when its member methods are invoked. Inspecting (console.log) an instance of the collection should only return the values and not the methods.



The collection should be instantiated with 2 parameters (dir, init)



- dir: `asc` || `desc` -- Determines the direction of the sort  

  (Must throw an error if `dir` is neither of these values)



- init: number -- Identical to `number` in Array(number)





Methods:



- `insert([element1[, ...[, elementN]]])`: Adds value(s) to the collection, sorts collection and returns the collection length.



- `pop()`: Removes a value from the end of the collection and returns the removed value.



- `shift()`: Removes a value from the start of the collection and returns the removed value.



The collection should get re-sorted on every `insert`.

---


🏷 `FUNDAMENTALS | SORTING | LANGUAGE FEATURES | OBJECT-ORIENTED PROGRAMMING`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5a0ddb08c374cb18e900006b)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
