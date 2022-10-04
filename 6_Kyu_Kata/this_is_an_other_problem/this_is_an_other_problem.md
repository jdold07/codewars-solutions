# 6 kyu - "this" is an other problem

##### **ID**: [547f1a8d4a437abdf800055c](https://www.codewars.com/kata/547f1a8d4a437abdf800055c) | **Slug**: [this-is-an-other-problem](https://www.codewars.com/kata/547f1a8d4a437abdf800055c) | **Category**: `BUG_FIXES` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2014-12-03 ***by*** [ZozoFouchtra](https://www.codewars.com/users/ZozoFouchtra) | **Approved**: 2015-01-04 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, coffeescript, lua

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-09-14

---

## Kata Description


After you've solved @**priyankaherur**'s problem ( http://www.codewars.com/kata/this-is-a-problem/javascript ) you may try to solve this other one.



## The problem:



Having created a function `NamedOne` which takes `first` & `last` names as parameters and returns an object with `firstName`, `lastName` and `fullName` ( = `firstName` + a space + `lastName` ) properties which should be all **accessibles**, we discovered that "accessible" also means "mutable".



If, for example, we've got a "NamedOne" like this :

```javascript

var namedOne = new NamedOne("Naomi","Wang")

namedOne.firstName // -> "Naomi"

namedOne.lastName  // -> "Wang"

namedOne.fullName  // -> "Naomi Wang"

```

```coffeescript

namedOne = new NamedOne("Naomi","Wang")

namedOne.firstName # -> "Naomi"

namedOne.lastName  # -> "Wang"

namedOne.fullName  # -> "Naomi Wang"

```

...properties may be **changed** :

```javascript

namedOne.firstName = "John"

namedOne.firstName // -> "John"

namedOne.lastName = "Doe"

namedOne.lastName  // -> "Doe"

```

```coffeescript

namedOne.firstName = "John"

namedOne.firstName # -> "John"

namedOne.lastName = "Doe"

namedOne.lastName  # -> "Doe"

```

...but **all** properties are not **updated** !



```javascript

namedOne.fullName  // -> "Naomi Wang" 

//-- Oh no ! we want fullName == "John Doe" now !

```

```coffeescript

namedOne.fullName  # -> "Naomi Wang" 

#-- Oh no ! we want fullName == "John Doe" now !

```



## Your mission: 



So the purpose of this kata is to create an object with accessible **and** "_updatable_" (can i say that?) properties.



* If `.firstName` or `.lastName` are changed, then `.fullName` should also be changed

* If `.fullName` is changed, then `.firstName` and `.lastName` should also be changed.



**Note** : "input format" to `.fullName` will be `firstName + space+ lastName`. If given fullName isn't valid then no property is changed.



## Examples:

```javascript

var namedOne = new NamedOne("Naomi","Wang")



namedOne.firstName = "John"

namedOne.lastName = "Doe"

// ...then...

namedOne.fullName // -> "John Doe"



// -- And :

namedOne.fullName = "Bill Smith"

// ...then...

namedOne.firstName // -> "Bill"

namedOne.lastName  // -> "Smith"



// -- But :

namedOne.fullName = "Tom" // -> no : lastName missing

namedOne.fullName = "TomDonnovan" // -> no : no space between first & last names

namedOne.fullName // -> "Bill Smith" (unchanged)

```

```coffeescript

namedOne = new NamedOne("Naomi","Wang")



namedOne.firstName = "John"

namedOne.lastName = "Doe"

# ...then...

namedOne.fullName # -> "John Doe"



# -- And :

namedOne.fullName = "Bill Smith"

# ...then...

namedOne.firstName # -> "Bill"

namedOne.lastName  # -> "Smith"



# -- But :

namedOne.fullName = "Tom" # -> no : lastName missing

namedOne.fullName = "TomDonnovan" # -> no : no space between first & last names

namedOne.fullName # -> "Bill Smith" (unchanged)

```



Can you change our function to create such a `NamedOne` object ?



(<small> **Hint**: in this kata you'll try to **define properties** of an **object**</small> )



---


🏷 `OBJECT-ORIENTED PROGRAMMING | DEBUGGING | LANGUAGE FEATURES`


[View this Kata on Codewars.com](https://www.codewars.com/kata/547f1a8d4a437abdf800055c)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
