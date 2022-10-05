# 7 kyu - Head, Tail, Init and Last

##### **ID**: [54592a5052756d5c5d0009c3](https://www.codewars.com/kata/54592a5052756d5c5d0009c3) | **Slug**: [head-tail-init-and-last](https://www.codewars.com/kata/54592a5052756d5c5d0009c3) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2014-11-05 ***by*** [user578387](https://www.codewars.com/users/user578387) | **Approved**: 2014-11-07 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, coffeescript, python, ruby, clojure, haskell, csharp, typescript, ocaml

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-09-11

---

## Kata Description


Haskell has some useful functions for dealing with lists:



```haskell

$ ghci

GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help

λ head [1,2,3,4,5]

1

λ tail [1,2,3,4,5]

[2,3,4,5]

λ init [1,2,3,4,5]

[1,2,3,4]

λ last [1,2,3,4,5]

5

```



Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:



```haskell

| HEAD | <----------- TAIL ------------> |

[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]

| <----------- INIT ------------> | LAST |



head [x] = x

tail [x] = []

init [x] = []

last [x] = x

```

Here's how I expect the functions to be called in your language:



```coffeescript

head [1,2,3,4,5] => 1

tail [1,2,3,4,5] => [2,3,4,5]

```

```javascript

head([1,2,3,4,5]); => 1

tail([1,2,3,4,5]); => [2,3,4,5]

```

```typescript

head([1,2,3,4,5]); => 1

tail([1,2,3,4,5]); => [2,3,4,5]

```

```python

head([1,2,3,4,5]) => 1

tail([1,2,3,4,5]) => [2,3,4,5]

```

```ruby

head [1,2,3,4,5] => 1

tail [1,2,3,4,5] => [2,3,4,5]

```

```clojure

(head [1,2,3,4,5]) => 1

(tail [1,2,3,4,5]) => [2,3,4,5]

```

```haskell

head [1,2,3,4,5] => 1

tail [1,2,3,4,5] => [2,3,4,5]

```

```csharp

new List<int> {1, 2, 3, 4, 5}.Head() => 1

new List<int> {1, 2, 3, 4, 5}.Tail() => new List<int> {2, 3, 4, 5}

```

```ocaml

head [1; 2; 3; 4; 5] -> 1

tail [1; 2; 3; 4; 5] -> [2; 3; 4; 5]

```



---



_Most tests consist of 100 randomly generated arrays, each with four tests, one for each operation. There are 400 tests overall. No empty arrays will be given. Haskell has QuickCheck tests_



```if:clojure

__PLEASE NOTE:__ Clojure's `last` function shall be called `last_` to prevent name clashes.

```

```if:csharp

__PLEASE NOTE:__ C#'s `Last` function shall be called `Last_` to prevent name clashes.

```

---


🏷 `ARRAYS | LISTS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/54592a5052756d5c5d0009c3)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
