# 6 kyu - Ball Upwards

##### **ID**: [566be96bb3174e155300001b](https://www.codewars.com/kata/566be96bb3174e155300001b) | **Slug**: [ball-upwards](https://www.codewars.com/kata/566be96bb3174e155300001b) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-12-12 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2016-03-11 ***by*** [myjinxin2015](https://www.codewars.com/users/myjinxin2015)

##### **Languages Available**: python, javascript, java, csharp, coffeescript, haskell, clojure, ruby, elixir, typescript, cpp, php, crystal, fsharp, c, ocaml, rust, swift, go, shell, r, nim, objc, kotlin, fortran, julia, nasm, scala, powershell, reason, racket, forth, prolog, haxe, commonlisp, dart, pascal, raku, lua, perl, cobol, elm, d, erlang

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-09-10

---

## Kata Description


You throw a ball vertically upwards with an initial speed `v (in km per hour)`. The height `h` of the ball at each time `t`

is given by `h = v*t - 0.5*g*t*t` where `g` is Earth's gravity `(g ~ 9.81 m/s**2)`. A device is recording at every **tenth of second** the height of the ball.

For example with `v = 15 km/h` the device gets something of the following form:

`(0, 0.0), (1, 0.367...), (2, 0.637...), (3, 0.808...), (4, 0.881..) ...`

where the first number is the time in tenth of second and the second number the height in meter.



#### Task

Write a function `max_ball` with parameter `v (in km per hour)` that returns the `time in tenth of second`

of the maximum height recorded by the device.

#### Examples:

`max_ball(15) should return 4`



`max_ball(25) should return 7`

#### Notes

- Remember to convert the velocity from km/h to m/s or from m/s in km/h when necessary.

- The maximum height recorded by the device is not necessarily the maximum height reached by the ball.

---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/566be96bb3174e155300001b)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
