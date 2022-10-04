# 8 kyu - Age Range Compatibility Equation

##### **ID**: [5803956ddb07c5c74200144e](https://www.codewars.com/kata/5803956ddb07c5c74200144e) | **Slug**: [age-range-compatibility-equation](https://www.codewars.com/kata/5803956ddb07c5c74200144e) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2016-10-17 ***by*** [AcesOfGlory](https://www.codewars.com/users/AcesOfGlory) | **Approved**: 2016-10-17 ***by*** [matt c](https://www.codewars.com/users/matt%20c)

##### **Languages Available**: python, javascript, ruby, coffeescript, java, php, csharp

##### **My Completed Languages**: python ***as at*** 2022-10-04 | **Originally completed**: 2022-09-24

---

## Kata Description


Everybody knows the classic ["half your age plus seven"](https://en.wikipedia.org/wiki/Age_disparity_in_sexual_relationships#The_.22half-your-age-plus-seven.22_rule) dating rule that a lot of people follow (including myself). It's the 'recommended' age range in which to date someone. 



<!-- Original link is dead. Replaced with archive.org link.

<img src="http://weknowmemes.com/wp-content/uploads/2014/08/age-range-compatibility-equation.jpg" style="width: 400px;"/>

-->

<img src="http://web.archive.org/web/20190206114947if_/http://weknowmemes.com/wp-content/uploads/2014/08/age-range-compatibility-equation.jpg" style="width: 400px;"/>



```minimum age <= your age <= maximum age```

#Task



Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.



This equation doesn't work when the age <= 14, so use this equation instead:

```

min = age - 0.10 * age

max = age + 0.10 * age

```

You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). ```Return your answer in the form [min]-[max]```



##Examples:



```

age = 27   =>   20-40

age = 5    =>   4-5

age = 17   =>   15-20

```



---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5803956ddb07c5c74200144e)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
