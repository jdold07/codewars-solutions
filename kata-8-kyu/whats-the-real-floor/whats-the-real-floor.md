# 8 kyu - What's the real floor?

##### **ID**: [574b3b1599d8f897470018f6](https://www.codewars.com/kata/574b3b1599d8f897470018f6) | **Slug**: [whats-the-real-floor](https://www.codewars.com/kata/574b3b1599d8f897470018f6) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2016-05-29 ***by*** [acadet](https://www.codewars.com/users/acadet) | **Approved**: 2016-06-14 ***by*** [donaldsebleung](https://www.codewars.com/users/donaldsebleung)

##### **Languages Available**: ruby, javascript, coffeescript, python, csharp, prolog, c, cfml, julia, nasm, crystal, typescript, r, cobol, cpp

##### **My Completed Languages**: python ***as at*** 2022-10-08 | **Originally completed**: 2022-04-20

---

## Kata Description


Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).



Write a function that given a floor in the american system returns the floor in the european system.



With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.



Basements (negatives) stay the same as the universal level.



[More information here](https://en.wikipedia.org/wiki/Storey#European_scheme)



## Examples



```

1  =>  0 

0  =>  0

5  =>  4

15  =>  13

-3  =>  -3

```



---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/574b3b1599d8f897470018f6)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
