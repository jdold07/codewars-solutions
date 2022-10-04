# 8 kyu - Duck Duck Goose

##### **ID**: [582e0e592029ea10530009ce](https://www.codewars.com/kata/582e0e592029ea10530009ce) | **Slug**: [duck-duck-goose](https://www.codewars.com/kata/582e0e592029ea10530009ce) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2016-11-17 ***by*** [10XL](https://www.codewars.com/users/10XL) | **Approved**: 2016-11-19 ***by*** [user8476848](https://www.codewars.com/users/user8476848)

##### **Languages Available**: ruby, javascript, crystal, python, php, coffeescript, java, csharp

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-08-24

---

## Kata Description


The objective of [Duck, duck, goose](https://en.wikipedia.org/wiki/Duck,_duck,_goose) is to _walk in a circle_, tapping on each player's head until one is chosen.



----



Task:

Given an array of Player objects (an array of associative arrays in PHP) and an index (**1-based**), return the `name` of the chosen Player(`name` is a property of `Player` objects, e.g `Player.name`)



----



Example:



```

duck_duck_goose([a, b, c, d], 1) should return a.name

duck_duck_goose([a, b, c, d], 5) should return a.name

duck_duck_goose([a, b, c, d], 4) should return d.name

```

```php

// PHP only

duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]

duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]

duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]

```

---


🏷 `ARRAYS | LISTS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/582e0e592029ea10530009ce)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
