# 8 kyu - Powers of 2

##### **ID**: [57a083a57cb1f31db7000028](https://www.codewars.com/kata/57a083a57cb1f31db7000028) | **Slug**: [powers-of-2](https://www.codewars.com/kata/57a083a57cb1f31db7000028) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2016-08-02 ***by*** [wichu](https://www.codewars.com/users/wichu) | **Approved**: 2016-08-04 ***by*** [suic](https://www.codewars.com/users/suic)

##### **Languages Available**: haskell, python, coffeescript, javascript, ruby, csharp, fsharp, ocaml, julia, java, cpp, c, cobol, lambdacalc, factor, go, lua, riscv, bf

##### **My Completed Languages**: python ***as at*** 2022-10-05 | **Originally completed**: 2022-04-20

---

## Kata Description


Complete the function that takes a non-negative integer `n` as input, and returns a list of all the powers of `2` with the exponent ranging from `0` to `n` ( inclusive ).



## Examples



```python

n = 0  ==> [1]        # [2^0]

n = 1  ==> [1, 2]     # [2^0, 2^1]

n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

```

```bf

  n = String.fromCharCode(0)  ==> String.fromCharCode(1)

  n = String.fromCharCode(1)  ==> String.fromCharCode(1) + String.fromCharCode(2)

  n = String.fromCharCode(2)  ==> String.fromCharCode(1) + String.fromCharCode(2) + String.fromCharCode(4)

```

~~~if:lambdacalc

## Encodings



`purity: LetRec`  

`numEncoding: BinaryScott`  

export `foldr` for your `List` encoding

~~~



~~~if:riscv

RISC-V: The function signature is:



```c

void powers_of_two(size_t n, uint64_t powers[n + 1]);

```



Write the result to `powers`. You may assume it is large enough to hold the result. You should not return anything.

~~~

~~~if:bf

- Since BF doesn't have arrays, you should output each element individually.

- Outputs will always fit within a byte

~~~

---


🏷 `MATHEMATICS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/57a083a57cb1f31db7000028)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
