# 7 kyu - Growth of a Population

##### **ID**: [563b662a59afc2b5120000c6](https://www.codewars.com/kata/563b662a59afc2b5120000c6) | **Slug**: [growth-of-a-population](https://www.codewars.com/kata/563b662a59afc2b5120000c6) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2015-11-05 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2015-11-06 ***by*** [joh_pot](https://www.codewars.com/users/joh_pot)

##### **Languages Available**: ruby, python, javascript, coffeescript, haskell, java, csharp, clojure, cpp, php, crystal, fsharp, c, typescript, r, nim, shell, ocaml, lua, kotlin, fortran, elixir, julia, powershell, go, rust, reason, racket, forth, factor, dart, elm, scala, prolog, haxe, raku, pascal, perl, d, cobol

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2021-11-08

---

## Kata Description


In a small town the population is `p0 = 1000` at the beginning of a year. The population

regularly increases by `2 percent` per year and moreover `50` new inhabitants per year come to live in the town. 

How many years does the town need to see its population

greater or equal to `p = 1200` inhabitants?



```

At the end of the first year there will be: 

1000 + 1000 * 0.02 + 50 => 1070 inhabitants



At the end of the 2nd year there will be: 

1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)



At the end of the 3rd year there will be:

1141 + 1141 * 0.02 + 50 => 1213



It will need 3 entire years.

```

More generally given parameters:



`p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)`



the function `nb_year` should return `n` number of entire years needed to get a population greater or equal to `p`.



aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)



```

Examples:

nb_year(1500, 5, 100, 5000) -> 15

nb_year(1500000, 2.5, 10000, 2000000) -> 10

```



#### Note: 

Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.





---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/563b662a59afc2b5120000c6)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
