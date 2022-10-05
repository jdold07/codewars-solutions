# 8 kyu - Invert values

##### **ID**: [5899dc03bc95b1bf1b0000ad](https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad) | **Slug**: [invert-values](https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2017-02-07 ***by*** [user7657844](https://www.codewars.com/users/user7657844) | **Approved**: 2017-02-08 ***by*** [PG1](https://www.codewars.com/users/PG1)

##### **Languages Available**: python, javascript, php, haskell, csharp, crystal, ruby, java, coffeescript, cpp, c, elixir, nasm, kotlin, racket, dart, factor, rust, julia, typescript, r, d, riscv

##### **My Completed Languages**: javascript, python ***as at*** 2022-10-05 | **Originally completed**: 2021-12-01

---

## Kata Description


Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.



~~~if-not:racket

```

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]

invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]

invert([]) == []

```

~~~



```if:javascript,python,ruby,php,elixir,dart

You can assume that all values are integers. Do not mutate the input array/list.

```



```if:c,riscv

### Notes:

- All values are greater than `INT_MIN`

- The input should be modified, not returned.

```

~~~if:racket

```racket

(invert '(1 2 3 4 5))   ; '(-1 -2 -3 -4 -5)

(invert '(1 -2 3 -4 5)) ; '(-1 2 -3 4 -5)

(invert '())            ; '()

```

~~~



~~~if:riscv

RISC-V: The function signature is:



```c

void invert(int *arr, size_t size);

```



The input array is `arr` which contains `size` elements. Mutate the array in-place according to the above specification. You do not need to return anything.

~~~

---


🏷 `LISTS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
