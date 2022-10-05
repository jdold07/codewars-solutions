# 7 kyu - Refactored Greeting

##### **ID**: [5121303128ef4b495f000001](https://www.codewars.com/kata/5121303128ef4b495f000001) | **Slug**: [refactored-greeting](https://www.codewars.com/kata/5121303128ef4b495f000001) | **Category**: `REFACTORING` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2013-04-13 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner) | **Approved**: *not available* ***by*** [*not available*](*https://www.codewars.com*)

##### **Languages Available**: javascript, coffeescript, ruby, python, rust

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-09-16

---

## Kata Description


The following code could use a bit of object-oriented artistry. While it's a simple method and works just fine as it is, in a larger system it's best to organize methods into classes/objects. (Or, at least, something similar depending on your language)



Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call. 



Here is how the final refactored code would be used:



```javascript

var joe = new Person('Joe');

joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'

joe.name           // should == 'Joe'

```

```coffeescript

joe = new Person('Joe')

joe.greet('Kate') # should return 'Hello Kate, my name is Joe'

joe.name          # should == 'Joe'

```

```ruby

joe = Person.new('Joe')

joe.greet('Kate') # should return 'Hello Kate, my name is Joe'

joe.name          # should == 'Joe'

```

```rust

let joe = Person::new("Joe");

joe.greet("Kate"); // should return "Hello Kate, my name is Joe"

joe.name;          // should == "Joe"

```

```python

joe = Person('Joe')

joe.greet('Kate') # should return 'Hello Kate, my name is Joe'

joe.name          # should == 'Joe'

```

---


🏷 `OBJECT-ORIENTED PROGRAMMING | REFACTORING`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5121303128ef4b495f000001)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
