# 6 kyu - Prefill an Array

##### **ID**: [54129112fb7c188740000162](https://www.codewars.com/kata/54129112fb7c188740000162) | **Slug**: [prefill-an-array](https://www.codewars.com/kata/54129112fb7c188740000162) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2014-09-12 ***by*** [user5854572](https://www.codewars.com/users/user5854572) | **Approved**: 2014-10-07 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, coffeescript, ruby, python

##### **My Completed Languages**: python ***as at*** 2022-10-05 | **Originally completed**: 2022-04-30

---

## Kata Description


Create the function `prefill` that returns an array of `n` elements that all have the same value `v`.  See if you can do this *without* using a loop.



You have to validate input:



 * `v` can be *anything* (primitive or otherwise)

 * if `v` is ommited, fill the array with `undefined`

 * if `n` is 0, return an empty array

 * if `n` is anything other than an **integer** or **integer-formatted** string (e.g. `'123'`) that is `>=0`, throw a `TypeError`

 

When throwing a `TypeError`, the message should be `n is invalid`, where you replace `n` for the actual value passed to the function.



Code Examples



```javascript

    prefill(3,1) --> [1,1,1]

    

    prefill(2,"abc") --> ['abc','abc']

    

    prefill("1", 1) --> [1]

    

    prefill(3, prefill(2,'2d'))

      --> [['2d','2d'],['2d','2d'],['2d','2d']]

      

    prefill("xyz", 1)

      --> throws TypeError with message "xyz is invalid"

```

```ruby

    prefill(3,1) --> [1,1,1]

    

    prefill(2,"abc") --> ['abc','abc']

    

    prefill("1", 1) --> [1]

    

    prefill(3, prefill(2,'2d'))

      --> [['2d','2d'],['2d','2d'],['2d','2d']]

      

    prefill("xyz", 1)

      --> throws TypeError with message "xyz is invalid"

```

```python

    prefill(3,1) --> [1,1,1]

    

    prefill(2,"abc") --> ['abc','abc']

    

    prefill("1", 1) --> [1]

    

    prefill(3, prefill(2,'2d'))

      --> [['2d','2d'],['2d','2d'],['2d','2d']]

      

    prefill("xyz", 1)

      --> throws TypeError with message "xyz is invalid"

```

```coffeescript

    prefill 3, 1 #returns [1, 1, 1]

    

    prefill 2, "abc" #returns ["abc","abc"]

    

    prefill "1", 1 #returns [1]

    

    prefill 3, prefill(2, "2d")

      #returns [['2d','2d'],['2d','2d'],['2d','2d']]

      

    prefill "xyz", 1

      #throws TypeError with message "xyz is invalid"

```



---


🏷 `ARRAYS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/54129112fb7c188740000162)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
