# 8 kyu - "this" is a problem 

##### **ID**: [547c71fdc5b2b38db1000098](https://www.codewars.com/kata/547c71fdc5b2b38db1000098) | **Slug**: [this-is-a-problem](https://www.codewars.com/kata/547c71fdc5b2b38db1000098) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2014-12-01 ***by*** [priyankaherur](https://www.codewars.com/users/priyankaherur) | **Approved**: 2014-12-27 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, java, coffeescript

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-09-17

---

## Kata Description


We want to create a constructor function 'NameMe', which takes first name and last name as parameters. The function combines the first and last names and saves the value in "name" property.



We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible. All the properties should be accessible. Can you find what's wrong with it?

A test fixture is also available

```javascript

function NameMe(first, last) {

    this.firstName = first;

    this.lastName = last;

    return {name: this.firstName + ' ' + this.lastName};

}



var n = new NameMe('John', 'Doe');

n.firstName //Expected: John

n.lastName //Expected: Doe

n.name //Expected: John Doe



```



```java

public class NameMe {

    private String firstName;

    private String lastName;

    private String fullName;



    public NameMe(String first, String last) {

        this.firstName = first;

        this.lastName = last;

   }

 }



NameMe nameMe = new NameMe("John", "Doe");

nameMe.getFirstName(); //Expected: John

nameMe.getLastName(); //Expected: Doe

nameMe.getFullName(); //Expected: John Doe





```

---


🏷 `FUNDAMENTALS | LANGUAGE FEATURES | OBJECT-ORIENTED PROGRAMMING`


[View this Kata on Codewars.com](https://www.codewars.com/kata/547c71fdc5b2b38db1000098)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
