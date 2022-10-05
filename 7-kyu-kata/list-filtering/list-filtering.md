# 7 kyu - List Filtering

##### **ID**: [53dbd5315a3c69eed20002dd](https://www.codewars.com/kata/53dbd5315a3c69eed20002dd) | **Slug**: [list-filtering](https://www.codewars.com/kata/53dbd5315a3c69eed20002dd) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2014-08-01 ***by*** [cmgerber](https://www.codewars.com/users/cmgerber) | **Approved**: 2014-08-13 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: python, ruby, coffeescript, javascript, csharp, fsharp, java, factor

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2021-11-07

---

## Kata Description


In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.



### Example



```python

filter_list([1,2,'a','b']) == [1,2]

filter_list([1,'a','b',0,15]) == [1,0,15]

filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

```

```csharp

ListFilterer.GetIntegersFromList(new List<object>(){1, 2, "a", "b"}) => {1, 2}

ListFilterer.GetIntegersFromList(new List<object>(){1, 2, "a", "b", 0, 15}) => {1, 2, 0, 15}

ListFilterer.GetIntegersFromList(new List<object>(){1, 2, "a", "b", "aasf", "1", "123", 231}) => {1, 2, 231}

```

```factor

{ 1 2 "a" "b" } filter-seq ! { 1 2 }

{ 1 "a" "b" 0 15 } filter-seq ! { 1 0 15 }

{ 1 2 "aasf" "1" "123" 123 } filter-seq ! { 1 2 123 }

```

```java

Kata.filterList(List.of(1, 2, "a", "b")) => List.of(1,2)

Kata.filterList(List.of(1, 2, "a", "b", 0, 15)) => List.of(1,2,0,15)

Kata.filterList(List.of(1, 2, "a", "b", "aasf", "1", "123", 231)) => List.of(1, 2, 231)

```



---


🏷 `LISTS | FILTERING | DATA STRUCTURES | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/53dbd5315a3c69eed20002dd)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
