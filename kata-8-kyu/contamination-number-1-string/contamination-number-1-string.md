# 8 kyu - Contamination #1 -String-

##### **ID**: [596fba44963025c878000039](https://www.codewars.com/kata/596fba44963025c878000039) | **Slug**: [contamination-number-1-string](https://www.codewars.com/kata/596fba44963025c878000039) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2017-07-19 ***by*** [John Brekker](https://www.codewars.com/users/John%20Brekker) | **Approved**: 2017-07-20 ***by*** [GiacomoSorbi](https://www.codewars.com/users/GiacomoSorbi)

##### **Languages Available**: python, javascript, ruby, crystal, csharp, haskell, go, rust, d, riscv

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-08-25

---

## Kata Description


An AI has infected a text with a character!! 



This text is now **fully mutated** to this character.



~~~if-not:riscv

If the text or the character are empty, return an empty string.  

There will never be a case when both are empty as nothing is going on!!



**Note:** The character is a string of length 1 or an empty string.

~~~



~~~if:riscv

If the text is empty, return an empty string.

~~~



# Example



```

text before = "abc"

character   = "z"

text after  = "zzz"

```



~~~if:riscv

RISC-V: The function signature is



```c

void contamination(const char *text, char mutation, char *result);

```



The function does not have a return value - you should write the mutated string into `result`. You may safely assume that `result` will be large enough to hold the result.

~~~

---


🏷 `STRINGS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/596fba44963025c878000039)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
