# 6 kyu - Array.diff

##### **ID**: [523f5d21c841566fde000009](https://www.codewars.com/kata/523f5d21c841566fde000009) | **Slug**: [array-dot-diff](https://www.codewars.com/kata/523f5d21c841566fde000009) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2013-09-22 ***by*** [marcinbunsch](https://www.codewars.com/users/marcinbunsch) | **Approved**: *not available* ***by*** [*not available*](*https://www.codewars.com*)

##### **Languages Available**: javascript, coffeescript, haskell, ruby, python, csharp, rust, clojure, php, groovy, julia, nim, r, elixir, fsharp, prolog, c, java, crystal, scala, typescript, cobol, go

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2021-11-11

---

## Kata Description


Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.



It should remove all values from list `a`, which are present in list `b` keeping their order.



```c

array_diff({1, 2}, 2, {1}, 1, *z) == {2} (z == 1)

```

```javascript

arrayDiff([1,2],[1]) == [2]

```

```ruby

array_diff([1,2],[1]) == [2]

```

```crystal

array_diff([1,2],[1]) == [2]

```

```python

array_diff([1,2],[1]) == [2]

```

```coffeescript

arrayDiff([1,2],[1]) == [2]

```

```haskell

difference [1,2] [1] == [2]

```

```csharp

Kata.ArrayDiff(new int[] {1, 2}, new int[] {1}) => new int[] {2}

```

```fsharp

arrayDiff [|1|] [|1; 2|] = [|2|]

```

```rust

array_diff(vec![1,2], vec![1]) == vec![2]

```

```clojure

(= (array-diff [1 2] [1]) [2])

```

```groovy

Kata.arrayDiff([1,2],[1]) == [2]

```

```java

Kata.arrayDiff(new int[] {1, 2}, new int[] {1}) => new int[] {2}

```

```julia

arraydiff([1,2],[1]) == [2]

```

```nim

arrayDiff(@[1,2],@[1]) == @[2]

```

```php

arrayDiff([1,2],[1]) == [2]

```

```r

array_diff(c(1, 2), 1) == 2

```

```prolog

array_diff([1, 2], [1], [2]). % Result = [2]

```

```scala

arrayDiff(Seq(1, 2), Seq(1)) == Seq(2)

```

```cobol

      ArrayDiff([1, 2], [1]) = [2]

```



If a value is present in `b`, all of its occurrences must be removed from the other:



```c

array_diff({1, 2, 2, 2, 3}, 5, {2}, 1, *z) == {1, 3} (z == 2)

```

```javascript

arrayDiff([1,2,2,2,3],[2]) == [1,3]

```

```ruby

array_diff([1,2],[1]) == [2]

```

```python

array_diff([1,2,2,2,3],[2]) == [1,3]

```

```coffeescript

arrayDiff([1,2,2,2,3],[2]) == [1,3]

```

```haskell

difference [1,2,2,2,3] [2] == [1,3]

```

```csharp

Kata.ArrayDiff(new int[] {1, 2, 2, 2, 3}, new int[] {2}) => new int[] {1, 3}

```

```fsharp

arrayDiff [|2|] [|1; 2; 2; 2; 3|] = [|1; 3|]

```

```rust

array_diff(vec![1,2,2,2,3], vec![2]) == vec![1,3]

```

```clojure

(= (array-diff [1,2,2,2,3] [2]) [1,3])

```

```groovy

Kata.arrayDiff([1,2,2,2,3],[2]) == [1,3]

```

```java

Kata.arrayDiff(new int[] {1, 2, 2, 2, 3}, new int[] {2}) => new int[] {1, 3}

```

```julia

arraydiff([1,2,2,2,3],[2]) == [1,3]

```

```nim

arrayDiff(@[1,2,2,2,3],@[2]) == @[1,3]

```

```php

arrayDiff([1,2,2,2,3],[2]) == [1,3]

```

```r

array_diff(c(1, 2, 2, 2, 3), 2) == c(1, 3)

```

```prolog

array_diff([1, 2, 2, 2, 3], [2], [1, 3]). % Result = [1, 3]

```

```scala

arrayDiff(Seq(1, 2, 2, 2, 2, 2, 3), Seq(2)) == Seq(1, 3)

```

```cobol

      ArrayDiff([1,2,2,2,3],[2]) = [1,3]

```

~~~ if:c

NOTE: In C, assign return array length to pointer *z

~~~

---


🏷 `ARRAYS | FUNDAMENTALS | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/523f5d21c841566fde000009)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
