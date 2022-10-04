# 6 kyu - Count the smiley faces!

##### **ID**: [583203e6eb35d7980400002a](https://www.codewars.com/kata/583203e6eb35d7980400002a) | **Slug**: [count-the-smiley-faces](https://www.codewars.com/kata/583203e6eb35d7980400002a) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2016-11-20 ***by*** [St3f4n](https://www.codewars.com/users/St3f4n) | **Approved**: 2016-11-21 ***by*** [smile67](https://www.codewars.com/users/smile67)

##### **Languages Available**: javascript, coffeescript, php, python, typescript, crystal, ruby, csharp, java, clojure, cpp, haskell, dart, scala, factor

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2021-11-20

---

## Kata Description


Given an array (arr) as an argument complete the function `countSmileys` that should return the total number of smiling faces.  



Rules for a smiling face:

- Each smiley face must contain a valid pair of eyes. Eyes can be marked as `:` or `;`

- A smiley face can have a nose but it does not have to. Valid characters for a nose are `-` or `~`

- Every smiling face must have a smiling mouth that should be marked with either `)` or `D`



No additional characters are allowed except for those mentioned.  



**Valid smiley face examples:** `:) :D ;-D :~)`  

**Invalid smiley faces:**  `;( :> :} :]`



## Example



```

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;

countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;

countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

```



## Note



In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.



---


🏷 `REGULAR EXPRESSIONS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/583203e6eb35d7980400002a)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
