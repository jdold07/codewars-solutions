# 6 kyu - Delete occurrences of an element if it occurs more than n times

##### **ID**: [554ca54ffa7d91b236000023](https://www.codewars.com/kata/554ca54ffa7d91b236000023) | **Slug**: [delete-occurrences-of-an-element-if-it-occurs-more-than-n-times](https://www.codewars.com/kata/554ca54ffa7d91b236000023) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-05-08 ***by*** [JustyFY](https://www.codewars.com/users/JustyFY) | **Approved**: 2015-05-20 ***by*** [GiacomoSorbi](https://www.codewars.com/users/GiacomoSorbi)

##### **Languages Available**: python, ruby, javascript, haskell, csharp, java, kotlin, nasm, cpp, c, scala, fsharp, rust, cobol, lambdacalc, factor

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2021-11-26

---

## Kata Description


## Enough is enough!



Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.  

He tells them that he will only sit for the session if they show the same motif at most `N` times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to `N` times, without changing the order?



## Task



Given a list and a number, create a new list that contains each number of `list` at most `N` times, without reordering.  

For example if the input number is `2`, and the input list is `[1,2,3,1,2,1,2,3]`, you take `[1,2,3,1,2]`, drop the next `[1,2]` since this would lead to `1` and `2` being in the result `3` times, and then take `3`, which leads to `[1,2,3,1,2,3]`.  

With list `[20,37,20,21]` and number `1`, the result would be `[20,37,21]`.  



~~~if:nasm

## NASM notes



Write the output numbers into the `out` parameter, and return its length.



The input array will contain only integers between 1 and 50 inclusive. Use it to your advantage.

~~~



~~~if:c

For C:

* Assign the return array length to the pointer parameter `*szout`.

* Do not mutate the input array.

~~~



~~~if:lambdacalc

## Encodings



purity: `LetRec`  

numEncoding: `Church`  

export constructors `nil, cons` and deconstructor `foldr` for your `List` encoding  

~~~

---


🏷 `LISTS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/554ca54ffa7d91b236000023)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
