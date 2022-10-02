# 5 kyu - Trifid Cipher Encoder

##### **ID**: [5dcf96055ca66e0032b9b958](https://www.codewars.com/kata/5dcf96055ca66e0032b9b958) | **Slug**: [trifid-cipher-encoder](https://www.codewars.com/kata/5dcf96055ca66e0032b9b958) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">5 kyu</span>

##### **First Published**: 2019-11-16 ***by*** [dmercertaylor](https://www.codewars.com/users/dmercertaylor) | **Approved**: 2020-12-21 ***by*** [Blind4Basics](https://www.codewars.com/users/Blind4Basics)

##### **Languages Available**: javascript

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-09-21

---

## Kata Description


In this challenge, you must write a function which can encipher plaintext text using Delastelle's Trifid cipher, as well as a function to decode back to plaintext. You will be passed a 27 letter key, a break period, and a string containing the data to be encoded or decoded. The function should return a string.



The key, data, and output will all contain exclusively valid uppercase letters using plus signs as the 27th letter. Keys will always be a complete 27-letter alphabet with no repeats, and periods will always be positive integers (in other words, there are no tricks in the inputs).



### Description of the cipher from [Practical Cryptography](http://practicalcryptography.com/ciphers/trifid-cipher/):



The key is in the form of 3 squares:



`key = EPSDUCVWYM+ZLKXNBTFGORIJHAQ`

```                                 

square 1   square 2   square 3   

                                 

  1 2 3      1 2 3      1 2 3    

1 E P S    1 M + Z    1 F G O    

2 D U C    2 L K X    2 R I J    

3 V W Y    3 N B T    3 H A Q    

```

As an example, we will encipher the text `DEFEND THE EAST WALL OF THE CASTLE+`. The first step means locating the plaintext letters in the squares above, D is in square 1, row 2, column 1, so D becomes 121. In the same manner, E becomes 111. If we write down the numbers corresponding to each letter vertically, it becomes:

```

D E F E N D T H E E A S T W A L L O F T H E C A S T L E +

1 1 3 1 2 1 2 3 1 1 3 1 2 1 3 2 2 3 3 2 3 1 1 3 1 2 2 1 2

2 1 1 1 3 2 3 3 1 1 3 1 3 3 3 2 2 1 1 3 3 1 2 3 1 3 2 1 1

1 1 1 1 1 1 3 1 1 1 2 3 3 2 2 1 1 3 1 3 1 1 3 2 3 3 1 1 2

```

At the moment this is still a substitution cipher and fairly easy to break. The next step is to use a 'period', which is a number usually 5 - 20, which is part of the key material agreed on by both sender and receiver. If we take a period of 5,

```

D E F E N  D T H E E  A S T W A  L L O F T  H E C A S  T L E +

1 1 3 1 2  1 2 3 1 1  3 1 2 1 3  2 2 3 3 2  3 1 1 3 1  2 2 1 2

2 1 1 1 3  2 3 3 1 1  3 1 3 3 3  2 2 1 1 3  3 1 2 3 1  3 2 1 1 

1 1 1 1 1  1 3 1 1 1  2 3 3 2 2  1 1 3 1 3  1 1 3 2 3  3 1 1 2

```

we group the numbers. We now read off the numbers in each group horizontally, and do the substitution back to letters using the original keysquare.

```

113 122 111 311 111  123 112 331 113 111  312 133 133 323 322

S   U   E   F   E    C   P   H   S   E    G   Y   Y   J   I   



223 322 211 311 313  311 313 123 111 323   221 232 113 112

X   I   M   F   O    F   O   C   E   J     L   B   S   P

```

Which means `DEFEND THE EAST WALL OF THE CASTLE+` is enciphered to `SUEFECPHSEGYYJIXIMFOFOCEJLBSP` using the key square above and a period of 5.

---


🏷 `CIPHERS | CRYPTOGRAPHY | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5dcf96055ca66e0032b9b958)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
