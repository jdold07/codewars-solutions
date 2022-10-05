# 7 kyu - Functional Addition

##### **ID**: [538835ae443aae6e03000547](https://www.codewars.com/kata/538835ae443aae6e03000547) | **Slug**: [functional-addition](https://www.codewars.com/kata/538835ae443aae6e03000547) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2014-05-30 ***by*** [amrdraz](https://www.codewars.com/users/amrdraz) | **Approved**: 2014-07-01 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, coffeescript, python, haskell, fsharp, swift, csharp, java, go, elixir

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-08-26

---

## Kata Description


Create a function `add(n)`/`Add(n)` which returns a function that always adds n to any number



Note for Java: the return type and methods have not been provided to make it a bit more challenging.



```javascript

var addOne = add(1);

addOne(3); // 4



var addThree = add(3);

addThree(3); // 6

```

```python

add_one = add(1)

add_one(3)  # 4



add_three = add(3)

add_three(3) # 6

```

```haskell

addOne = add 1

addOne 3 `shouldBe` 4

```

```fsharp

addOne = add 1

addOne 3 # 4

```

```swift

addOne = add(1)

addOne(3) // 4

```

```csharp

Func<double, double> AddOne = Kata.Add(1);

AddOne(3) => 4

```

```java

...returnType addOne = Kata.add(1);

addOne.method(3) => 4

```

```go

var addOne = Add(1)

addOne(3) // 4

```

```elixir

add_one = Kata.add(1)

add_one.(3) # 4

```



---


🏷 `FUNCTIONAL PROGRAMMING | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/538835ae443aae6e03000547)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
