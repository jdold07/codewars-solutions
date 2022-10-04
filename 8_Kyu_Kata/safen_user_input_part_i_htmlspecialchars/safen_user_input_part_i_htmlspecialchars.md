# 8 kyu - Safen User Input Part I - htmlspecialchars

##### **ID**: [56bcaedfcf6b7f2125001118](https://www.codewars.com/kata/56bcaedfcf6b7f2125001118) | **Slug**: [safen-user-input-part-i-htmlspecialchars](https://www.codewars.com/kata/56bcaedfcf6b7f2125001118) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2016-02-11 ***by*** [donaldsebleung](https://www.codewars.com/users/donaldsebleung) | **Approved**: 2016-05-21 ***by*** [smile67](https://www.codewars.com/users/smile67)

##### **Languages Available**: javascript, typescript, coffeescript, rust, python, ruby, riscv

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-09-22

---

## Kata Description


# Safen User Input Part I - htmlspecialchars



You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease.  However, **with ease comes danger**.  Every now and then, a hacker visits your website and attempts to compromise it through the use of **XSS (Cross Site Scripting)**.  This is done by injecting `script` tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).



## Mission



Your mission is to implement a function that converts the following potentially harmful characters:



1. `<` --> `&lt;`

2. `>` --> `&gt;`

3. `"` --> `&quot;`

4. `&` --> `&amp;`



Good luck :D





~~~if:riscv

RISC-V: the function signature is



```c

void htmlspecialchars(const char *str, char *out);

```



`str` is the input string. Write your result to `out`. You may assume `out` is large enough to hold the result. You do not need to return anything.

~~~

---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/56bcaedfcf6b7f2125001118)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
