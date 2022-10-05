# 6 kyu - Keyword Cipher

##### **ID**: [57241cafef90082e270012d8](https://www.codewars.com/kata/57241cafef90082e270012d8) | **Slug**: [keyword-cipher](https://www.codewars.com/kata/57241cafef90082e270012d8) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2016-05-18 ***by*** [user8580805](https://www.codewars.com/users/user8580805) | **Approved**: 2017-01-18 ***by*** [user5036852](https://www.codewars.com/users/user5036852)

##### **Languages Available**: ruby, python, javascript

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-09-21

---

## Kata Description


Third day at your new cryptoanalyst job and you come across your toughest assignment yet. Your job is to implement a simple keyword cipher. A keyword cipher is a type of monoalphabetic substitution where two parameters are provided as such (string, keyword). The string is encrypted by taking the keyword, dropping any letters that appear more than once. The rest of the letters of the alphabet that aren't used are then appended to the end of the keyword.



For example, if your string was "hello" and your keyword was "wednesday", your encryption key would be 'wednsaybcfghijklmopqrtuvxz'.



To encrypt 'hello' you'd substitute as follows,

```

              abcdefghijklmnopqrstuvwxyz

  hello ==>   |||||||||||||||||||||||||| ==> bshhk

              wednsaybcfghijklmopqrtuvxz



```             



hello encrypts into bshhk with the keyword wednesday. This cipher also uses lower case letters only.



Good Luck.



---


🏷 `CRYPTOGRAPHY | STRINGS | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/57241cafef90082e270012d8)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
