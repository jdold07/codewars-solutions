# 6 kyu - Simple Substitution Cipher Helper

##### **ID**: [52eb114b2d55f0e69800078d](https://www.codewars.com/kata/52eb114b2d55f0e69800078d) | **Slug**: [simple-substitution-cipher-helper](https://www.codewars.com/kata/52eb114b2d55f0e69800078d) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2014-02-02 **_by_** [jacobb](https://www.codewars.com/users/jacobb) | **Approved**: 2014-03-18 **_by_** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, python, rust

##### **My Completed Languages**: python, javascript **_as at_** 2022-10-08 | **Originally completed**: 2022-05-06

---

## Kata Description

A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

E.g.

```javascript
let abc1 = "abcdefghijklmnopqrstuvwxyz"

let abc2 = "etaoinshrdlucmfwypvbgkjqxz"

let sub = new SubstitutionCipher(abc1, abc2)

sub.encode("abc") // => "eta"

sub.encode("xyz") // => "qxz"

sub.encode("aeiou") // => "eirfg"

sub.decode("eta") // => "abc"

sub.decode("qxz") // => "xyz"

sub.decode("eirfg") // => "aeiou"
```

```python

map1 = "abcdefghijklmnopqrstuvwxyz";

map2 = "etaoinshrdlucmfwypvbgkjqxz";



cipher = Cipher(map1, map2);

cipher.encode("abc") # => "eta"

cipher.encode("xyz") # => "qxz"

cipher.encode("aeiou") # => "eirfg"



cipher.decode("eta") # => "abc"

cipher.decode("qxz") # => "xyz"

cipher.decode("eirfg") # => "aeiou"

```

```rust

let map1 = "abcdefghijklmnopqrstuvwxyz";

let map2 = "etaoinshrdlucmfwypvbgkjqxz";



let cipher = Cipher::new(map1, map2);

cipher.encode("abc") // => "eta"

cipher.encode("xyz") // => "qxz"

cipher.encode("aeiou") // => "eirfg"



cipher.decode("eta") // => "abc"

cipher.decode("qxz") // => "xyz"

cipher.decode("eirfg") // => "aeiou"

```

If a character provided is not in the opposing alphabet, simply leave it as be.

---

🏷 `CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS | ALGORITHMS`

[View this Kata on Codewars.com](https://www.codewars.com/kata/52eb114b2d55f0e69800078d)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### _This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API. The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file. Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution. My solutions are not always commented as the solutions are rarely submitted with comments._
