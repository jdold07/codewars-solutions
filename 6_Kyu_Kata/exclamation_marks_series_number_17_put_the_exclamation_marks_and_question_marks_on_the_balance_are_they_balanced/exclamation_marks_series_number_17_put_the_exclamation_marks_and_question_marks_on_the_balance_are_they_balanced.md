# 6 kyu - Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?

##### **ID**: [57fb44a12b53146fe1000136](https://www.codewars.com/kata/57fb44a12b53146fe1000136) | **Slug**: [exclamation-marks-series-number-17-put-the-exclamation-marks-and-question-marks-on-the-balance-are-they-balanced](https://www.codewars.com/kata/57fb44a12b53146fe1000136) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2016-10-10 ***by*** [myjinxin2015](https://www.codewars.com/users/myjinxin2015) | **Approved**: 2016-10-15 ***by*** [user8476848](https://www.codewars.com/users/user8476848)

##### **Languages Available**: javascript, php, python, haskell, ruby

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-09-10

---

## Kata Description


Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings `left` and `right` on the balance - are they balanced?

 

If the left side is more heavy, return `"Left"`; if the right side is more heavy, return `"Right"`; if they are balanced, return `"Balance"`.



## Examples



```python

"!!", "??"     -->  "Right"

"!??", "?!!"   -->  "Left"

"!?!!", "?!?"  -->  "Left"

"!!???!????", "??!!?!!!!!!!"  -->  "Balance"

```

```haskell

-- For Haskell use the Comparison type defined in Preloaded code

-- data Comparison = Left | Right | Balance deriving (Show, Eq, Enum, Bounded)



balance :: String -> String -> Comparison



balance "!!" "??" == Right

balance "!??" "?!!" == Left

balance "!?!!" "?!?" == Left

balance "!!???!????" "??!!?!!!!!!!" == Balance

```

---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/57fb44a12b53146fe1000136)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
