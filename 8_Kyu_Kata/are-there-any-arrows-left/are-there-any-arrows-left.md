# 8 kyu - Are there any arrows left?

##### **ID**: [559f860f8c0d6c7784000119](https://www.codewars.com/kata/559f860f8c0d6c7784000119) | **Slug**: [are-there-any-arrows-left](https://www.codewars.com/kata/559f860f8c0d6c7784000119) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2015-07-10 ***by*** [acraileanu](https://www.codewars.com/users/acraileanu) | **Approved**: 2015-07-18 ***by*** [MMMAAANNN](https://www.codewars.com/users/MMMAAANNN)

##### **Languages Available**: javascript, python, ruby, elixir

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-09-14

---

## Kata Description


<h1>Check your arrows</h1>

You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.



You need to verify that you have some good ones left, in order to prepare for battle:

```javascript

anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])

```

```python

anyArrows([{'range': 5}, {'range': 10, 'damaged': True}, {'damaged': True}])

```

```ruby

anyArrows([{range=> 5}, {range=> 10, damaged=> true}, {damaged=> true}])

```

```elixir

any_arrows?([%{"range" => 5}, %{"range" => 10, "damaged" => true}, %{"damaged" => true}])

```



If an arrow in the quiver does not have a damaged status, it means it's new.



The expected result is a boolean, indicating whether you have any good arrows left.



Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/559f860f8c0d6c7784000119)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
