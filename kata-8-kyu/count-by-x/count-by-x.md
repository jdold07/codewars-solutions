# 8 kyu - Count by X

##### **ID**: [5513795bd3fafb56c200049e](https://www.codewars.com/kata/5513795bd3fafb56c200049e) | **Slug**: [count-by-x](https://www.codewars.com/kata/5513795bd3fafb56c200049e) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2015-03-26 ***by*** [shums16](https://www.codewars.com/users/shums16) | **Approved**: 2015-04-05 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, python, ruby, haskell, elixir, coffeescript, csharp, solidity, php, groovy, dart, crystal, racket, cpp, nasm, r, java, julia, go, d, rust, c, lambdacalc

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2021-12-03

---

## Kata Description


Create a function with two arguments that will return an array of the first `n` multiples of `x`. 



Assume both the given number and the number of times to count will be positive numbers greater than `0`. 



Return the results as an array or list ( depending on language ).



### Examples



```cpp

countBy(1,10)  should return  {1,2,3,4,5,6,7,8,9,10}

countBy(2,5)  should return {2,4,6,8,10}

```

```java

countBy(1,10)  // should return  {1,2,3,4,5,6,7,8,9,10}

countBy(2,5)  // should return {2,4,6,8,10}

```

```javascript

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]

countBy(2,5) === [2,4,6,8,10]

```

```nasm

mov rdi, .memory ; {,,,,,,,,}

mov esi, 1

mov rdx, 10

call cntbyx     ; [RAX] <- {1,2,3,4,5,6,7,8,9,10}



mov rdi, .memory  ; {,,,,}

mov esi 2

mov rdx, 5

call cntbyx     ; [RAX] <- {2,4,6,8,10}

```

```coffeescript

countBy(1,10) == [1,2,3,4,5,6,7,8,9,10]

countBy(2,5) == [2,4,6,8,10]

```

```dart

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]

countBy(2,5) === [2,4,6,8,10]

```

```coffeescript

countBy(1,10) == [1,2,3,4,5,6,7,8,9,10]

countBy(2,5) == [2,4,6,8,10]

```

```python

count_by(1,10) #should return [1,2,3,4,5,6,7,8,9,10]

count_by(2,5) #should return [2,4,6,8,10]

```

```ruby

count_by(1,10) #should return [1,2,3,4,5,6,7,8,9,10]

count_by(2,5) #should return [2,4,6,8,10]

```

```crystal

count_by(1,10) #should return [1,2,3,4,5,6,7,8,9,10]

count_by(2,5) #should return [2,4,6,8,10]

```

```julia

countby(1,10) === [1,2,3,4,5,6,7,8,9,10]

countby(2,5) === [2,4,6,8,10]

```

```r

count_by(1,10) #should return c(1,2,3,4,5,6,7,8,9,10)

count_by(2,5) #should return c(2,4,6,8,10)

```

```haskell

countBy 1 10 `shouldBe` [1,2,3,4,5,6,7,8,9,10]

countBy 2  5 `shouldBe` [2,4,6,8,10]

```

```lambdacalc

count-by 1 10 -> [1,2,3,4,5,6,7,8,9,10]

count-by 2  5 -> [2,4,6,8,10]

```

```elixir

count_by(1, 10) == [1,2,3,4,5,6,7,8,9,10]

count_by(2, 5) == [2,4,6,8,10]

```

```solidity

countBy(1,10) // should return [1,2,3,4,5,6,7,8,9,10]

countBy(2,5) // should return [2,4,6,8,10]

```

```php

countBy(1,10) // should return [1,2,3,4,5,6,7,8,9,10]

countBy(2,5) // should return [2,4,6,8,10]

```

```groovy

Kata.countBy(1, 10) == [1,2,3,4,5,6,7,8,9,10]

Kata.countBy(2, 5) == [2,4,6,8,10]

```

```racket

(count-by 1 10) ; returns '(1 2 3 4 5 6 7 8 9 10)

(count-by 2 5)  ; returns '(2 4 6 8 10)

```

```rust

count_by(1, 10) // should return vec![1,2,3,4,5,6,7,8,9,10]

count_by(2,5) // should return vec![2,4,6,8,10]

```



~~~if:lambdacalc

### Encodings



purity: `LetRec`  

numEncoding: `Scott`  

export `foldl` for your `List` encoding  

~~~

---


🏷 `ARRAYS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5513795bd3fafb56c200049e)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
