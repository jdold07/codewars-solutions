# 6 kyu - Make the Deadfish Swim

##### **ID**: [51e0007c1f9378fa810002a9](https://www.codewars.com/kata/51e0007c1f9378fa810002a9) | **Slug**: [make-the-deadfish-swim](https://www.codewars.com/kata/51e0007c1f9378fa810002a9) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2013-07-12 ***by*** [NullData](https://www.codewars.com/users/NullData) | **Approved**: *not available* ***by*** [*not available*](*https://www.codewars.com*)

##### **Languages Available**: javascript, coffeescript, csharp, rust, python, haskell, php, c, go, ruby, java, scala, groovy, julia, typescript, powershell, cobol, d, factor

##### **My Completed Languages**: python ***as at*** 2022-10-08 | **Originally completed**: 2022-04-28

---

## Kata Description


Write a simple parser that will parse and run Deadfish.  



Deadfish has 4 commands, each 1 character long:

* `i` increments the value (initially `0`)

* `d` decrements the value

* `s` squares the value

* `o` outputs the value into the return array



Invalid characters should be ignored.



```javascript

parse("iiisdoso") => [ 8, 64 ]

```

```csharp

Deadfish.Parse("iiisdoso") => new int[] {8, 64};

```

```python

parse("iiisdoso")  ==>  [8, 64]

```

```haskell

parse "iiisdoso" -> [ 8, 64 ]

```

```c

parse("iiisdoso") == {8, 64}

```

```go

Parse("iiisdoso") == []int{8, 64}

```

```ruby

parse("iiisdoso")  ==>  [8, 64]

```

```java

Deadfish.parse("iiisdoso") =- new int[] {8, 64};

```

```groovy

DeadFish.parse("iiisdoso")  ==>  [8, 64]

```

```scala

Deadfish.parse("iiisdoso") => List(8, 64)

```

```typescript

parse("iiisdoso") => [8, 64]

```

```julia

deadfish("iiisdoso") --> [8, 64]

```

```powershell

Eval-DeadFish -Data "ooo" --> @(0, 0, 0)  # [long[]]



```

```factor

"iiisdoso" deadfish -> { 8 64 }

```



---


🏷 `PARSING | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/51e0007c1f9378fa810002a9)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
