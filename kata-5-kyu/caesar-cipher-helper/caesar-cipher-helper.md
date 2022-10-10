# 5 kyu - Caesar Cipher Helper

##### **ID**: [526d42b6526963598d0004db](https://www.codewars.com/kata/526d42b6526963598d0004db) | **Slug**: [caesar-cipher-helper](https://www.codewars.com/kata/526d42b6526963598d0004db) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">5 kyu</span>

##### **First Published**: 2013-10-27 **_by_** [eugene-bulkin](https://www.codewars.com/users/eugene-bulkin) | **Approved**: _not available_ **_by_** [_not available_](*https://www.codewars.com*)

##### **Languages Available**: javascript, coffeescript, python, ruby, php

##### **My Completed Languages**: javascript **_as at_** 2022-10-08 | **Originally completed**: 2022-09-18

---

## Kata Description

Write a class that, when given a string, will return an **uppercase** string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

For example:

```javascript
let c = new CaesarCipher(5) // creates a CipherHelper with a shift of five

c.encode("Codewars") // returns 'HTIJBFWX'

c.decode("BFKKQJX") // returns 'WAFFLES'
```

```coffeescript
c = new CaesarCipher 5 # creates a CipherHelper with a shift of five

c.encode "Codewars" # returns 'HTIJBFWX'

c.decode "BFKKQJX" # returns 'WAFFLES'
```

```python

c = CaesarCipher(5); # creates a CipherHelper with a shift of five

c.encode('Codewars') # returns 'HTIJBFWX'

c.decode('BFKKQJX') # returns 'WAFFLES'

```

```ruby

c = CaesarCipher.new(5); # creates a CipherHelper with a shift of five

c.encode('Codewars') # returns 'HTIJBFWX'

c.decode('BFKKQJX') # returns 'WAFFLES'

```

```php

$c = new CaesarCipher(5);

$c->encode('Codewars'); // returns 'HTIJBFWX'

$c->decode('BFKKQJX'); // returns 'WAFFLES'

```

If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.

The shift will always be in range of `[1, 26]`.

---

🏷 `CIPHERS | OBJECT-ORIENTED PROGRAMMING | STRINGS | ALGORITHMS`

[View this Kata on Codewars.com](https://www.codewars.com/kata/526d42b6526963598d0004db)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### _This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API. The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file. Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution. My solutions are not always commented as the solutions are rarely submitted with comments._
