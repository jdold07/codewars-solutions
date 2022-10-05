# 7 kyu - The Coupon Code

##### **ID**: [539de388a540db7fec000642](https://www.codewars.com/kata/539de388a540db7fec000642) | **Slug**: [the-coupon-code](https://www.codewars.com/kata/539de388a540db7fec000642) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2014-06-15 ***by*** [yaphi1](https://www.codewars.com/users/yaphi1) | **Approved**: 2014-07-08 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, csharp, typescript, python

##### **My Completed Languages**: python ***as at*** 2022-10-05 | **Originally completed**: 2022-04-24

---

## Kata Description


# Story



Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.



# Task



Your mission:  

Write a function called `checkCoupon` which verifies that a coupon code is valid and not expired.



A coupon is no more valid on the day **AFTER** the expiration date.  All dates will be passed as strings in this format: `"MONTH DATE, YEAR"`.



## Examples:



```javascript

checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true

checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

```

```typescript

checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true

checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

```

```csharp

CheckCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ==  true

CheckCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ==  false

```

```python

checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  == True

checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  == False

```

---


🏷 `DATE TIME | STRINGS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/539de388a540db7fec000642)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
