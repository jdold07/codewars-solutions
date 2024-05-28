# 7 kyu - Area of a Circle

##### **ID**: [537baa6f8f4b300b5900106c](https://www.codewars.com/kata/537baa6f8f4b300b5900106c) | **Slug**: [area-of-a-circle](https://www.codewars.com/kata/537baa6f8f4b300b5900106c) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2014-05-24 ***by*** [austinc](https://www.codewars.com/users/austinc) | **Approved**: 2014-09-09 ***by*** [xcthulhu](https://www.codewars.com/users/xcthulhu)

##### **Languages Available**: javascript, java, haskell, python, csharp, ruby, coffeescript, typescript

##### **My Completed Languages**: typescript ***as at*** 2024-05-28 | **Originally completed**: 2024-05-28

---

## Kata Description


Complete the function which will return the area of a circle with the given `radius`. 



Returned value is expected to be accurate up to tolerance of 0.01.



~~~if:coffeescript,javascript,typescript

If the `radius` is not positive, throw `Error`.

~~~

~~~if:csharp

If the `radius` is not positive, throw `ArgumentException`.

~~~

~~~if:haskell

If the radius is positive, return `Just area`. Otherwise, return `Nothing`.

~~~

~~~if:java

If the `radius` is not positive, throw `IllegalArgumentException`.

~~~

~~~if:python

If the `radius` is not positive, raise `ValueError`.

~~~

~~~if:ruby

If the `radius` is not positive, raise `ArgumentError`.

~~~



Example:



```coffeescript

circleArea 43.2673     # returns 5881.248  (± 0.01)

circleArea 68          # returns 14526.724 (± 0.01)

circleArea 0           # throws Error

circleArea -1          # throws Error

```

```csharp

Kata.CalculateAreaOfCircle(43.2673); // returns 5881.248  (± 0.01)

Kata.CalculateAreaOfCircle(68);      // returns 14526.724 (± 0.01)

Kata.CalculateAreaOfCircle(0.0);     // throws ArgumentException

Kata.CalculateAreaOfCircle(-1.0);    // throws ArgumentException

```

```haskell

circleArea 43.2673 -- returns Just ( 5881.248 ± 0.01)

circleArea 68      -- returns Just (14526.724 ± 0.01)

circleArea 0       -- returns Nothing

circleArea (-1)    -- returns Nothing

```

```java

Circle.area(43.2673);     // returns 5881.248  (± 0.01)

Circle.area(68);          // returns 14526.724 (± 0.01)

Circle.area(0);           // throws IllegalArgumentException

Circle.area(-1);          // throws IllegalArgumentException

```

```javascript

circleArea(43.2673);     // returns 5881.248  (± 0.01)

circleArea(68);          // returns 14526.724 (± 0.01)

circleArea(0);           // throws Error

circleArea(-1);          // throws Error

```

```python

circle_area(43.2673)      # returns 5881.248  (± 0.01)

circle_area(68)           # returns 14526.724 (± 0.01)

circle_area(0)            # raises ValueError

circle_area(-1)           # raises ValueError

```

```ruby

circle_area(43.2673)      # returns 5881.248  (± 0.01)

circle_area(68)           # returns 14526.724 (± 0.01)

circle_area(0)            # raises ArgumentError

circle_area(-1)           # raises ArgumentError

```

```typescript

circleArea(43.2673);     // returns 5881.248  (± 0.01)

circleArea(68);          // returns 14526.724 (± 0.01)

circleArea(0);           // throws Error

circleArea(-1);          // throws Error

```

---


🏷 `FUNDAMENTALS | ALGORITHMS | GEOMETRY | MATHEMATICS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/537baa6f8f4b300b5900106c)

![](https://www.codewars.com/users/jdold07/badges/large "tsdevau Codewars Badge")

---

###### *This Kata description was compiled by [**tsdevau**](https://tsdev.au) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
