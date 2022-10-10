# 7 kyu - Make Class

##### **ID**: [5d774cfde98179002a7cb3c8](https://www.codewars.com/kata/5d774cfde98179002a7cb3c8) | **Slug**: [make-class](https://www.codewars.com/kata/5d774cfde98179002a7cb3c8) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2019-09-10 ***by*** [Jomopipi](https://www.codewars.com/users/Jomopipi) | **Approved**: 2019-09-10 ***by*** [JohanWiltink](https://www.codewars.com/users/JohanWiltink)

##### **Languages Available**: javascript, coffeescript, python

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-09-16

---

## Kata Description


I don't like writing classes like this:



```javascript

function Animal(name,species,age,health,weight,color) {

  this.name = name;

  this.species = species;

  this.age = age;

  this.health = health;

  this.weight = weight;

  this.color = color;

}

```

```coffeescript

Animal = (@name, @species, @age, @health, @weight, @color) ->

```

```python

class Animal:

    def __init__(self, name, species, age, health, weight, color):

        self.name = name

        self.species = species

        self.age = age

        self.health = health

        self.weight = weight

        self.color = color

```



Give me the power to create a similar class like this:

```javascript

const Animal = makeClass("name","species","age","health","weight","color") 

```

```coffeescript

Animal = makeClass "name", "species", "age", "health", "weight", "color"

```

```python

Animal = make_class("name", "species", "age", "health", "weight", "color")

```

---


🏷 `OBJECT-ORIENTED PROGRAMMING | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5d774cfde98179002a7cb3c8)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
