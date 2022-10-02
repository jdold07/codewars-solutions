# 6 kyu - WeIrD StRiNg CaSe

##### **ID**: [52b757663a95b11b3d00062d](https://www.codewars.com/kata/52b757663a95b11b3d00062d) | **Slug**: [weird-string-case](https://www.codewars.com/kata/52b757663a95b11b3d00062d) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2013-12-23 ***by*** [xDranik](https://www.codewars.com/users/xDranik) | **Approved**: 2013-12-24 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, coffeescript, ruby, haskell, python, csharp, php, go, factor

##### **My Completed Languages**: python ***as at*** 2022-10-02 | **Originally completed**: 2022-04-27

---

## Kata Description


Write a function `toWeirdCase` (`weirdcase` in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.



The passed in string will only consist of alphabetical characters and spaces(`' '`). Spaces will only be present if there are multiple words. Words will be separated by a single space(`' '`).



### Examples:

```javascript

toWeirdCase( "String" );//=> returns "StRiNg"

toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

```

```coffeescript

toWeirdCase( "String" );//=> returns "StRiNg"

toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

```

```python

to_weird_case('String'); # => returns 'StRiNg'

to_weird_case('Weird string case') # => returns 'WeIrD StRiNg CaSe'

```

```haskell

toWeirdCase "String"            `shouldBe` "StRiNg"

toWeirdCase "Weird string case" `shouldBe` "WeIrD StRiNg CaSe"

```

```ruby

weirdcase( "String" )#=> returns "StRiNg"

weirdcase( "Weird string case" );#=> returns "WeIrD StRiNg CaSe"

```

```php

toWeirdCase("String"); // => returns "StRiNg"

toWeirdCase("Weird string case"); // => returns "WeIrD StRiNg CaSe"

```

```go

toWeirdCase("String") // => returns "StRiNg"

toWeirdCase("Weird string case") // => returns "WeIrD StRiNg CaSe"

```

---


🏷 `STRINGS | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/52b757663a95b11b3d00062d)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
