# 5 kyu - Affine Cipher Helper

##### **ID**: [52f2f1ea12b5cbc66900300a](https://www.codewars.com/kata/52f2f1ea12b5cbc66900300a) | **Slug**: [affine-cipher-helper](https://www.codewars.com/kata/52f2f1ea12b5cbc66900300a) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">5 kyu</span>

##### **First Published**: 2014-04-19 ***by*** [jacobb](https://www.codewars.com/users/jacobb) | **Approved**: 2016-11-11 ***by*** [JohanWiltink](https://www.codewars.com/users/JohanWiltink)

##### **Languages Available**: javascript

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-09-18

---

## Kata Description


[The term "affine" was introduced to mathematics by Leonhard Euler in 1748.](http://en.wikipedia.org/wiki/Affine_geometry#History) It comes from the Latin word *affinis* meaning "related." An *affine transformation* preserves the ratios of distances between points on a straight line. I.e. if you seek to generalize the concept, think of the characters of your alphabet as points on a straight line.



[The Affine Cipher](http://en.wikipedia.org/wiki/Affine_cipher) is a monoalphabetic cipher that is slightly stronger than a Caesar Cipher. Given the modern alphabet, the Caesar Cipher has 26 possible keys, while the Affine Cipher has 312 possible keys. The Affine Cipher maps to the Caesar Cipher when `a = 1`, and the Atbash Cipher when `a = b = m - 1`.



There are four factors that go into the cipher:



* *x*, the position in the alphabet of the current letter

* *a*, a number that must be coprime with the length of the alphabet (i.e. gcd(a, m) = 1)

* *b*, an non-negative integer 

* *m*, the length of the alphabet



The formula `(a * x + b) % m` evaluates to the position of the letter in the alphabet to substitute.



Write a class that provides encode and decode methods for the Affine Cipher.



**Note:** Your constructor must throw an error if *a* is not coprime with *m*.



The function gcd has been provided to give you the greatest common denominator of two numbers. E.g. `gcd(2, 4) == 2`

---


🏷 `ALGORITHMS | CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/52f2f1ea12b5cbc66900300a)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
