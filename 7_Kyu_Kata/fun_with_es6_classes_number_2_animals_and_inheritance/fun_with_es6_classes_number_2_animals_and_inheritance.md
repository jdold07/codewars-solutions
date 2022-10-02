# 7 kyu - Fun with ES6 Classes #2 - Animals and Inheritance

##### **ID**: [56f935002e6c0d55fa000d92](https://www.codewars.com/kata/56f935002e6c0d55fa000d92) | **Slug**: [fun-with-es6-classes-number-2-animals-and-inheritance](https://www.codewars.com/kata/56f935002e6c0d55fa000d92) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2016-03-28 ***by*** [donaldsebleung](https://www.codewars.com/users/donaldsebleung) | **Approved**: 2016-05-21 ***by*** [smile67](https://www.codewars.com/users/smile67)

##### **Languages Available**: javascript, csharp

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-09-17

---

## Kata Description


# Fun with ES6 Classes #2 - Animals and Inheritance



## Overview



Preloaded for you in this Kata is a ```class Animal```:



```javascript

class Animal {

  constructor(name, age, legs, species, status) {

    this.name = name;

    this.age = age;

    this.legs = legs;

    this.species = species;

    this.status = status;

  }

  introduce() {

    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;

  }

}

```

```csharp

public class Animal

{

  public int Age;

  public int Legs;

  public string Name;

  public string Species;

  public string Status;

  

  public Animal(string name, int age, int legs, string species, string status)

  {

    this.Name = name;

    this.Age = age;

    this.Legs = legs;

    this.Species = species;

    this.Status = status;

  }

  

  public virtual string Introduce()

  {

    return $"Hello, my name is {this.Name} and I am {this.Age} years old.";

  }

}

```



## Task



Define the following classes that inherit from ```Animal```.



### I. Shark



The constructor function for Shark should accept 3 arguments in total in the following order: `name, age, status`.  **All sharks should have a leg count of **`0`** (since they obviously do not have any legs) and should have a **`species`** of **`"shark"`**.**



### II. Cat



The constructor function for Cat should accept the same 3 arguments as with Shark: `name, age, status`.  Cats should always have a leg count of `4` and a species of `"cat"`.



Furthermore, the `introduce`/`Introduce` method for `Cat` should be identical to the original except there should be **exactly 2 spaces** and the words `"Meow meow!"` after the phrase.  For example:



```javascript

var example = new Cat("Example", 10, "Happy");

example.introduce() === "Hello, my name is Example and I am 10 years old.  Meow meow!"; // Notice the TWO spaces - very important

```

```csharp

Cat example = new Cat("Example", 10, "Happy);

example.Introduce() => "Hello, my name is Example and I am 10 years old.  Meow meow!"; // Notice the TWO spaces - very important

```



### III. Dog



The Dog constructor should accept 4 arguments in the specified order: `name, age, status, master`.  `master` is the name of the dog's master which will be a string.  Furthermore, dogs should have `4` legs and a species of `"dog"`.



Dogs have an identical `introduce`/`Introduce` method as any other animal, but they have their own method called `greetMaster`/`GreetMaster` which accepts no arguments and returns `"Hello (insert_master_name_here)"` (of course **not** the literal string but replace the `(insert_master_name_here)` with the name of the dog's master).

---


🏷 `FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING`


[View this Kata on Codewars.com](https://www.codewars.com/kata/56f935002e6c0d55fa000d92)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
