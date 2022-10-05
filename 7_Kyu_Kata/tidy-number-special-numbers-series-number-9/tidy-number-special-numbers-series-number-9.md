# 7 kyu - Tidy Number (Special Numbers Series  #9)

##### **ID**: [5a87449ab1710171300000fd](https://www.codewars.com/kata/5a87449ab1710171300000fd) | **Slug**: [tidy-number-special-numbers-series-number-9](https://www.codewars.com/kata/5a87449ab1710171300000fd) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2018-02-16 ***by*** [MrZizoScream](https://www.codewars.com/users/MrZizoScream) | **Approved**: 2018-02-21 ***by*** [donaldsebleung](https://www.codewars.com/users/donaldsebleung)

##### **Languages Available**: cpp, python, crystal, ruby, javascript, java, c, haskell, csharp, nasm, dart, julia, php, typescript, coffeescript, reason, elixir, prolog, clojure, rust, r, d, factor

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-09-06

---

## Kata Description


# Definition



A **_Tidy number_**  *is a number whose*  **_digits are in non-decreasing order_**.

___

# Task



**_Given_** a number, **_Find if it is Tidy or not_** . 

____



# Warm-up (Highly recommended)



# [Playing With Numbers Series](https://www.codewars.com/collections/playing-with-numbers)

___



# Notes 





* **_Number_** *passed is always*  **_Positive_** .



* **_Return_** *the result as* a **_Boolean_** 



~~~if:prolog

* Since prolog doesn't have booleans,  return value should be 1 for (True) or 0 for (false)

~~~

___



# Input >> Output Examples



```

tidyNumber (12) ==> return (true)

```



## **_Explanation_**:



**_The number's digits_**    `{ 1 , 2 }`  are *in non-Decreasing Order* (i.e) *1 <= 2* .

____



```

tidyNumber (32) ==> return (false)

```



## **_Explanation_**:



**_The Number's Digits_**  `{ 3, 2}`  are **_not in non-Decreasing Order_** (i.e) *3 > 2* .

___



```

tidyNumber (1024) ==> return (false)

```



## **_Explanation_**:



**_The Number's Digits_**  `{1 , 0, 2, 4}`  are **_not in non-Decreasing Order_**  as  *0 <= 1* .



___



```

tidyNumber (13579) ==> return (true)

```



## **_Explanation_**:



**_The number's digits_**    `{1 , 3, 5, 7, 9}`  are *in non-Decreasing Order* .

____



```

tidyNumber (2335) ==> return (true)

```



## **_Explanation_**:



**_The number's digits_**    `{2 , 3, 3, 5}`  are *in non-Decreasing Order* , **_Note_**   *3 <= 3* 



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


🏷 `FUNDAMENTALS | ARRAYS | STRINGS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5a87449ab1710171300000fd)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
