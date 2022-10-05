# BETA - Inverse FizzBuzz

##### **ID**: [5459f67b85166aee840000f3](https://www.codewars.com/kata/5459f67b85166aee840000f3) | **Slug**: [inverse-fizzbuzz](https://www.codewars.com/kata/5459f67b85166aee840000f3) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:grey">*BETA*</span>

##### **First Published**: 2014-11-05 ***by*** [megaparfair](https://www.codewars.com/users/megaparfair) | **Approved**: *not available* ***by*** [*not available*](*https://www.codewars.com*)

##### **Languages Available**: javascript

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-09-13

---

## Kata Description


This exercise is an extension of the FizzBuzz algorithm. The FizzBuzz algorithm can be defined for the "natural numbers" (numbers greater than zero) as:



•	When divisible by 3, you should return "fizz".



•	When divisible by 5, you should return "buzz".



•	When divisible by both 3 and 5, you should return "fizzbuzz".



•	When divisible by neither, then no value should be returned and does not count toward the required output.





E.g. if you pass in an array of numbers from 1 to 10 would produce the output {“fizz”, “buzz”, fizz”, “fizz”, “buzz”}.



Inverse FizzBuzz

----------------

This exercise requires you to implement a solution where instead of passing in an array of integers to see what array of words it produces, you pass in the array of words and return the shortest array of integers that produces this sequence when run against the FizzBuzz algorithm.



For example, if you passed in the array {“fizz”}, the shortest array of numbers that produces this output is {3}.



When looking for the shortest sequence for {“fizz”, “buzz”} one sequence that produces that output is {3, 4, 5}. Note: Although the value 4 is ignored for matching the required array of words, it would still need to be returned in the array for the numbers in the array to be consecutive.



However, this isn't the shortest sequence of integers that produces this output. The shortest sequence is {9, 10}.



NOTE: If the given sequence of words does not appear in the FizzBuzz pattern, return an empty array of integers.



NOTE 2: No need to check for incorrect inputs. Only the words "fizz", "buzz", and "fizzbuzz" will be given, all in lower case.



NOTE 3: Return the first occurrence of the shortest pattern. eg. if input = "fizz", return 3, not 9.



---


🏷 `ALGORITHMS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5459f67b85166aee840000f3)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
