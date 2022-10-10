# 6 kyu - Keyword Cipher Helper

##### **ID**: [535c1c80cdbf5011e600030f](https://www.codewars.com/kata/535c1c80cdbf5011e600030f) | **Slug**: [keyword-cipher-helper](https://www.codewars.com/kata/535c1c80cdbf5011e600030f) | **Category**: `REFACTORING` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2014-04-26 ***by*** [jacobb](https://www.codewars.com/users/jacobb) | **Approved**: 2014-10-07 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, python

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-09-18

---

## Kata Description


A keyword cipher is a monoalphabetic cipher which uses a "keyword" to provide encryption. It is somewhat similar to a Caesar cipher.



In a keyword cipher, repeats of letters in the keyword are removed and the alphabet is reordered such that the letters in the keyword appear first, followed by the rest of the letters in the alphabet in their otherwise usual order.



E.g. for an uppercase latin alphabet with keyword of "KEYWORD":



`A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z`



becomes:



`K|E|Y|W|O|R|D|A|B|C|F|G|H|I|J|L|M|N|P|Q|S|T|U|V|X|Z`



such that:

```javascript

cipher.encode('ABCHIJ') == 'KEYABC'

cipher.decode('KEYABC') == 'ABCHIJ'

```



All letters in the keyword will also be in the alphabet. For the purpose of this kata, only the first occurence of a letter in a keyword should be used. Any characters not provided in the alphabet should be left in situ when encoding or decoding.



---


🏷 `CRYPTOGRAPHY | CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/535c1c80cdbf5011e600030f)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
