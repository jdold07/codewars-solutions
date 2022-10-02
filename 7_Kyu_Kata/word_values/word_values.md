# 7 kyu - Word values

##### **ID**: [598d91785d4ce3ec4f000018](https://www.codewars.com/kata/598d91785d4ce3ec4f000018) | **Slug**: [word-values](https://www.codewars.com/kata/598d91785d4ce3ec4f000018) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2017-08-11 ***by*** [KenKamau](https://www.codewars.com/users/KenKamau) | **Approved**: 2017-08-17 ***by*** [JohanWiltink](https://www.codewars.com/users/JohanWiltink)

##### **Languages Available**: haskell, python, javascript, csharp, php, ruby, lua, typescript, dart, coffeescript, crystal, c, go, cpp, rust, java, kotlin

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-09-11

---

## Kata Description


Given a string `"abc"` and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of `1 + 2 + 3 = 6`. This means that: `a = 1, b = 2, c = 3 ....z = 26`.



You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with `1`.



`nameValue ["abc","abc abc"]` should return `[6,24]` because of `[ 6 * 1, 12 * 2 ]`. Note how spaces are ignored.



`"abc"` has a value of `6`, while `"abc abc"` has a value of `12`. Now, the value at position `1` is multiplied by `1` while the value at position `2` is multiplied by `2`.



Input will only contain lowercase characters and spaces.



Good luck!



If you like this Kata, please try:



[String matchup](https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4)



[Consonant value](https://www.codewars.com/kata/59c633e7dcc4053512000073)

---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/598d91785d4ce3ec4f000018)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
