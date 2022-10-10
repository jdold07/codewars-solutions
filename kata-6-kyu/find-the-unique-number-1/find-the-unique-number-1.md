# 6 kyu - Find the unique number

##### **ID**: [585d7d5adb20cf33cb000235](https://www.codewars.com/kata/585d7d5adb20cf33cb000235) | **Slug**: [find-the-unique-number-1](https://www.codewars.com/kata/585d7d5adb20cf33cb000235) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2016-12-23 ***by*** [isqua](https://www.codewars.com/users/isqua) | **Approved**: 2016-12-24 ***by*** [user8476848](https://www.codewars.com/users/user8476848)

##### **Languages Available**: javascript, php, python, java, typescript, go, csharp, haskell, ruby, fsharp, swift, cobol, d, c, nasm, cpp

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2021-11-08

---

## Kata Description


There is an array with some numbers. All numbers are equal except for one. Try to find it!



```javascript

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2

findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

```



```swift

findUniq([ 1, 1, 1, 2, 1, 1 ]) == 2

findUniq([ 0, 0, 0.55, 0, 0 ]) == 0.55

```



```ruby

find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2

find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55

```



```python

find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2

find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55

```



```java

Kata.findUniq(new double[]{ 1, 1, 1, 2, 1, 1 }); // => 2

Kata.findUniq(new double[]{ 0, 0, 0.55, 0, 0 }); // => 0.55

```



```haskell

getUnique [1, 1, 1, 2, 1, 1] -- Result is 2

getUnique [0, 0, 0.55, 0, 0] -- Result is 0.55

```



```fsharp

findUniq([ 1; 1; 1; 2; 1; 1 ]) = 2

findUniq([ 0; 0; 0.55; 0; 0 ]) = 0.55

```



```c

finduniq((const float[]){1, 1, 1, 2, 1, 1}, 5); /* --> 2 */

finduniq((const float[]){0, 0, 0.55, 0, 0}, 5); /* --> 0.55 */

```

```nasm

nums:  dd  1., 1., 1., 2., 1., 1.



mov rdi, nums

mov rsi, 6

call finduniq       ; XMM0 <- 2





nums:   dd  0., 0., 0.55, 0., 0.



mov rdi, nums

mov rsi, 6

call finduniq       ; XMM0 <- 0.55

```

```cpp

find_uniq(std::vector<float>{1, 1, 1, 2, 1, 1});  // --> 2

find_uniq(std::vector<float>{0, 0, 0.55, 0, 0});  // --> 0.55

```



It’s guaranteed that array contains at least 3 numbers.



The tests contain some very huge arrays, so think about performance.



This is the first kata in series:



1. Find the unique number (this kata)

2. [Find the unique string](https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3)

3. [Find The Unique](https://www.codewars.com/kata/5862e0db4f7ab47bed0000e5)



---


🏷 `FUNDAMENTALS | ALGORITHMS | ARRAYS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/585d7d5adb20cf33cb000235)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
