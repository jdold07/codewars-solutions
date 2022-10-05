# 7 kyu - Bitty Words

##### **ID**: [5ace908a4d9fd1ed74000099](https://www.codewars.com/kata/5ace908a4d9fd1ed74000099) | **Slug**: [bitty-words](https://www.codewars.com/kata/5ace908a4d9fd1ed74000099) | **Category**: `GAMES` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2018-04-12 ***by*** [Austin Haws](https://www.codewars.com/users/Austin%20Haws) | **Approved**: 2018-04-13 ***by*** [smile67](https://www.codewars.com/users/smile67)

##### **Languages Available**: javascript

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-09-20

---

## Kata Description


Your friend has given you a secret message nested inside a block of text. She provided you the key to her code as a number and now you must decode the message.



The number, in binary, represents on/off flags for each word of the phrase. The bit order, overlayed on the array of words, will give which words to include in the phrase.

```

Example:

bittyWords('Long live the king', 11)

Convert to binary: 11 = 0b1011

Apply binary to words list:

['Long', 'live', 'the', 'king']

    1       0      1       1

result: 'Long the king'

```

If the number does not have enough bits for the words array, left pad the number with 0s.



Example:

```

bittyWords('So long and thanks for all the fish', 42) === 'and for the'

```

42 is 0b101010 which is only 6 words, but the phrase has 8 words. The left two words are 0s and not included in the output.



To uncomplicate things, there will be no punctuation in the phrases.

---


🏷 `STRINGS | BINARY | ALGORITHMS | CIPHERS | CRYPTOGRAPHY`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5ace908a4d9fd1ed74000099)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
