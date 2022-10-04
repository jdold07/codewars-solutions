# 6 kyu - Format a string of names like 'Bart, Lisa & Maggie'.

##### **ID**: [53368a47e38700bd8300030d](https://www.codewars.com/kata/53368a47e38700bd8300030d) | **Slug**: [format-a-string-of-names-like-bart-lisa-and-maggie](https://www.codewars.com/kata/53368a47e38700bd8300030d) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2014-03-29 ***by*** [weavermedia](https://www.codewars.com/users/weavermedia) | **Approved**: 2015-02-06 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: ruby, javascript, python, elixir

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2021-11-20

---

## Kata Description


Given: an array containing hashes of names



Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.



Example:



``` ruby

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])

# returns 'Bart, Lisa & Maggie'



list([ {name: 'Bart'}, {name: 'Lisa'} ])

# returns 'Bart & Lisa'



list([ {name: 'Bart'} ])

# returns 'Bart'



list([])

# returns ''

```

``` elixir

list([ %{name: "Bart"}, %{name: "Lisa"}, %{name: "Maggie"} ])

# returns 'Bart, Lisa & Maggie'



list([ %{name: "Bart"}, %{name: "Lisa"} ])

# returns 'Bart & Lisa'



list([ %{name: "Bart"} ])

# returns 'Bart'



list([])

# returns ''

```

``` javascript

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])

// returns 'Bart, Lisa & Maggie'



list([ {name: 'Bart'}, {name: 'Lisa'} ])

// returns 'Bart & Lisa'



list([ {name: 'Bart'} ])

// returns 'Bart'



list([])

// returns ''

```

```python

namelist([ {'name': 'Bart'}, {'name': 'Lisa'}, {'name': 'Maggie'} ])

# returns 'Bart, Lisa & Maggie'



namelist([ {'name': 'Bart'}, {'name': 'Lisa'} ])

# returns 'Bart & Lisa'



namelist([ {'name': 'Bart'} ])

# returns 'Bart'



namelist([])

# returns ''

```



Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.



---


🏷 `FUNDAMENTALS | STRINGS | DATA TYPES | FORMATTING | ALGORITHMS | LOGIC`


[View this Kata on Codewars.com](https://www.codewars.com/kata/53368a47e38700bd8300030d)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
