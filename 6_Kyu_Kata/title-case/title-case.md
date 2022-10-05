# 6 kyu - Title Case

##### **ID**: [5202ef17a402dd033c000009](https://www.codewars.com/kata/5202ef17a402dd033c000009) | **Slug**: [title-case](https://www.codewars.com/kata/5202ef17a402dd033c000009) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2013-08-08 ***by*** [user527539](https://www.codewars.com/users/user527539) | **Approved**: *not available* ***by*** [*not available*](*https://www.codewars.com*)

##### **Languages Available**: javascript, coffeescript, ruby, python, haskell, csharp

##### **My Completed Languages**: python ***as at*** 2022-10-05 | **Originally completed**: 2022-04-27

---

## Kata Description


A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.



Write a function that will convert a string into title case, given an optional list of exceptions (minor words).  The list of minor words will be given as a string with each word separated by a space.  Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.



###Arguments (Haskell)



* **First argument**: space-delimited list of minor words that must always be lowercase except for the first word in the string.

* **Second argument**: the original string to be converted.



###Arguments (Other languages)



* **First argument (required)**: the original string to be converted.

* **Second argument (optional)**: space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass `undefined` when this argument is unused.



###Example



```javascript

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'

titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'

titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

```

```coffeescript

titleCase('a clash of KINGS', 'a an the of') # should return: 'A Clash of Kings'

titleCase('THE WIND IN THE WILLOWS', 'The In') # should return: 'The Wind in the Willows'

titleCase('the quick brown fox') # should return: 'The Quick Brown Fox'

```

```c

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'

titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'

titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

```

```ruby

title_case('a clash of KINGS', 'a an the of') # should return: 'A Clash of Kings'

title_case('THE WIND IN THE WILLOWS', 'The In') # should return: 'The Wind in the Willows'

title_case('the quick brown fox') # should return: 'The Quick Brown Fox'

```

```python

title_case('a clash of KINGS', 'a an the of') # should return: 'A Clash of Kings'

title_case('THE WIND IN THE WILLOWS', 'The In') # should return: 'The Wind in the Willows'

title_case('the quick brown fox') # should return: 'The Quick Brown Fox'

```

```haskell

titleCase "a an the of" "a clash of KINGS" -- should return: "A Clash of Kings"

titleCase "The In" "THE WIND IN THE WILLOWS" -- should return: "The Wind in the Willows"

titleCase "" "the quick brown fox" -- should return: "The Quick Brown Fox"

```

```csharp

Kata.TitleCase("a clash of KINGS", "a an the of")   => "A Clash of Kings"

Kata.TitleCase("THE WIND IN THE WILLOWS", "The In") => "The Wind in the Willows"

Kata.TitleCase("the quick brown fox")               => "The Quick Brown Fox"

```

---


🏷 `STRINGS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5202ef17a402dd033c000009)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
