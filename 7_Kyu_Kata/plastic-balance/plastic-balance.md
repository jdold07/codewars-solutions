# 7 kyu - Plastic Balance

##### **ID**: [625ea5c1a071210065c923af](https://www.codewars.com/kata/625ea5c1a071210065c923af) | **Slug**: [plastic-balance](https://www.codewars.com/kata/625ea5c1a071210065c923af) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2022-04-19 ***by*** [Eyad Hantouli](https://www.codewars.com/users/Eyad%20Hantouli) | **Approved**: 2022-06-22 ***by*** [akar-0](https://www.codewars.com/users/akar-0)

##### **Languages Available**: python

##### **My Completed Languages**: python ***as at*** 2022-10-05 | **Originally completed**: 2022-05-04

---

## Kata Description


You will get a list with several scattered numbers



You must check that the sum of the two values on both sides equals the sum of the rest of the list elements



And if not, delete the two elements on the sides and check repeatedly,



until you reach the condition checklist:



The sum of the list without the sides = the sum of the sides



If it never equals return an empty list []



`note: list length can be up to 500 items`



# Example:

Ex1:

```python

[1,2,3,4,5] ==> 1+5 != 2+3+4 ==> [2,3,4] ==> 2+4 != 3 == [3] ==> 3+3 != 0 ==> []

```

note: (3+3) because 3 is first side and last side... (!= 0) because sum of list without sides = 0





Ex2:

```python

[0,104,3,101,0,111] ==> 0+111 != 104+3+101+0 ==> [104,3,101,0] ==> 104+0 = 3+101 ==> [104,3,101,0]

```





Ex3:

```python

[1,-1] ==> 1-1 = 0 ==> [1,-1]

```

note: (1-1) because 1 is first side and -1 is last side... (= 0) because sum of list without sides (1, -1) = 0

---


🏷 `FUNDAMENTALS | ALGORITHMS | LISTS | DATA STRUCTURES | ARRAYS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/625ea5c1a071210065c923af)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
