# 7 kyu - The old switcheroo 2

##### **ID**: [55d6a0e4ededb894be000005](https://www.codewars.com/kata/55d6a0e4ededb894be000005) | **Slug**: [the-old-switcheroo-2](https://www.codewars.com/kata/55d6a0e4ededb894be000005) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2015-08-21 ***by*** [joh_pot](https://www.codewars.com/users/joh_pot) | **Approved**: 2015-09-01 ***by*** [g964](https://www.codewars.com/users/g964)

##### **Languages Available**: javascript, csharp, coffeescript, python, ruby, c

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-08-31

---

## Kata Description


This is a follow up from my kata <a href='http://www.codewars.com/kata/55d410c492e6ed767000004f'>The old switcheroo</a>







Write the function :

```javascript

function encode(str)

```

```python

def encode(str)

```

```ruby

def encode(str)

```

```coffeescript

encode = (str) ->

```

```csharp

public static string Encode(string str)

```

that takes in a string ```str``` and replaces all the letters with their respective positions in the English alphabet.<br/>



```javascript

encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd

encode('codewars') == '315452311819'

encode('abc-#@5') == '123-#@5'

```

```python

encode('abc') == '123'   # a is 1st in English alpabet, b is 2nd and c is 3rd

encode('codewars') == '315452311819'

encode('abc-#@5') == '123-#@5'

```

```ruby

encode('abc') == '123'   # a is 1st in English alpabet, b is 2nd and c is 3rd

encode('codewars') == '315452311819'

encode('abc-#@5') == '123-#@5'

```

```coffeescript

encode 'abc' == '123'   # a is 1st in English alpabet, b is 2nd and c is 3rd

encode 'codewars' == '315452311819'

encode 'abc-#@5' == '123-#@5'

```

```csharp

Encode("abc") == "123" // a is 1st in English alpabet, b is 2nd and c is 3rd

Encode("codewars") == "315452311819"

Encode("abc-#@5") == "123-#@5"

```

String are case sensitive.

```javascript

// Bonus point if you don't use toLowerCase()

```

```coffeescript

# Bonus point if you don't use toLowerCase()

```

```csharp

// Bonus point if you don't use ToLower()

```





---


🏷 `STRINGS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/55d6a0e4ededb894be000005)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
