# 7 kyu - Palindrome chain length

##### **ID**: [525f039017c7cd0e1a000a26](https://www.codewars.com/kata/525f039017c7cd0e1a000a26) | **Slug**: [palindrome-chain-length](https://www.codewars.com/kata/525f039017c7cd0e1a000a26) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2013-10-16 ***by*** [mirelon](https://www.codewars.com/users/mirelon) | **Approved**: 2013-11-19 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: ruby, javascript, coffeescript, python, haskell, csharp, java, pascal

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-08-29

---

## Kata Description


Number is a palindrome if it is equal to the number with digits in reversed order.

For example, `5`, `44`, `171`, `4884` are palindromes, and `43`, `194`, `4773` are not.



Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.



If the input number is already a palindrome, the number of steps is `0`.



~~~if:java

All inputs are guaranteed to have a final palindrome which does not overflow `long`.

~~~

~~~if:javascript

All inputs are guaranteed to have a final palindrome which does not overflow `MAX_SAFE_INTEGER`.

~~~

~~~if:python

All inputs are guaranteed to have a final palindrome smaller than `$ 2^63 $`.

~~~

~~~if:pascal

All inputs are guaranteed to have a final palindrome which does not overflow `integer`.

~~~





### Example



For example, start with `87`:



```

  87 +   78 =  165     - step 1, not a palindrome

 165 +  561 =  726     - step 2, not a palindrome

 726 +  627 = 1353     - step 3, not a palindrome

1353 + 3531 = 4884     - step 4, palindrome!

```



`4884` is a palindrome and we needed `4` steps to obtain it, so answer for `87` is `4`.



### Additional info



Some interesting information on the problem can be found in this Wikipedia article on [Lychrel numbers](https://en.wikipedia.org/wiki/Lychrel_number).

---


🏷 `ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/525f039017c7cd0e1a000a26)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
