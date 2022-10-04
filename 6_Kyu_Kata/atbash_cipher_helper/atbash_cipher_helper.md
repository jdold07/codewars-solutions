# 6 kyu - Atbash Cipher Helper

##### **ID**: [52f2f5ecc807c0ab1a00001a](https://www.codewars.com/kata/52f2f5ecc807c0ab1a00001a) | **Slug**: [atbash-cipher-helper](https://www.codewars.com/kata/52f2f5ecc807c0ab1a00001a) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2014-03-30 ***by*** [jacobb](https://www.codewars.com/users/jacobb) | **Approved**: 2014-05-29 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, coffeescript, ruby, php

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-09-18

---

## Kata Description


The Atbash cipher is a simple substitution cipher originally known to be implemented using the Hebrew alphabet (אתבש, aleph-tav-beth-shin). The Atbash cipher is particularly well-known for its use in the Bible. [It was in use as early as 500BC by scribes writing the Book of Jeremiah.](http://mysteriouswritings.com/the-atbash-cipher-and-jeremiah-511/)



In the Atbash cipher, the first letter of the alphabet is substituted with the last letter, the second letter with the second to last letter, and so on.



For the Latin alphabet, this could be mapped as:



    A|B|C|D|E|F|G|H|I|J|K|L|M

    Z|Y|X|W|V|U|T|S|R|Q|P|O|N



For the Hebrew alphabet:



    א|ב|ג|ד|ה|ו|ז|ח|ט|י|כ

    ת|ש|ר|ק|צ|פ|ע|ס|נ|מ|ל



*When viewing Hebrew text:*



* This is about **viewing** the text and should have no impact on your code. It may, however, help you with debugging text.

* I assume that your computer will display the characters properly.

* Hebrew is written right-to-left, such that: <code>"א|ב".charAt(0) == "א"</code>.

* There are alternate forms of some letters in Hebrew (e.g. final forms) that aren't listed here. You won't need to worry about them for this Kata.



Your solution should support any alphabet provided to the constructor, and should leave characters that are not in the specified alphabet in situ (e.g. uppercase letters should be left as-is if provided an alphabet of only lowercase letters).

---


🏷 `ALGORITHMS | CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/52f2f5ecc807c0ab1a00001a)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
