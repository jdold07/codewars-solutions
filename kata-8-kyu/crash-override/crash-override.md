# 8 kyu - Crash Override

##### **ID**: [578c1e2edaa01a9a02000b7f](https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f) | **Slug**: [crash-override](https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2016-07-18 **_by_** [Peter Rhodes](https://www.codewars.com/users/Peter%20Rhodes) | **Approved**: 2016-07-20 **_by_** [aryan-firouzian](https://www.codewars.com/users/aryan-firouzian)

##### **Languages Available**: javascript, python, ruby, csharp

##### **My Completed Languages**: javascript **_as at_** 2022-10-08 | **Originally completed**: 2022-09-03

---

## Kata Description

<img src="https://media.giphy.com/media/13AN8X7jBIm15m/giphy.gif" style="width:463px;height:200px;">

Every budding hacker needs an alias! `The Phantom Phreak`, `Acid Burn`, `Zero Cool` and `Crash Override` are some notable examples from the film `Hackers`.

Your task is to create a function that, given a proper first and last name, will return the correct alias.

#### Notes:

- Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.

- If the first character of either of the names given to the function is not a letter from `A - Z`, you should return `"Your name must start with a letter from A - Z."`

- Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

---

## Examples

```javascript

let firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}

let surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}



aliasGen('Larry', 'Brentwood') === 'Logic Bomb'

aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'

```

```python

FIRST_NAME = {'A': 'Alpha', 'B': 'Beta', 'C': 'Cache', ...}

SURNAME = {'A': 'Analogue', 'B': 'Bomb', 'C': 'Catalyst' ...}



alias_gen('Larry', 'Brentwood') == 'Logic Bomb'

alias_gen('123abc', 'Petrovic') == 'Your name must start with a letter from A - Z.'

```

```ruby

FIRST_NAME = {'A': 'Alpha', 'B': 'Beta', 'C': 'Cache', ...}

SURNAME = {'A': 'Analogue', 'B': 'Bomb', 'C': 'Catalyst' ...}



alias_gen('Larry', 'Brentwood') == 'Logic Bomb'

alias_gen('123abc', 'Petrovic') == 'Your name must start with a letter from A - Z.'

```

```csharp

FirstName = {{"A", "Alpha"}, {"B", "Beta"}, {"C", "Cache"}, ...}

Surname = {{"A", "Analogue"}, {"B", "Bomb"}, {"C", "Catalyst"} ...}



// These dictionaries are defined on other partial Kata class



AliasGen('Larry', 'Brentwood') == 'Logic Bomb'

AliasGen('123abc', 'Petrovic') == 'Your name must start with a letter from A - Z.'

```

Happy hacking!

---

🏷 `STRINGS | FUNDAMENTALS`

[View this Kata on Codewars.com](https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### _This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API. The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file. Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution. My solutions are not always commented as the solutions are rarely submitted with comments._
