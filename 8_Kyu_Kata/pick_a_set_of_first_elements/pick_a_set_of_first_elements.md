# 8 kyu - pick a set of first elements

##### **ID**: [572b77262bedd351e9000076](https://www.codewars.com/kata/572b77262bedd351e9000076) | **Slug**: [pick-a-set-of-first-elements](https://www.codewars.com/kata/572b77262bedd351e9000076) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2016-05-05 ***by*** [darlanmendonca](https://www.codewars.com/users/darlanmendonca) | **Approved**: 2017-08-01 ***by*** [ZozoFouchtra](https://www.codewars.com/users/ZozoFouchtra)

##### **Languages Available**: javascript, csharp, python

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-08-27

---

## Kata Description


Write a function to get the first element(s) of a sequence. Passing a parameter `n` (default=`1`) will return the first `n` element(s) of the sequence. 



If `n` == `0` return an empty sequence `[]`



### Examples



```javascript

var arr = ['a', 'b', 'c', 'd', 'e'];

first(arr) //=> ['a'];

first(arr, 2) //=> ['a', 'b']

first(arr, 3) //=> ['a', 'b', 'c'];

first(arr, 0) //=> [];

```



```csharp

var arr = new object[] { 'a', 'b', 'c', 'd', 'e' };

Kata.TakeFirstElements(arr); //=> new object[] { 'a' }

Kata.TakeFirstElements(arr, 2);// => new object[] { 'a', 'b' }

Kata.TakeFirstElements(arr, 3); //=> new object[] { 'a', 'b', 'c' }

Kata.TakeFirstElements(arr, 0); //=> new object[] { }

```



```python

arr = ['a', 'b', 'c', 'd', 'e']

first(arr)    # --> ['a']

first(arr, 2) # --> ['a', 'b']

first(arr, 3) # --> ['a', 'b', 'c']

first(arr, 0) # --> []

```



---


🏷 `ARRAYS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/572b77262bedd351e9000076)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
