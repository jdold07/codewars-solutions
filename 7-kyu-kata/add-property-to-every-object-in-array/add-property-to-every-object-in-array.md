# 7 kyu - Add property to every object in array 

##### **ID**: [54e8c3e89e2ae6f4900005a1](https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1) | **Slug**: [add-property-to-every-object-in-array](https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2015-02-21 ***by*** [Clarity](https://www.codewars.com/users/Clarity) | **Approved**: 2015-05-20 ***by*** [dnolan](https://www.codewars.com/users/dnolan)

##### **Languages Available**: javascript

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-09-22

---

## Kata Description


Your task is to add a new property ```usersAnswer``` to every object in the array ```questions```. The value of ```usersAnswer``` should be set to ```null```. The solution should work for array of any length. 



For example: 



```javascript 

var questions = [{

    question: "What's the currency of the USA?",

    choices: ["US dollar", "Ruble", "Horses", "Gold"],

    corAnswer: 0

}, {

    question: "Where was the American Declaration of Independence signed?",

    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],

    corAnswer: 0

}];

```     



After adding the property the result should be:

```javascript

var questions = [{

    question: "What's the currency of the USA?",

    choices: ["US dollar", "Ruble", "Horses", "Gold"],

    corAnswer: 0,

    usersAnswer: null

}, {

    question: "Where was the American Declaration of Independence signed?",

    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],

    corAnswer: 0,

    usersAnswer: null

}];

``` 

    

    

The `questions` array is already defined for you and is not the same as the one in the example.  

    

    

    



   



---


🏷 `FUNDAMENTALS | ARRAYS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
