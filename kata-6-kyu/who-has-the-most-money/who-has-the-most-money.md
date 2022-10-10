# 6 kyu - Who has the most money?

##### **ID**: [528d36d7cc451cd7e4000339](https://www.codewars.com/kata/528d36d7cc451cd7e4000339) | **Slug**: [who-has-the-most-money](https://www.codewars.com/kata/528d36d7cc451cd7e4000339) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2013-11-21 ***by*** [MrAppa](https://www.codewars.com/users/MrAppa) | **Approved**: 2014-03-05 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: ruby, c, python, javascript, scala, nasm

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-09-16

---

## Kata Description


You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:



```ruby

class Student

  attr_reader :name

  attr_reader :fives

  attr_reader :tens

  attr_reader :twenties

  

  def initialize(name, fives, tens, twenties)

    @name = name

    @fives = fives

    @tens = tens

    @twenties = twenties

  end

end

```

```python

class Student:

    def __init__(self, name, fives, tens, twenties):

        self.name = name

        self.fives = fives

        self.tens = tens

        self.twenties = twenties

```

```c

#define NAMELIM     0x8



struct student {

    char name[NAMELIM + 1];

    unsigned fives;

    unsigned tens;

    unsigned twenties;

};

```

```nasm

struc student

    .name:      resb 9

                alignb 4

    .fives:     resd 1

    .tens:      resd 1

    .twenties:  resd 1

endstruc



student_sz      equ 0h18

```

```javascript

class Student {

  constructor(name, fives, tens, twenties) {

    this.name = name;

    this.fives = fives;

    this.tens = tens;

    this.twenties = twenties;

  }

}

```

```scala

case class Student(name: String, fives: Int, tens: Int, twenties: Int)

```



As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return `"all"`.



Notes:

* Each student will have a unique name

* There will always be a clear winner: either one person has the most, or everyone has the same amount

* If there is only one student, then that student has the most money

---


🏷 `OBJECT-ORIENTED PROGRAMMING | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/528d36d7cc451cd7e4000339)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
