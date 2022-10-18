# 6 kyu - Statistics for an Athletic Association

##### **ID**: [55b3425df71c1201a800009c](https://www.codewars.com/kata/55b3425df71c1201a800009c) | **Slug**: [statistics-for-an-athletic-association](https://www.codewars.com/kata/55b3425df71c1201a800009c) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-07-25 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2015-11-06 ***by*** [joh_pot](https://www.codewars.com/users/joh_pot)

##### **Languages Available**: ruby, python, javascript, haskell, java, csharp, clojure, coffeescript, cpp, php, c, swift, crystal, typescript, r, shell, ocaml, elixir, fsharp, julia, scala, powershell, go, nim, rust, reason, racket, kotlin, pascal, perl, lua, elm, d, prolog

##### **My Completed Languages**: typescript, javascript ***as at*** 2022-10-18 | **Originally completed**: 2022-10-18

---

## Kata Description


You are the "computer expert" of a local Athletic Association (C.A.A.).

Many teams of runners come to compete. Each time you get a string of 

all race results of every team who has run.

For example here is a string showing the individual results of a team of 5 runners:



` "01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17" `



Each part of the string is of the form: ` h|m|s `

where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. Substrings in the input string are separated by `, ` or `,`.



To compare the results of the teams you are asked for giving

three statistics; **range, average and median**.



- `Range` : difference between the lowest and highest values. 

In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, 

so the range is 9 − 3 = 6.



- `Mean or Average` : To calculate mean, add together all of the numbers 

in a set and then divide the sum by the total count of numbers.



- `Median` : In statistics, the median is the number separating the higher half 

of a data sample from the lower half. 

The median of a finite list of numbers can be found by arranging all 

the observations from lowest value to highest value and picking the middle one 

(e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. 

If there is an even number of observations, then there is no single middle value; 

the median is then defined to be the mean of the two middle values

(the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).



Your task is to return a string giving these 3 values.  For the example given above,

the string result will be



`"Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"`



of the form:

 "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"`



where hh, mm, ss are integers (represented by strings) with *each 2 digits*.



#### *Remarks*: 



1. if a result in seconds is ab.xy... it will be given **truncated** as ab.

2. if the given string is "" you will return ""



---


🏷 `FUNDAMENTALS | STRINGS | STATISTICS | MATHEMATICS | DATA SCIENCE`


[View this Kata on Codewars.com](https://www.codewars.com/kata/55b3425df71c1201a800009c)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
