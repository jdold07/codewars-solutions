# 7 kyu - The highest profit wins!

##### **ID**: [559590633066759614000063](https://www.codewars.com/kata/559590633066759614000063) | **Slug**: [the-highest-profit-wins](https://www.codewars.com/kata/559590633066759614000063) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2015-07-02 ***by*** [bkaes](https://www.codewars.com/users/bkaes) | **Approved**: 2015-07-03 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, haskell, python, ruby, coffeescript, java, csharp, c, rust, lambdacalc, go

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2021-11-22

---

## Kata Description


### Story



Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.



### Task



Write a function that returns both the minimum and maximum number of the given list/array. 



### Examples (Input --> Output)



```

[1,2,3,4,5] --> [1,5]

[2334454,5] --> [5,2334454]

[1]         --> [1,1]

```



### Remarks



All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for `null`, `undefined` or similar.



~~~if:lambdacalc

### Encodings



purity: `LetRec`  

numEncoding: `BinaryScott`  

export constructors `nil, cons` for your `List` encoding  

export deconstructors `fst, snd` for your `Pair` encoding  

~~~

---


🏷 `LISTS | ARRAYS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/559590633066759614000063)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
