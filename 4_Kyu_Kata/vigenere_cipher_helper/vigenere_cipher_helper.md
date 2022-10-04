# 4 kyu - Vigenère Cipher Helper

##### **ID**: [52d1bd3694d26f8d6e0000d3](https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3) | **Slug**: [vigenere-cipher-helper](https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:blue">4 kyu</span>

##### **First Published**: 2014-01-12 ***by*** [jacobb](https://www.codewars.com/users/jacobb) | **Approved**: 2014-02-17 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, coffeescript, python, php

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-09-18

---

## Kata Description


The Vigenère cipher is a classic cipher originally developed by Italian cryptographer Giovan Battista Bellaso and published in 1553. It is named after a later French cryptographer Blaise de Vigenère, who had developed a stronger autokey cipher (a cipher that incorporates the message of the text into the key). 



The cipher is easy to understand and implement, but survived three centuries of attempts to break it, earning it the nickname "le chiffre indéchiffrable" or "the indecipherable cipher."



[From Wikipedia](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher):



> The Vigenère cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword. It is a simple form of polyalphabetic substitution.

>

> . . .

>

> In a Caesar cipher, each letter of the alphabet is shifted along some number of places; for example, in a Caesar cipher of shift `3`, `A` would become `D`, `B` would become `E`, `Y` would become `B` and so on. The Vigenère cipher consists of several Caesar ciphers in sequence with different shift values.



Assume the key is repeated for the length of the text, character by character. Note that some implementations repeat the key over characters only if they are part of the alphabet -- **this is not the case here.**



The shift is derived by applying a Caesar shift to a character with the corresponding index of the key in the alphabet.



Visual representation:

```javascript

"my secret code i want to secure"  // message

"passwordpasswordpasswordpasswor"  // key

```

Write a class that, when given a key and an alphabet, can be used to encode and decode from the cipher.



## Example

```javascript

var alphabet = 'abcdefghijklmnopqrstuvwxyz';

var key = 'password';



// creates a cipher helper with each letter substituted

// by the corresponding character in the key

var c = new VigenèreCipher(key, alphabet);



c.encode('codewars'); // returns 'rovwsoiv'

c.decode('laxxhsj');  // returns 'waffles'

```

Any character not in the alphabet must be left as is. For example (following from above):

```javascript

c.encode('CODEWARS'); // returns 'CODEWARS'

```

---


🏷 `ALGORITHMS | CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
