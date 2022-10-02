# 8 kyu - Return Negative

##### **ID**: [55685cd7ad70877c23000102](https://www.codewars.com/kata/55685cd7ad70877c23000102) | **Slug**: [return-negative](https://www.codewars.com/kata/55685cd7ad70877c23000102) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2015-05-29 ***by*** [Deantwo](https://www.codewars.com/users/Deantwo) | **Approved**: 2015-06-05 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: csharp, python, javascript, haskell, ruby, java, coffeescript, cpp, elixir, typescript, go, julia, kotlin, nasm, groovy, scala, c, php, racket, cfml, crystal, r, dart, perl, cobol, factor, d, ocaml

##### **My Completed Languages**: javascript, python ***as at*** 2022-10-02 | **Originally completed**: 2021-11-16

---

## Kata Description


In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?



### Examples



``` text

Input:  1  =>  Output: -1

Input: -5  =>  Output: -5

Input:  0  =>  Output:  0

```

``` c

makeNegative(1);  // return -1

makeNegative(-5); // return -5

makeNegative(0);  // return 0

```

``` d

makeNegative(1);  // return -1

makeNegative(-5); // return -5

makeNegative(0);  // return 0

```

``` cfml

makeNegative(1);  // return -1

makeNegative(-5); // return -5

makeNegative(0);  // return 0

```

``` csharp

Kata.MakeNegative(1);  // return -1

Kata.MakeNegative(-5); // return -5

Kata.MakeNegative(0);  // return 0

```

``` java

Kata.makeNegative(1);  // return -1

Kata.makeNegative(-5); // return -5

Kata.makeNegative(0);  // return 0

```

``` crystal

make_negative(1);  # return -1

make_negative(-5); # return -5

make_negative(0);  # return 0

```

``` r

make_negative(1);  # return -1

make_negative(-5); # return -5

make_negative(0);  # return 0

```

``` python

make_negative(1);  # return -1

make_negative(-5); # return -5

make_negative(0);  # return 0

```

``` javascript

makeNegative(1);    // return -1

makeNegative(-5);   // return -5

makeNegative(0);    // return 0

makeNegative(0.12); // return -0.12

```

``` dart

makeNegative(1);    // return -1

makeNegative(-5);   // return -5

makeNegative(0);    // return 0

makeNegative(0.12); // return -0.12

```

``` typescript

makeNegative(1);  // return -1

makeNegative(-5); // return -5

makeNegative(0);  // return 0

```

``` cpp

makeNegative(1);  // return -1

makeNegative(-5); // return -5

makeNegative(0);  // return 0

```

``` haskell

makeNegative    1 -- return -1

makeNegative (-5) -- return -5

makeNegative    0 -- return 0

makeNegative 0.12 -- return -0.12

```

``` ruby

makeNegative(1);  # return -1

makeNegative(-5); # return -5

makeNegative(0);  # return 0

```

``` coffeescript

makeNegative 1    # return -1

makeNegative -5   # return -5

makeNegative 0    # return 0

```

``` elixir

make_negative 1    # return -1

make_negative -5   # return -5

make_negative 0    # return 0

```

``` go

MakeNegative(1)    // return -1

MakeNegative(-5)   // return -5

MakeNegative(0)    // return 0

```

``` julia

Kata.makenegative(1)  # return -1

Kata.makenegative(-5) # return -5

Kata.makenegative(0)  # return 0

```

``` kotlin

Kata().makeNegative(1)  // return -1

Kata().makeNegative(-5) // return -5

Kata().makeNegative(0)  // return 0

```

``` nasm

make_negative(1);    // return -1

make_negative(-5);   // return -5

make_negative(0);    // return 0

```

``` groovy

Kata.makeNegative(1)    // return -1

Kata.makeNegative(-5)   // return -5

Kata.makeNegative(0)    // return 0

```

``` php

makeNegative(1)    // return -1

makeNegative(-5)   // return -5

makeNegative(0)    // return 0

makeNegative(0.12) // return -0.12

```

``` racket

(make-negative 1)    ; -1

(make-negative -5)   ; -5

(make-negative 0)    ; 0

(make-negative 0.12) ; -0.12

```

``` scala

Negative.makeNegative(1)  // return -1

Negative.makeNegative(-5) // return -5

Negative.makeNegative(0)  // return 0

```

``` perl

Kata::make_negative(1)     # return -1

Kata::make_negative(-5)    # return -5

Kata::make_negative(0)     # return 0

Kata::make_negative(0.12); # return -0.12

```

``` cobol

        MAKE-NEGATIVE 1

      * RESULT = -1

        MAKE-NEGATIVE -5

      * RESULT = -5

        MAKE-NEGATIVE 0

      * RESULT = 0

```



### Notes



- The number can be negative already, in which case no change is required.

- Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.



---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/55685cd7ad70877c23000102)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
