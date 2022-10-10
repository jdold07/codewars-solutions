# 5 kyu - Product of consecutive Fib numbers

##### **ID**: [5541f58a944b85ce6d00006a](https://www.codewars.com/kata/5541f58a944b85ce6d00006a) | **Slug**: [product-of-consecutive-fib-numbers](https://www.codewars.com/kata/5541f58a944b85ce6d00006a) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">5 kyu</span>

##### **First Published**: 2015-04-30 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2015-05-08 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: ruby, javascript, csharp, haskell, python, java, clojure, coffeescript, cpp, php, crystal, fsharp, c, typescript, rust, swift, go, r, shell, ocaml, kotlin, elixir, julia, scala, powershell, nim, racket, reason, forth, prolog, fortran, elm, cobol, d, erlang, factor, nasm

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2021-12-04

---

## Kata Description


The Fibonacci numbers are the numbers in the following integer sequence (Fn):

>0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...



such as 

>F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.



Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying 

>F(n) * F(n+1) = prod.



Your function productFib takes an integer (prod) and returns

an array: 

```

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)

```

depending on the language if F(n) * F(n+1) = prod.



If you don't find two consecutive F(n) verifying `F(n) * F(n+1) = prod`you will return

```

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)

```

F(n) being the smallest one such as `F(n) * F(n+1) > prod`.





#### Some Examples of Return:

(depend on the language)



```

productFib(714) # should return (21, 34, true), 

                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34



productFib(800) # should return (34, 55, false), 

                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55

-----

productFib(714) # should return [21, 34, true], 

productFib(800) # should return [34, 55, false], 

-----

productFib(714) # should return {21, 34, 1}, 

productFib(800) # should return {34, 55, 0},        

-----

productFib(714) # should return {21, 34, true}, 

productFib(800) # should return {34, 55, false}, 

```



#### Note:



- You can see examples for your language in "Sample Tests".





---


🏷 `ALGORITHMS | MATHEMATICS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5541f58a944b85ce6d00006a)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
