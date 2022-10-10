# 8 kyu - Generate range of integers

##### **ID**: [55eca815d0d20962e1000106](https://www.codewars.com/kata/55eca815d0d20962e1000106) | **Slug**: [generate-range-of-integers](https://www.codewars.com/kata/55eca815d0d20962e1000106) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2015-09-06 ***by*** [XxxX88](https://www.codewars.com/users/XxxX88) | **Approved**: 2016-01-15 ***by*** [alchemy](https://www.codewars.com/users/alchemy)

##### **Languages Available**: javascript, elixir, csharp, racket, rust, c, prolog, ruby, nim, julia, python, nasm

##### **My Completed Languages**: python ***as at*** 2022-10-08 | **Originally completed**: 2022-04-20

---

## Kata Description


Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)



### Task

Implement a function named



```rust

generateRange(2, 10, 2) // should return iterator of [2,4,6,8,10]

generateRange(1, 10, 3) // should return iterator of [1,4,7,10]

```

```javascript

generateRange(2, 10, 2) // should return array of [2,4,6,8,10]

generateRange(1, 10, 3) // should return array of [1,4,7,10]

```

```elixir

generate_range(2, 10, 2) # should return array of [2,4,6,8,10]

generate_range(1, 10, 3) # should return array of [1,4,7,10]

```

```csharp

GenerateRange(2, 10, 2) == new int[]{ 2, 4, 6, 8, 10 }

GenerateRange(1, 10, 3) == new int[]{ 1, 4, 7, 10 }

```

```racket

(generate-range 2 10 2) ; '(2 4 6 8 10)

(generate-range 1 10 3) ; '(1 4 7 10)

```

```c

generate_range(2, 10, 2, *n) # returns {2, 4, 6, 8, 10}, sets n to 5

generate_range(1, 10, 3, *n) # returns    {1, 4, 7, 10}, sets n to 4

```

```ruby

generate_range(2, 10, 2) # should return array of [2,4,6,8,10]

generate_range(1, 10, 3) # should return array of [1,4,7,10]

```

```python

generate_range(2, 10, 2) # should return list of [2,4,6,8,10]

generate_range(1, 10, 3) # should return list of [1,4,7,10]

```

```nim

generateRange(2, 10, 2) # should return seq of @[2, 4, 6, 8, 10]

generateRange(1, 10, 3) # should return seq of @[1, 4, 7, 10]

```

```julia

generaterange(2, 10, 2) # should return array of [2, 4, 6, 8, 10]

generaterange(1, 10, 3) # should return array of [1, 4, 7, 10]

```

```nasm

generate_range(2, 10, 2, *n) ; returns [2, 4, 6, 8, 10], sets n to 5

generate_range(1, 10, 3, *n) ; returns    [1, 4, 7, 10], sets n to 4

```



### Note

- min < max

- step > 0

- the range does not HAVE to include max (depending on the step)





---


🏷 `ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/55eca815d0d20962e1000106)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
