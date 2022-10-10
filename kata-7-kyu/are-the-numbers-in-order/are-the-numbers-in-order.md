# 7 kyu - Are the numbers in order?

##### **ID**: [56b7f2f3f18876033f000307](https://www.codewars.com/kata/56b7f2f3f18876033f000307) | **Slug**: [are-the-numbers-in-order](https://www.codewars.com/kata/56b7f2f3f18876033f000307) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2016-02-08 ***by*** [donaldsebleung](https://www.codewars.com/users/donaldsebleung) | **Approved**: 2016-02-09 ***by*** [raulbc777](https://www.codewars.com/users/raulbc777)

##### **Languages Available**: javascript, csharp, python, cpp, php, ruby, haskell, crystal, go, c, nasm, java, factor, cobol, riscv

##### **My Completed Languages**: python ***as at*** 2022-10-08 | **Originally completed**: 2022-04-24

---

## Kata Description


# Are the numbers in order?



In this Kata, your function receives an array of integers as input.  Your task is to determine whether the numbers are in ascending order.  An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.



For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.



Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.



For example:



```java

isAscOrder(new int[]{1,2,4,7,19}) == true

isAscOrder(new int[]{1,2,3,4,5}) == true

isAscOrder(new int[]{1,6,10,18,2,4,20}) == false

isAscOrder(new int[]{9,8,7,6,5,4,3,2,1}) == false // numbers are in DESCENDING order

```

```c

in_asc_order({1,2,4,7,19}, 5); // returns true

in_asc_order({1,2,3,4,5}, 5); // returns true

in_asc_order({1,6,10,18,2,4,20}, 7); // returns false

in_asc_order({9,8,7,6,5,4,3,2,1}, 9); // returns false because the numbers are in DESCENDING order

```

```javascript

inAscOrder([1,2,4,7,19]); // returns true

inAscOrder([1,2,3,4,5]); // returns true

inAscOrder([1,6,10,18,2,4,20]); // returns false

inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

```

```cpp

inAscOrder([1,2,4,7,19]); // returns true

inAscOrder([1,2,3,4,5]); // returns true

inAscOrder([1,6,10,18,2,4,20]); // returns false

inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

```

```csharp

Kata.IsAscOrder(new int[]{1,2,4,7,19}) == true

Kata.IsAscOrder(new int[]{1,2,3,4,5}) == true

Kata.IsAscOrder(new int[]{1,6,10,18,2,4,20}) == false

Kata.IsAscOrder(new int[]{9,8,7,6,5,4,3,2,1}) == false // numbers are in DESCENDING order

```

```python

in_asc_order([1,2,4,7,19]) # returns True

in_asc_order([1,2,3,4,5]) # returns True

in_asc_order([1,6,10,18,2,4,20]) # returns False

in_asc_order([9,8,7,6,5,4,3,2,1]) # returns False because the numbers are in DESCENDING order

```

```php

in_asc_order([1, 2, 4, 7, 19]); // true

in_asc_order([1, 2, 3, 4, 5]); // true

in_asc_order([1, 6, 10, 18, 2, 4, 20]); // false

in_asc_order([9, 8, 7, 6, 5, 4, 3, 2, 1]); // false (NOTE: because the numbers are in DESCENDING order, not ascending order)

```

```haskell

isAscOrder [1, 2, 4, 7, 19] -- True

isAscOrder [1, 2, 3, 4, 5] -- True

isAscOrder [1, 6, 10, 18, 2, 4, 20] -- False

isAscOrder [9, 8, 7, 6, 5, 4, 3, 2, 1] -- False (NOTE: because the numbers are in DESCENDING order, not ascending order)

```

```ruby

is_asc_order([1,2,4,7,19]) # returns True

is_asc_order([1,2,3,4,5]); # returns True

is_asc_order([1,6,10,18,2,4,20]) # returns False

is_asc_order([9,8,7,6,5,4,3,2,1]) # returns False because the numbers are in DESCENDING order

```

```crystal

is_asc_order([1,2,4,7,19]) # returns True

is_asc_order([1,2,3,4,5]); # returns True

is_asc_order([1,6,10,18,2,4,20]) # returns False

is_asc_order([9,8,7,6,5,4,3,2,1]) # returns False because the numbers are in DESCENDING order

```

```go

InAscOrder([]int{1, 2, 4, 7, 19}) // returns True

InAscOrder([]int{1, 2, 3, 4, 5}) // returns True

InAscOrder([]int{1, 6, 10, 18, 2, 4, 20}) // returns False

InAscOrder([]int{9, 8, 7, 6, 5, 4, 3, 2, 1}) // returns False because the numbers are in DESCENDING order

```

```nasm

in_asc_order({1,2,4,7,19}, 5); // => 1

in_asc_order({1,2,3,4,5}, 5); // => 1

in_asc_order({1,6,10,18,2,4,20}, 7); // => 0

in_asc_order({9,8,7,6,5,4,3,2,1}, 9); // => 0

```

```factor

{ 1 2 4 7 19 } in-asc-order? ! returns t

{ 1 2 3 4 5 } in-asc-order? ! returns t

{ 1 6 10 18 2 4 20 } in-asc-order? ! returns f

{ 9 8 7 6 5 4 3 2 1 } in-asc-order? ! returns f because the numbers are in DESCENDING order

```

```cobol

      InAscOrder([1,2,4,7,19]) => 1

      InAscOrder([1,2,3,4,5]) => 1

      InAscOrder([1,6,10,18,2,4,20]) => 0

      InAscOrder([9,8,7,6,5,4,3,2,1]) => 0

```

```riscv

in_asc_order({1,2,4,7,19}, 5); // returns true

in_asc_order({1,2,3,4,5}, 5); // returns true

in_asc_order({1,6,10,18,2,4,20}, 7); // returns false

in_asc_order({9,8,7,6,5,4,3,2,1}, 9); // returns false because the numbers are in DESCENDING order

```



~~~if:nasm

**10/08/2018: Codewars doesn't support NASM code blocks in the Kata Description yet - please refer to the Sample Test Cases instead.**

~~~



~~~if:riscv

RISC-V: The function signature is



```c

bool in_asc_order(const int *arr, size_t n);

```

~~~



*N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.*

---


🏷 `FUNDAMENTALS | MATHEMATICS | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/56b7f2f3f18876033f000307)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
