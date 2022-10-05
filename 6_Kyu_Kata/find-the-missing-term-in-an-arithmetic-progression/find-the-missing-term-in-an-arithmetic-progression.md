# 6 kyu - Find the missing term in an Arithmetic Progression

##### **ID**: [52de553ebb55d1fca3000371](https://www.codewars.com/kata/52de553ebb55d1fca3000371) | **Slug**: [find-the-missing-term-in-an-arithmetic-progression](https://www.codewars.com/kata/52de553ebb55d1fca3000371) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2014-01-21 ***by*** [Coldberg](https://www.codewars.com/users/Coldberg) | **Approved**: 2014-01-31 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, haskell, python, cpp, php, csharp, r, swift, objc, fsharp, ruby, c, nasm, java, factor, rust

##### **My Completed Languages**: python ***as at*** 2022-10-05 | **Originally completed**: 2022-04-29

---

## Kata Description


An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP.  Find the missing term.  



You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.



## Example

```php

findMissing([1, 3, 5, 9, 11]) == 7

```

```csharp

Kata.FindMissing(new List<int> {1, 3, 5, 9, 11}) => 7

```

```fsharp

findMissing [| 1; 3; 5; 9; 11 |] = 7

```

```python

find_missing([1, 3, 5, 9, 11]) == 7

```

```swift

find_missing([1, 3, 5, 9, 11]) == 7

```

```ruby

findMissing([1, 3, 5, 9, 11]) == 7

```

```c

find_missing((const int[]){1,3,5,9,11}, 5)  => 7

```

```nasm

nums:  dw  1,3,5,9,11



mov rdi, nums

mov rsi, 5

call find_missing    ; EAX <- 7

```

```factor

{ 1 3 5 9 11 } find-missing ! => 7

```



PS: This is a sample question of the facebook engineer challenge on interviewstreet.

I found it quite fun to solve on paper using math, derive the algo that way.

Have fun!



---


🏷 `ALGORITHMS | MATHEMATICS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/52de553ebb55d1fca3000371)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
