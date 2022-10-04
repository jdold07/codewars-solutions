# 8 kyu - L1: Set Alarm

##### **ID**: [568dcc3c7f12767a62000038](https://www.codewars.com/kata/568dcc3c7f12767a62000038) | **Slug**: [l1-set-alarm](https://www.codewars.com/kata/568dcc3c7f12767a62000038) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2016-01-07 ***by*** [Swolebrain](https://www.codewars.com/users/Swolebrain) | **Approved**: 2019-01-07 ***by*** [PG1](https://www.codewars.com/users/PG1)

##### **Languages Available**: javascript, ruby, python, coffeescript, haskell, java, c, nasm, julia, cpp, racket, crystal, dart, elixir, csharp, elm, factor, php, r, reason, typescript, rust, fsharp, go

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2021-12-04

---

## Kata Description


```if-not:julia,racket,rust

<p>Write a function named setAlarm which receives two parameters. The first parameter, *employed*, is true whenever you are employed and the second parameter, *vacation* is true whenever you are on vacation.</p>

```

```if:racket

<p>Write a function named set-alarm which receives two parameters. The first parameter, *employed*, is true whenever you are employed and the second parameter, *vacation* is true whenever you are on vacation.</p>

```

```if:julia

<p>Write a function named setalarm which receives two parameters. The first parameter, *employed*, is true whenever you are employed and the second parameter, *vacation* is true whenever you are on vacation.</p>

```

```if:rust

<p>Write a function named set_alarm which receives two parameters. The first parameter, *employed*, is true whenever you are employed and the second parameter, *vacation* is true whenever you are on vacation.</p>

```



<p>The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:</p>



~~~if-not:julia,racket,rust

```javascript

setAlarm(true, true) -> false

setAlarm(false, true) -> false

setAlarm(false, false) -> false

setAlarm(true, false) -> true

```

~~~

```julia

setalarm(true, true) -> false

setalarm(false, true) -> false

setalarm(false, false) -> false

setalarm(true, false) -> true

```

```racket

(set-alarm #t #t) ; #f

(set-alarm #f #t) ; #f

(set-alarm #f #f) ; #f

(set-alarm #t #f) ; #t

```

```rust

set_alarm(true, true) -> false

set_alarm(false, true) -> false

set_alarm(false, false) -> false

set_alarm(true, false) -> true

```

---


🏷 `FUNDAMENTALS | LOGIC`


[View this Kata on Codewars.com](https://www.codewars.com/kata/568dcc3c7f12767a62000038)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
