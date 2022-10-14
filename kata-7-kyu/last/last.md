# 7 kyu - Last

##### **ID**: [541629460b198da04e000bb9](https://www.codewars.com/kata/541629460b198da04e000bb9) | **Slug**: [last](https://www.codewars.com/kata/541629460b198da04e000bb9) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2014-09-14 ***by*** [xcthulhu](https://www.codewars.com/users/xcthulhu) | **Approved**: 2014-09-17 ***by*** [xcthulhu](https://www.codewars.com/users/xcthulhu)

##### **Languages Available**: haskell, clojure, javascript, ruby, coffeescript, python, rust, java

##### **My Completed Languages**: javascript ***as at*** 2022-10-14 | **Originally completed**: 2022-10-13

---

## Kata Description


Find the last element of the given argument(s).



## Examples



```python

last([1, 2, 3, 4]) ==>  4

last("xyz")        ==> "z"

last(1, 2, 3, 4)   ==>  4

```

```ruby

last([1, 2, 3, 4]) # =>  4

last("xyz")        # => "z"

last(1, 2, 3, 4)   # =>  4

```

```haskell

last [1, 2, 3, 4]     -- =>  4

last ['x', 'y', 'z']  -- => 'z'

```

```clojure

(last [1, 2, 3, 4]) ; => 4

(last "xyz")        ; => \z

```

```javascript

last([1, 2, 3, 4] ) // =>  4

last("xyz")         // => "z"

last(1, 2, 3, 4)    // =>  4

```

```java

last(Arrays.asList(1, 2, 3, 4)); // =>  4

last("xyz");                     // => "z"

last(1, 2, 3, 4);                // =>  4

last(new int[]{1, 2, 3, 4});     // =>  4

```

```coffeescript

last [1, 2, 3, 4] # =>  4

last "xyz"        # => "z"

last 1, 2, 3, 4   # =>  4

```

```rust

last(&[1, 2, 3, 4])     // =>  4

last(&['x', 'y', 'z'])  // => 'z'

```

In **javascript** and **CoffeeScript** a **list** will be an `array`, a `string` or the list of `arguments`.



(courtesy of [haskell.org](http://www.haskell.org/haskellwiki/99_questions/1_to_10))





---


🏷 `LISTS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/541629460b198da04e000bb9)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
