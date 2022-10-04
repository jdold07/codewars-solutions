# 6 kyu - Unique In Order

##### **ID**: [54e6533c92449cc251001667](https://www.codewars.com/kata/54e6533c92449cc251001667) | **Slug**: [unique-in-order](https://www.codewars.com/kata/54e6533c92449cc251001667) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-02-19 ***by*** [pinelopi](https://www.codewars.com/users/pinelopi) | **Approved**: 2015-05-08 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: python, ruby, javascript, csharp, php, clojure, haskell, crystal, rust, cpp, scala

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2021-11-15

---

## Kata Description


Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.



For example:



```cpp

uniqueInOrder("AAAABBBCCDAABBB") == {'A', 'B', 'C', 'D', 'A', 'B'}

uniqueInOrder("ABBCcAD")         == {'A', 'B', 'C', 'c', 'A', 'D'}

uniqueInOrder([1,2,2,3,3])       == {1,2,3}

```

```javascript

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']

uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']

uniqueInOrder([1,2,2,3,3])       == [1,2,3]

```

```python

unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']

unique_in_order('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']

unique_in_order([1,2,2,3,3])       == [1,2,3]

```

```ruby

unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']

unique_in_order('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']

unique_in_order([1,2,2,3,3])       == [1,2,3]

```

```haskell

uniqueInOrder "AAAABBBCCDAABBB" == "ABCDAB"

uniqueInOrder "ABBCcAD"         == "ABCcAD"

uniqueInOrder [1,2,2,3,3]       == [1,2,3]

```

```crystal

unique_in_order("AAAABBBCCDAABBB") == ['A', 'B', 'C', 'D', 'A', 'B']

unique_in_order("ABBCcAD")         == ['A', 'B', 'C', 'c', 'A', 'D']

unique_in_order([1,2,2,3,3])       == [1,2,3]

```

```scala

uniqueInOrder("AAAABBBCCDAABBB")   == List('A', 'B', 'C', 'D', 'A', 'B')

uniqueInOrder("ABBCcAD")           == List('A', 'B', 'C', 'c', 'A', 'D')

uniqueInOrder(List(1, 2, 2, 3, 3)) == List(1, 2, 3)

```



---


🏷 `ALGORITHMS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/54e6533c92449cc251001667)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
