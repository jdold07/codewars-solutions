# 6 kyu - Equal Sides Of An Array

##### **ID**: [5679aa472b8f57fb8c000047](https://www.codewars.com/kata/5679aa472b8f57fb8c000047) | **Slug**: [equal-sides-of-an-array](https://www.codewars.com/kata/5679aa472b8f57fb8c000047) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-12-22 ***by*** [Shivo](https://www.codewars.com/users/Shivo) | **Approved**: 2016-01-03 ***by*** [g964](https://www.codewars.com/users/g964)

##### **Languages Available**: csharp, javascript, python, coffeescript, ruby, java, haskell, clojure, c, cpp, php, fsharp, crystal, kotlin, nasm, julia, typescript

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2021-11-14

---

## Kata Description


You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return `-1`.



__For example:__



Let's say you are given the array `{1,2,3,4,3,2,1}`:  

Your function will return the index `3`, because at the 3rd position of the array, the sum of left side of the index (`{1,2,3}`) and the sum of the right side of the index (`{3,2,1}`) both equal `6`.





Let's look at another one.  

You are given the array `{1,100,50,-51,1,1}`:  

Your function will return the index `1`, because at the 1st position of the array, the sum of left side of the index (`{1}`) and the sum of the right side of the index (`{50,-51,1,1}`) both equal `1`.



Last one:  

You are given the array `{20,10,-80,10,10,15,35}`  

At index 0 the left side is `{}`  

The right side is `{10,-80,10,10,15,35}`  

They both are equal to `0` when added. (Empty arrays are equal to 0 in this problem)  

Index 0 is the place where the left side and right side are equal.  



Note: Please remember that in most programming/scripting languages the index of an array starts at 0.



__Input:__  

An integer array of length `0 < arr < 1000`. The numbers in the array can be any integer positive or negative.



__Output:__  

The lowest index `N` where the side to the left of `N` is equal to the side to the right of `N`. If you do not find an index that fits these rules, then you will return `-1`.



__Note:__  

If you are given an array with multiple answers, return the lowest correct index.  



---


🏷 `ALGORITHMS | ARRAYS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5679aa472b8f57fb8c000047)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
