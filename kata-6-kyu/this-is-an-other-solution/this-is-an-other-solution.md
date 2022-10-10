# 6 kyu - "this" is an other solution

##### **ID**: [54834b3559e638b39d0009a2](https://www.codewars.com/kata/54834b3559e638b39d0009a2) | **Slug**: [this-is-an-other-solution](https://www.codewars.com/kata/54834b3559e638b39d0009a2) | **Category**: `BUG_FIXES` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2014-12-06 **_by_** [ZozoFouchtra](https://www.codewars.com/users/ZozoFouchtra) | **Approved**: 2015-01-04 **_by_** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript

##### **My Completed Languages**: javascript **_as at_** 2022-10-08 | **Originally completed**: 2022-09-15

---

## Kata Description

In a previous kata ( http://www.codewars.com/kata/547f1a8d4a437abdf800055c ) we try to create an object with **mutable** properties.

The function `NamedOne` taken `first` & `last` names as parameters, returned an object with `firstName`, `lastName` and `fullName` ( = `firstName` + a space + `lastName` ) properties. These properties were **mutable**.

For example, with a "NamedOne" like this :

```javascript
let namedOne = new NamedOne("Naomi", "Wang")

namedOne.fullName // -> "Naomi Wang"
```

...we were able to **change** its properties:

```javascript
namedOne.firstName = "John"

namedOne.lastName = "Doe"

namedOne.fullName // -> "John Doe"

//..or..

namedOne.fullName = "Bill Smith"

namedOne.firstName // -> "Bill"

namedOne.lastName // -> "Smith"
```

##Your mission

**On the contrary**, the purpose of this kata is to create an `OnceNamedOne` object with **immutable** properties.

That means `.firstName`, `.lastName` and `.fullName` are defined into the Constructor and can't be no more changed.

The properties are still **readable** using the dot or bracket notation but there're **not writable**.

##Examples:

```javascript
let onceNamed = new OnceNamedOne("Naomi", "Wang")

// ...then...

onceNamed.firstName // -> "Naomi"

onceNamed.lastName // -> "Wang"

onceNamed.fullName // -> "Naomi Wang"

// ...if you try : ...

onceNamed.firstName = "Bill"

// ...or...

onceNamed["lastName"] = "Smith"

// ...then...

onceNamed["firstName"] // -> "Naomi"

onceNamed["lastName"] // -> "Wang"

onceNamed["fullName"] // -> "Naomi Wang"

// ..but you can still create other instances..

let otherOne = new OnceNamedOne("Don", "Jones")

otherOne.fullName // -> "Don Jones"
```

Can you change our function to create such a `OnceNamedOne` object ?

(<small> **Hint**: in this kata you'll try to **define properties** of an **object**</small> )

---

🏷 `OBJECT-ORIENTED PROGRAMMING | DEBUGGING | LANGUAGE FEATURES`

[View this Kata on Codewars.com](https://www.codewars.com/kata/54834b3559e638b39d0009a2)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### _This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API. The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file. Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution. My solutions are not always commented as the solutions are rarely submitted with comments._
