# 6 kyu - Autocomplete! Yay!

##### **ID**: [5389864ec72ce03383000484](https://www.codewars.com/kata/5389864ec72ce03383000484) | **Slug**: [autocomplete-yay](https://www.codewars.com/kata/5389864ec72ce03383000484) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2014-05-31 ***by*** [yaphi1](https://www.codewars.com/users/yaphi1) | **Approved**: 2014-08-18 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, python, ruby

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-09-14

---

## Kata Description


It's time to create an autocomplete function! Yay!



The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string.  If there are more than 5 matches, restrict your output to the first 5 results.  If there are no matches, return an empty array.



Example:



```javascript

autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']

```

```python

autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']

```





For this kata, the dictionary will always be a valid array of strings.

Please return all results in the order given in the dictionary, even if they're not always alphabetical.

The search should NOT be case sensitive, but the case of the word should be preserved when it's returned.



For example, "Apple" and "airport" would both return for an input of 'a'.  However, they should return as "Apple" and "airport" in their original cases.



<div style="background:#ffa; color:#000; padding:10px;">

<p>Important note:

<p>Any input that is NOT a letter should be treated as if it is not there.  For example, an input of "$%^" should be treated as "" and an input of "ab*&1cd" should be treated as "abcd".

<p>(Thanks to wthit56 for the suggestion!)

</div>



---


🏷 `STRINGS | REGULAR EXPRESSIONS | ARRAYS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5389864ec72ce03383000484)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
