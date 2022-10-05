# 7 kyu - Split The Bill

##### **ID**: [5641275f07335295f10000d0](https://www.codewars.com/kata/5641275f07335295f10000d0) | **Slug**: [split-the-bill](https://www.codewars.com/kata/5641275f07335295f10000d0) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2015-11-10 ***by*** [otajor](https://www.codewars.com/users/otajor) | **Approved**: 2015-11-27 ***by*** [GiacomoSorbi](https://www.codewars.com/users/GiacomoSorbi)

##### **Languages Available**: javascript, python, ruby, elixir, typescript

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-09-01

---

## Kata Description


It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.



* The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each.

* The function should return an object/dict with the same names, showing how much money the members should pay or receive.



**Further points:**



* The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.

* If value is a decimal, round to two decimal places.

 

Translations and comments (and upvotes!) welcome.



### Example



3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.



```javascript

var group = {

    A: 20, 

    B: 15, 

    C: 10

}



splitTheBill(group) // returns {A: 5, B: 0, C: -5}

```    

```python

group = {

    'A': 20, 

    'B': 15, 

    'C': 10

}



split_the_bill(group) # returns {'A': 5, 'B': 0, 'C': -5}

```        

```ruby

group = {

    'A'=>20, 

    'B'=>15, 

    'C'=>10

}



split_the_bill(group) # returns {'A'=>5, 'B'=>0, 'C'=>-5}

```    

```elixir

group = %{

  :A => 20,

  :B => 15,

  :C => 10

}



split_the_bill(group) # returns %{:A => 5, :B => 0, :C => -5}

```

---


🏷 `FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING | DATA STRUCTURES`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5641275f07335295f10000d0)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
