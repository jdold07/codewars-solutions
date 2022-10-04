# 7 kyu - Capitalize first letter of a string

##### **ID**: [56c19316e8b139dff60006da](https://www.codewars.com/kata/56c19316e8b139dff60006da) | **Slug**: [capitalize-first-letter-of-a-string](https://www.codewars.com/kata/56c19316e8b139dff60006da) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2016-02-15 ***by*** [donaldsebleung](https://www.codewars.com/users/donaldsebleung) | **Approved**: 2016-02-16 ***by*** [matt c](https://www.codewars.com/users/matt%20c)

##### **Languages Available**: javascript, coffeescript, riscv

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-09-14

---

## Kata Description


# Capitalize First Letter of a String



Write a function `capitalize()` which capitalizes the first letter (if any) of the given string.  For example:



| Input | Output |

| --- | --- |

| `string` | `String` |

| `hello World` | `Hello World` |

| `i love codewars` | `I love codewars` |

| `This sentence is already capitalized` | `This sentence is already capitalized` |

| `0123the first character of this sentence is not a letter` | `0123the first character of this sentence is not a letter` |



~~~if:javascript,coffeescript

JavaScript / CoffeeScript: Extend the `String` prototype with a method `capitalize()` so you can call it on a string like so: `"string".capitalize()`. Learn about [inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).



Furthermore, the built-in string methods `toUpperCase()` and `toLowerCase()` are disabled for this Kata.

~~~



~~~if:riscv

RISC-V: The function signature is



```c

void capitalize(const char *str, char *out);

```



`str` is the input string. You should write the capitalized result to `out`. You may assume `out` is large enough to hold the result. You do not need to return anything.



Your solution should handle `NULL` input gracefully by returning immediately.

~~~

---


🏷 `FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING | REGULAR EXPRESSIONS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/56c19316e8b139dff60006da)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
