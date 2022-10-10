# BETA - Tunnel Digging

##### **ID**: [626466bdd13ea6923d0663ea](https://www.codewars.com/kata/626466bdd13ea6923d0663ea) | **Slug**: [tunnel-digging](https://www.codewars.com/kata/626466bdd13ea6923d0663ea) | **Category**: `REFERENCE` | **Rank**: <span style="color:grey">*BETA*</span>

##### **First Published**: 2022-04-23 ***by*** [user3340470](https://www.codewars.com/users/user3340470) | **Approved**: *not available* ***by*** [*not available*](*https://www.codewars.com*)

##### **Languages Available**: python

##### **My Completed Languages**: python ***as at*** 2022-10-08 | **Originally completed**: 2022-05-03

---

## Kata Description


Given an list `r`, return how long it would take a tunnel boring machine to excavate a tunnel through `r`.



`r` is a list that contain the following values or different combinations of the following values:

- Very hard rock `[]`: takes 60 minutes to excavate

- Hard Rock `{}`: takes 50 minutes to excavate 

- Somewhat Hard Rock `()`: takes 40 minutes to excavate

- Somewhat Soft Rock `||`: takes 30 minutes to excavate

- Soft Rock `::`: takes 20 minutes to excavate



After every 3 sections it excavates, the machine needs to stop for 30 minutes so workers could remove the excavated rock. 



# Notes: 

- The returned time should be in minutes

- 'r' may contain values with only one half. Example: `[` should equal 30

- 'r' may also contain empty strings. Example: `"  "` should equal 0





# Examples

```python

tunnel_digging(['|)', '{ ', '{ ', '|]', '{ ', ' }']) # returns 240

tunnel_digging(['( ', '()', '(}', '[]', '{ ', '{ ']) # returns 275

tunnel_digging(['  ', '{ ', '[ ', '[)', '[}']) # returns 190

tunnel_digging(['{ ', ' }', '[}', ': ', '[ ', ':|']) # returns 230

```

---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/626466bdd13ea6923d0663ea)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
