# 5 kyu - Moving Zeros To The End

##### **ID**: [52597aa56021e91c93000cb0](https://www.codewars.com/kata/52597aa56021e91c93000cb0) | **Slug**: [moving-zeros-to-the-end](https://www.codewars.com/kata/52597aa56021e91c93000cb0) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">5 kyu</span>

##### **First Published**: 2013-10-12 ***by*** [xcthulhu](https://www.codewars.com/users/xcthulhu) | **Approved**: *not available* ***by*** [*not available*](*https://www.codewars.com*)

##### **Languages Available**: javascript, coffeescript, python, csharp, php, vb, cpp, go, cobol, haskell, factor, ruby, c, rust, d

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2021-11-27

---

## Kata Description


Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.



```php

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

```

```javascript

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

```

```python

move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0]

```

```cpp

move_zeros({1, 0, 1, 2, 0, 1, 3}) // returns {1, 1, 2, 1, 3, 0, 0}

```

```coffeescript

moveZeros [false,1,0,1,2,0,1,3,"a"] # returns[false,1,1,2,1,3,"a",0,0]

```

```csharp

Kata.MoveZeroes(new int[] {1, 2, 0, 1, 0, 1, 0, 3, 0, 1}) => new int[] {1, 2, 1, 1, 3, 1, 0, 0, 0, 0}

```

```go

MoveZeros([]int{1, 2, 0, 1, 0, 1, 0, 3, 0, 1}) // returns []int{ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 }

```

```haskell

moveZeros [1,2,0,1,0,1,0,3,0,1] -> [1,2,1,1,3,1,0,0,0,0]

```

```factor

{ 1 2 0 1 0 1 0 3 0 1 } move-zeros -> { 1 2 1 1 3 1 0 0 0 0 }

```



```ruby

moveZeros [1,2,0,1,0,1,0,3,0,1] #-> [1,2,1,1,3,1,0,0,0,0]

```



```c

move_zeros(10, int [] {1, 2, 0, 1, 0, 1, 0, 3, 0, 1}); // -> int [] {1, 2, 1, 1, 3, 1, 0, 0, 0, 0}

```



---


🏷 `ARRAYS | SORTING | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/52597aa56021e91c93000cb0)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
