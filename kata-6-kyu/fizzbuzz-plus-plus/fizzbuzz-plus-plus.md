# 6 kyu - FizzBuzz++

##### **ID**: [596925532f709fccf3000077](https://www.codewars.com/kata/596925532f709fccf3000077) | **Slug**: [fizzbuzz-plus-plus](https://www.codewars.com/kata/596925532f709fccf3000077) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2017-07-14 ***by*** [LSmith-Zenoscave](https://www.codewars.com/users/LSmith-Zenoscave) | **Approved**: 2017-07-17 ***by*** [smile67](https://www.codewars.com/users/smile67)

##### **Languages Available**: python, javascript, php

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-06-12

---

## Kata Description


There is a common problem given to interviewees in software. It is called FizzBuzz.

It works as follows:

For the numbers between 1 and 100, print fizz if it is a multiple of 3 and buzz if it is a mutiple of 5, else print the number itself.



You are in an interview and they ask you to complete fizzbuzz (which can be done in a one-liner in a few langs) and you knock it out of the park.



Surprised by your ability, the interviewer gives you a harder problem. Given a list of coprime numbers, (that is that the g.c.d. of all the numbers == 1) and an equally sized list of words. compute its fizzbuzz representation up until the pattern of strings repeats itself. 



Here's an example



```

fizzbuzz_plusplus([2, 3, 5], ['fizz', 'buzz', 'bazz']); // => [1, 'fizz', 'buzz', 'fizz', 'bazz', 'fizzbuzz', 7, 'fizz', 'buzz', 'fizzbazz', 11, 'fizzbuzz', 13, 'fizz', 'buzzbazz', 'fizz', 17, 'fizzbuzz', 19, 'fizzbazz', 'buzz', 'fizz', 23, 'fizzbuzz', 'bazz', 'fizz', 'buzz', 'fizz', 29 , 'fizzbuzzbazz']

```



Things to note: 

 * Your function should return an Array of the output for each index, not print it.

 * If elements are 1-indexed, the 10th item is fizz + bazz as 10 == 0 (mod 2) and 10 == 0 (mod 5).

 * The strings are always concatenated from left to right in appearance of array.

 * The number array may not always be sorted - just use the given order of the numbers

 * All numbers in the first array will always be coprime. This is a safe assumption for your program.

 * The list stops where it does because if you were to filter the numbers out, the remaining strings would repeat after this point.

 

Hint: What is the relation to the numbers given in the list and the length of the list?

---


🏷 `ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/596925532f709fccf3000077)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
