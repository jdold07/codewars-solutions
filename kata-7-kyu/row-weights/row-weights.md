# 7 kyu - Row Weights

##### **ID**: [5abd66a5ccfd1130b30000a9](https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9) | **Slug**: [row-weights](https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2018-03-29 ***by*** [MrZizoScream](https://www.codewars.com/users/MrZizoScream) | **Approved**: 2018-04-20 ***by*** [donaldsebleung](https://www.codewars.com/users/donaldsebleung)

##### **Languages Available**: cpp, ruby, javascript, python, crystal, c, java, csharp, haskell, rust, dart, vb, php, julia, nasm, coffeescript, typescript, reason, elixir, cfml, clojure, prolog, cobol

##### **My Completed Languages**: python ***as at*** 2022-10-08 | **Originally completed**: 2022-04-24

---

## Kata Description


# Scenario



**_Several people_** are standing in *a row divided into two teams*.  

The **_first person_** goes into **_team 1_**, **_the second_** goes into **_team 2_**, **_the third_** goes into **_team 1_**, and so on.

___

# Task



**_Given_** *an array of positive integers (the weights of the people)*, **_return_** *a new array/tuple of two integers*, **_where_** **_the first_** one is the **_total weight of team 1_**, and **_the second_** one is the **_total weight of team 2_**.

___

# Notes 



* **_Array size_** is *at least 1*.

* **_All numbers_** will be **positive**.

___

# Input >> Output Examples 



```cpp

rowWeights([13, 27, 49])  ==>  return (62, 27)

```

```prolog

row_weights([13, 27, 49], [62, 27]).

```



## **_Explanation_**:



**_The first element_** `62` is *the total weight of team 1*, and **_the second element_** `27` is *the total weight of team 2*.

___

```cpp

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)

```

```prolog

row_weights([50, 60, 70, 80], [120, 140]).

```

## **_Explanation_**:



**_The first element_** `120` is *the total weight of team 1*, and **_the second element_** `140` is *the total weight of team 2*.

___

```cpp

rowWeights([80])  ==>  return (80, 0)

```

```prolog

row_weights([80], [80, 0]).

```

## **_Explanation_**:



**_The first element_** `80` is *the total weight of team 1*, and **_the second element_** `0` is *the total weight of team 2*.

___

___

___



# [Playing with Numbers Series](https://www.codewars.com/collections/playing-with-numbers)



# [Playing With Lists/Arrays Series](https://www.codewars.com/collections/playing-with-lists-slash-arrays)



# [For More Enjoyable Katas](http://www.codewars.com/users/MrZizoScream/authored)

___



## ALL translations are welcomed



## Enjoy Learning !!

# Zizou



---


🏷 `FUNDAMENTALS | ARRAYS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
