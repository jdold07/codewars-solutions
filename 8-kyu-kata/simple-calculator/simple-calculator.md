# 8 kyu - simple calculator 

##### **ID**: [5810085c533d69f4980001cf](https://www.codewars.com/kata/5810085c533d69f4980001cf) | **Slug**: [simple-calculator](https://www.codewars.com/kata/5810085c533d69f4980001cf) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2016-11-08 ***by*** [sanae](https://www.codewars.com/users/sanae) | **Approved**: 2016-11-12 ***by*** [user8476848](https://www.codewars.com/users/user8476848)

##### **Languages Available**: javascript, php, csharp, python

##### **My Completed Languages**: python ***as at*** 2022-10-05 | **Originally completed**: 2022-04-26

---

## Kata Description


You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.



Your function will accept three arguments:<br>

The first and second argument should be numbers.<br>

The third argument should represent a sign indicating the operation to perform on these two numbers.

```if-not:csharp

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

```

```if:csharp

If the sign is not a valid sign, throw an ArgumentException.

```



# Example:



```javascript

calculator(1,2,"+"); //=> result will be 3

calculator(1,2,"&"); //=> result will be "unknown value"

calculator(1,"k","*"); //=> result will be "unknown value"

```

```php

calculator(1, 2, "+"); // 3

calculator(1, 2, "&"); // "unknown value"

calculator(1, "k", "*"); // "unknown value"

```

```csharp

Kata.Calculator(1, 2, '+') => 3

Kata.Calculator(1, 2, '$') // throws ArgumentException

```

```python

calculator(1, 2, '+') => 3

calculator(1, 2, '$') # result will be "unknown value"

```



Good luck!

---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5810085c533d69f4980001cf)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
