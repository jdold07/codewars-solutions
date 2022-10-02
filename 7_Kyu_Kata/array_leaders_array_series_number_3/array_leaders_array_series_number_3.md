# 7 kyu - Array Leaders (Array Series #3)

##### **ID**: [5a651865fd56cb55760000e0](https://www.codewars.com/kata/5a651865fd56cb55760000e0) | **Slug**: [array-leaders-array-series-number-3](https://www.codewars.com/kata/5a651865fd56cb55760000e0) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2018-01-22 ***by*** [MrZizoScream](https://www.codewars.com/users/MrZizoScream) | **Approved**: 2018-02-20 ***by*** [donaldsebleung](https://www.codewars.com/users/donaldsebleung)

##### **Languages Available**: cpp, python, javascript, c, java, haskell, csharp, ruby, php, julia, dart, coffeescript, crystal, typescript, elixir, reason, prolog, clojure, rust

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-08-27

---

## Kata Description


# Introduction and Warm-up (Highly recommended)



# [Playing With Lists/Arrays Series](https://www.codewars.com/collections/playing-with-lists-slash-arrays)

___



# Definition



An **_element is leader_** *if it is greater than The Sum all the elements to its right side*.

____



# Task



**_Given_** an *array/list [] of integers* , **_Find_** *all the **_LEADERS_** in the array*.

___



# Notes 



* **_Array/list_** size is *at least 3* .



* **_Array/list's numbers_**  Will be **_mixture of positives , negatives and  zeros_** 



* **_Repetition_** of numbers in *the array/list could occur*.



* **_Returned Array/list_** *should store the leading numbers **_in the same order_** in the original array/list* .

___



# Input >> Output Examples 





```

arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}

```



## **_Explanation_**: 



* `4`  *is greater than the sum all the elements to its right side*



* **_Note_** : **_The last element_** `0`  *is equal to right sum of its elements (abstract zero)*.

____



```

arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}

```



## **_Explanation_**: 



* `17`  *is greater than the sum all the elements to its right side*



* `5`  *is greater than the sum all the elements to its right side*



* **_Note_** : **_The last element_**  `2`  *is  greater than the sum of its right elements (abstract zero)*. 

___



```

arrayLeaders ({5, 2, -1}) ==> return {5, 2}

```



## **_Explanation_**: 



* `5`  *is greater than the sum all the elements to its right side*



* `2`  *is greater than the sum all the elements to its right side*



* **_Note_** : **_The last element_**  `-1`  *is less than the sum of its right elements (abstract zero)*.



___



```

arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}

```



## **_Explanation_**: 



* `0`  *is greater than the sum all the elements to its right side*



* `-1`  *is greater than the sum all the elements to its right side*



* `3`  *is greater than the sum all the elements to its right side*



* **_Note_** : **_The last element_**  `2`  *is  greater than the sum of its right elements (abstract zero)*. 

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


[View this Kata on Codewars.com](https://www.codewars.com/kata/5a651865fd56cb55760000e0)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
