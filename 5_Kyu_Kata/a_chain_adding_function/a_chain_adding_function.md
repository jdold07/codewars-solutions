# 5 kyu - A Chain adding function

##### **ID**: [539a0e4d85e3425cb0000a88](https://www.codewars.com/kata/539a0e4d85e3425cb0000a88) | **Slug**: [a-chain-adding-function](https://www.codewars.com/kata/539a0e4d85e3425cb0000a88) | **Category**: `GAMES` | **Rank**: <span style="color:yellow">5 kyu</span>

##### **First Published**: 2014-06-12 ***by*** [gelus](https://www.codewars.com/users/gelus) | **Approved**: 2014-10-07 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, python, typescript, ruby, cpp

##### **My Completed Languages**: python ***as at*** 2022-10-04 | **Originally completed**: 2022-05-03

---

## Kata Description


We want to create a function that will add numbers together when called in succession.



```javascript

add(1)(2); // == 3

```



```ruby

add(1).(2); # equals 3

```



```python

add(1)(2) # equals 3

```



We also want to be able to continue to add numbers to our chain.



```javascript

add(1)(2)(3); // == 6

add(1)(2)(3)(4); //  == 10

add(1)(2)(3)(4)(5); // == 15

```



```ruby

add(1).(2).(3); # 6

add(1).(2).(3).(4); # 10

add(1).(2).(3).(4).(5); # 15

```



```python

add(1)(2)(3) # 6

add(1)(2)(3)(4); # 10

add(1)(2)(3)(4)(5) # 15

```



and so on.



A single call should be equal to the number passed in.



```javascript

add(1); // == 1

```



```ruby

add(1); # 1

```



```python

add(1) # 1

```



We should be able to store the returned values and reuse them.



```javascript

var addTwo = add(2);

addTwo; // == 2

addTwo + 5; // == 7

addTwo(3); // == 5

addTwo(3)(5); // == 10

```



```ruby

var addTwo = add(2);

addTwo; # 2

addTwo + 5; # 7

addTwo(3); # 5

addTwo(3).(5); # 10

```



```python

addTwo = add(2)

addTwo # 2

addTwo + 5 # 7

addTwo(3) # 5

addTwo(3)(5) # 10

```



We can assume any number being passed in will be valid whole number. 

---


🏷 `MATHEMATICS | FUNCTIONAL PROGRAMMING | PUZZLES`


[View this Kata on Codewars.com](https://www.codewars.com/kata/539a0e4d85e3425cb0000a88)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
