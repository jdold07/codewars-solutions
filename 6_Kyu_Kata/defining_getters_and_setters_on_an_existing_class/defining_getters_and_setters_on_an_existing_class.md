# 6 kyu - Defining getters and setters on an existing class

##### **ID**: [55bcf04de45497c54a0000d0](https://www.codewars.com/kata/55bcf04de45497c54a0000d0) | **Slug**: [defining-getters-and-setters-on-an-existing-class](https://www.codewars.com/kata/55bcf04de45497c54a0000d0) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-08-01 ***by*** [andrewferk](https://www.codewars.com/users/andrewferk) | **Approved**: 2022-02-11 ***by*** [JohanWiltink](https://www.codewars.com/users/JohanWiltink)

##### **Languages Available**: javascript

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-09-16

---

## Kata Description


## Introduction to getter and setter



Javascript classes can declare getter and setters using the following format:



```javascript

class Engine {

  constructor(watts) {

    this.watts = watts;

  }

  get horsepower() {

    return this.watts / 745.7;

  }

  set horsepower(hp) {

    this.watts = 745.7 * hp;

  }

}

```



and be used as so:



```javascript

let bossV8 = new Engine(279637.5);

console.log(bossV8.horsepower); // => 375

bossV8.horsepower = 385;

console.log(bossV8.watts); // => 287094.5

```



## The problem



There is a preloaded class of `Person` and it needs a new getter and setter. `Person` is defined with a constructor that takes a first name and a last name, and provides a mean to get the first name, last name, and full name. Bellow is the preloaded class:



```javascript

class Person {

  constructor(firstName, lastName) {

    this.firstName = firstName;

    this.lastName = lastName;

  }

  

  getName() {

    return this.firstName + ' ' + this.lastName;

  }

}

```



and can be used as so:



```javascript

let marcusFenix = new Person('Marcus', 'Fenix');

console.log(marcusFenix.firstName); // => 'Marcus'

console.log(marcusFenix.lastName); // => 'Fenix'

console.log(marcusFenix.getName()); // => 'Marcus Fenix'

```



* Add a getter of `name` that returns the full name

* Add a setter of `name` that modifies first name and last name



After adding the new getter and setter, a Person can be used as so:



```javascript

let augustusCole = new Person('Augustus', 'Cole');

augustusCole.name = 'Cole Train';

console.log(augustusCole.firstName); // => 'Cole'

console.log(augustusCole.lastName); // => 'Train'

console.log(augustusCole.getName()); // => 'Cole Train'

console.log(augustusCole.name); // => 'Cole Train'

```

---


🏷 `OBJECT-ORIENTED PROGRAMMING | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/55bcf04de45497c54a0000d0)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
