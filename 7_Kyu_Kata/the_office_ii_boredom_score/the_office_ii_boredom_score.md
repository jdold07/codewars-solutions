# 7 kyu - The Office II - Boredom Score

##### **ID**: [57ed4cef7b45ef8774000014](https://www.codewars.com/kata/57ed4cef7b45ef8774000014) | **Slug**: [the-office-ii-boredom-score](https://www.codewars.com/kata/57ed4cef7b45ef8774000014) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2016-09-29 ***by*** [PG1](https://www.codewars.com/users/PG1) | **Approved**: 2016-10-15 ***by*** [user8476848](https://www.codewars.com/users/user8476848)

##### **Languages Available**: javascript, ruby, coffeescript, crystal, python, csharp, haskell, java

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-09-10

---

## Kata Description


Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.



```if-not:java

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

```



```if:java

You will be provided with an array of `Person` objects with each instance containing the name and department for a staff member.

~~~java

public class Person {

  public final String name;        // name of the staff member

  public final String department;  // department they work in

}

~~~

```



Each department has a different boredom assessment score, as follows:



accounts = 1<br>

finance = 2 <br>

canteen = 10 <br>

regulation = 3 <br>

trading = 6 <br>

change = 6<br>

IS = 8<br>

retail = 5<br> 

cleaning = 4<br>

pissing about = 25<br>



Depending on the cumulative score of the team, return the appropriate sentiment:



<=80: 'kill me now'<br>

< 100 & > 80: 'i can handle this'<br>

100 or over: 'party time!!'



<a href='https://www.codewars.com/kata/the-office-i-outed'>The Office I - Outed</a><br>

<a href='https://www.codewars.com/kata/the-office-iii-broken-photocopier'>The Office III - Broken Photocopier</a><br>

<a href='https://www.codewars.com/kata/the-office-iv-find-a-meeting-room'>The Office IV - Find a Meeting Room</a><br>

<a href='https://www.codewars.com/kata/the-office-v-find-a-chair'>The Office V - Find a Chair</a><br>

---


🏷 `ARRAYS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/57ed4cef7b45ef8774000014)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
