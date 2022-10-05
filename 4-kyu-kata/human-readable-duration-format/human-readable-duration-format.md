# 4 kyu - Human readable duration format

##### **ID**: [52742f58faf5485cae000b9a](https://www.codewars.com/kata/52742f58faf5485cae000b9a) | **Slug**: [human-readable-duration-format](https://www.codewars.com/kata/52742f58faf5485cae000b9a) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:blue">4 kyu</span>

##### **First Published**: 2013-11-02 ***by*** [davazp](https://www.codewars.com/users/davazp) | **Approved**: 2013-11-20 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, coffeescript, clojure, python, ruby, elixir, php, haskell, csharp, java, groovy, swift, shell, kotlin, scala, cpp, c, julia, racket, nasm, fortran, rust, cobol, go, ocaml

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2021-12-03

---

## Kata Description


Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.



The function must accept a non-negative integer. If it is zero, it just returns `"now"`. Otherwise,  the duration is expressed as a combination of `years`, `days`, `hours`, `minutes` and `seconds`.



It is much easier to understand with an example:



```text

* For seconds = 62, your function should return 

    "1 minute and 2 seconds"

* For seconds = 3662, your function should return

    "1 hour, 1 minute and 2 seconds"

```



**For the purpose of this Kata, a year is 365 days and a day is 24 hours.**



Note that spaces are important.





### Detailed rules



The resulting expression is made of components like `4 seconds`, `1 year`, etc.  In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.



The components are separated by a comma and a space (`", "`). Except the last component, which is separated by `" and "`, just like it would be written in English. 



A more significant units of time will occur before than a least significant one. Therefore, `1 second and 1 year` is not correct, but `1 year and 1 second` is.



Different components have different unit of times. So there is not repeated units like in `5 seconds and 1 second`.



A component will not appear at all if its value happens to be zero.  Hence, `1 minute and 0 seconds` is not valid, but it should be just `1 minute`.



 A unit of time must be used "as much as possible". It means that the function should not return `61 seconds`, but `1 minute and 1 second` instead.  Formally, the duration specified by  of a component must not be greater than any valid more significant unit of time.



---


🏷 `STRINGS | DATE TIME | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/52742f58faf5485cae000b9a)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
