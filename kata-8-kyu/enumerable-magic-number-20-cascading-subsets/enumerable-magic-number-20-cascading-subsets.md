# 8 kyu - Enumerable Magic #20 - Cascading Subsets

##### **ID**: [545af3d185166a3dec001190](https://www.codewars.com/kata/545af3d185166a3dec001190) | **Slug**: [enumerable-magic-number-20-cascading-subsets](https://www.codewars.com/kata/545af3d185166a3dec001190) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2014-11-06 ***by*** [bellmyer](https://www.codewars.com/users/bellmyer) | **Approved**: 2017-09-22 ***by*** [Voile](https://www.codewars.com/users/Voile)

##### **Languages Available**: ruby, python, javascript, cobol, csharp, rust, go, scala, coffeescript

##### **My Completed Languages**: csharp ***as at*** 2024-05-28 | **Originally completed**: 2024-03-10

---

## Kata Description


Create a method **each_cons** that accepts a list and a number **n**, and returns cascading subsets of the list of size **n**, like so:



    each_cons([1,2,3,4], 2)

      #=> [[1,2], [2,3], [3,4]]

    

    each_cons([1,2,3,4], 3)

      #=> [[1,2,3],[2,3,4]]

      

As you can see, the lists are cascading; ie, they overlap, but never out of order.

---


🏷 `FUNDAMENTALS | LISTS | DATA STRUCTURES | ARRAYS | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/545af3d185166a3dec001190)

![](https://www.codewars.com/users/jdold07/badges/large "tsdevau Codewars Badge")

---

###### *This Kata description was compiled by [**tsdevau**](https://tsdev.au) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
