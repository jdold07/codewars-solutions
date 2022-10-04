# 8 kyu - Basic Mathematical Operations

##### **ID**: [57356c55867b9b7a60000bd7](https://www.codewars.com/kata/57356c55867b9b7a60000bd7) | **Slug**: [basic-mathematical-operations](https://www.codewars.com/kata/57356c55867b9b7a60000bd7) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2016-05-13 ***by*** [Quickz](https://www.codewars.com/users/Quickz) | **Approved**: 2016-05-16 ***by*** [matt c](https://www.codewars.com/users/matt%20c)

##### **Languages Available**: javascript, php, python, coffeescript, c, csharp, ruby, java, typescript, cpp, nasm, elixir, haskell, r, crystal, julia, rust

##### **My Completed Languages**: javascript, python ***as at*** 2022-10-04 | **Originally completed**: 2021-12-01

---

## Kata Description


Your task is to create a function that does four basic mathematical operations.



The function should take three arguments - operation(string/char), value1(number), value2(number).  

The function should return result of numbers after applying the chosen operation.



### Examples(Operator, value1, value2) --> output



~~~if-not:nasm

```

('+', 4, 7) --> 11

('-', 15, 18) --> -3

('*', 5, 5) --> 25

('/', 49, 7) --> 7

```

~~~



~~~if:nasm

```nasm

mov dil, '+'

mov rax, __float64__(4.0)

mov rdx, __float64__(7.0)

movq xmm0, rax

movq xmm1, rdx

call basic_op        ; XMM0 <- 11.0



mov dil, '-'

mov rax, __float64__(15.0)

mov rdx, __float64__(18.0)

movq xmm0, rax

movq xmm1, rdx

call basic_op        ; XMM0 <- -3.0



mov dil, '*'

mov rax, __float64__(5.0)

movq xmm0, rax

movq xmm1, rax

call basic_op        ; XMM0 <- 25.0



mov dil, '/'

mov rax, __float64__(49.0)

mov rdx, __float64__(7.0)

movq xmm0, rax

movq xmm1, rdx

call basic_op        ; XMM0 <- 7.0

```

~~~

---


🏷 `MATHEMATICS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/57356c55867b9b7a60000bd7)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
