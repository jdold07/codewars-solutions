# 8 kyu - Days in the year

##### **ID**: [56d6c333c9ae3fc32800070f](https://www.codewars.com/kata/56d6c333c9ae3fc32800070f) | **Slug**: [days-in-the-year](https://www.codewars.com/kata/56d6c333c9ae3fc32800070f) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2016-03-02 ***by*** [alwinsol](https://www.codewars.com/users/alwinsol) | **Approved**: 2016-03-03 ***by*** [GiacomoSorbi](https://www.codewars.com/users/GiacomoSorbi)

##### **Languages Available**: javascript, ruby, python, elixir

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-09-10

---

## Kata Description


A variation of determining leap years, assuming only integers are used and years can be negative and positive.



Write a function which will return the days in the year and the year entered in a string.  For example:



````if:javascript

```javascript

yearDays(2000) returns "2000 has 366 days"

```

````

````if-not:javascript

```

year_days(2000) returns "2000 has 366 days"

```

````



There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.



Also the basic rule for validating a leap year are as follows



Most years that can be divided evenly by 4 are leap years. 



Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.



So the years 0, -64 and 2016 will return 366 days.

Whilst 1974, -10 and 666 will return 365 days.



---


🏷 `DATE TIME | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/56d6c333c9ae3fc32800070f)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
