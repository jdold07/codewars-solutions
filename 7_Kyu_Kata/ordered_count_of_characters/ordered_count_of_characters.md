# 7 kyu - Ordered Count of Characters

##### **ID**: [57a6633153ba33189e000074](https://www.codewars.com/kata/57a6633153ba33189e000074) | **Slug**: [ordered-count-of-characters](https://www.codewars.com/kata/57a6633153ba33189e000074) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2016-08-07 ***by*** [suic](https://www.codewars.com/users/suic) | **Approved**: 2016-08-24 ***by*** [raulbc777](https://www.codewars.com/users/raulbc777)

##### **Languages Available**: python, haskell, ruby, scala, groovy, csharp, javascript, fsharp, coffeescript, c, php, julia, crystal, go, vb, rust, typescript, d, lua, cobol

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-08-30

---

## Kata Description


Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).



Consult the solution set-up for the exact data structure implementation depending on your language.



Example:

```python

ordered_count("abracadabra") == [('a', 5), ('b', 2), ('r', 2), ('c', 1), ('d', 1)]

```



```ruby

ordered_count("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

```



```haskell

orderedCount "abracadabra" == [('a', 5), ('b', 2), ('r', 2), ('c', 1), ('d', 1)]

```



```scala

Kata.orderedCount("abracadabra") == List(('a', 5), ('b', 2), ('r', 2), ('c', 1), ('d', 1))

```



```groovy

Kata.orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

```



```csharp

Kata.OrderedCount("abracadabra") == new List<Tuple<char, int>> () {

  new Tuple<char, int>('a', 5),

  new Tuple<char, int>('b', 2),

  new Tuple<char, int>('r', 2), 

  new Tuple<char, int>('c', 1),

  new Tuple<char, int>('d', 1)

}

```



```javascript

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

```



```julia

# Note the single quotes: don't use a string, a character is used instead

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

```

```crystal

# Note the single quotes: don't use a string, a character is used instead

ordered_count("abracadabra") == [{'a', 5}, {'b', 2}, {'r', 2}, {'c', 1}, {'d', 1}]

```

```lua

ordered_count "abracadabra" == {{'a', 5}, {'b', 2}, {'r', 2}, {'c', 1}, {'d', 1}}

```

```php

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

```



```fsharp

orderedCount("abracadabra") = [('a', 5), ('b', 2), ('r', 2), ('c', 1), ('d', 1)]

```



```c

ordered_count("abracadabra", *szout);



// using:

typedef struct Character_Count_Pair {

    char character;

    size_t count;

} ccp;



// returns:

{{'a', 5}, {'b', 2}, {'r', 2}, {'c', 1}, {'d', 1}}



// assigns length:

szout = 5

```

```go

OrderedCount("abracadabra") == []Tuple{Tuple{'a', 5}, Tuple{'b', 2}, Tuple{'r', 2}, Tuple{'c', 1}, Tuple{'d', 1}}



// Where

type Tuple struct {

	Char  rune

	Count int

}

```

```vb

Kata.OrderedCount("abracadabra") == new List(Of Tuple(Of Char, Integer)) () From {

  new Tuple(char, int)("a"c, 5),

  new Tuple(char, int)("b"c, 2),

  new Tuple(char, int)("r"c, 2), 

  new Tuple(char, int)("c"c, 1),

  new Tuple(char, int)("d"c, 1)

}

```

```rust

ordered_count("abracadabra") == vec![('a', 5), ('b', 2), ('r', 2), ('c', 1), ('d', 1)]

```

```typescript

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

```



---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/57a6633153ba33189e000074)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
