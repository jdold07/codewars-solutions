# 7 kyu - Find the divisors! 

##### **ID**: [544aed4c4a30184e960010f4](https://www.codewars.com/kata/544aed4c4a30184e960010f4) | **Slug**: [find-the-divisors](https://www.codewars.com/kata/544aed4c4a30184e960010f4) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2014-10-25 ***by*** [kwy95](https://www.codewars.com/users/kwy95) | **Approved**: 2014-11-19 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, coffeescript, haskell, python, ruby, rust, elixir, csharp, php, c

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2021-11-22

---

## Kata Description


Create a function named `divisors`/`Divisors` that takes an integer `n > 1` and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (`null` in C#) (use `Either String a` in Haskell and `Result<Vec<u32>, String>` in Rust).



#### Example:



```c

divisors(12); // results in {2, 3, 4, 6}

divisors(25); // results in {5}

divisors(13); // results in NULL

```

```javascript

divisors(12); // should return [2,3,4,6]

divisors(25); // should return [5]

divisors(13); // should return "13 is prime"

```

```elixir

divisors(12) # should return [2,3,4,6]

divisors(25) # should return [5]

divisors(13) # should return "13 is prime"

```

```coffeescript

divisors(12); # should return [2,3,4,6]

divisors(25); # should return [5]

divisors(13); # should return "13 is prime"

```

```haskell

divisors 12   -- should return Right [2,3,4,6]

divisors 25   -- should return Right [5]

divisors 13   -- should return Left "13 is prime"

```

```python

divisors(12); #should return [2,3,4,6]

divisors(25); #should return [5]

divisors(13); #should return "13 is prime"

```

```ruby

divisors(12) # should return [2,3,4,6]

divisors(25) # should return [5]

divisors(13) # should return "13 is prime"

```

```rust

divisors(12); // should return Ok(vec![2,3,4,6])

divisors(25); // should return Ok(vec![5])

divisors(13); // should return Err("13 is prime")

```

```csharp

Kata.Divisors(12) => new int[] {2, 3, 4, 6};

Kata.Divisors(25) => new int[] {5};

Kata.Divisors(13) => null;

```

```php

divisors(12); // => [2, 3, 4, 6]

divisors(25); // => [5]

divisors(13); // => '13 is prime'

```

---


🏷 `MATHEMATICS | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/544aed4c4a30184e960010f4)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
