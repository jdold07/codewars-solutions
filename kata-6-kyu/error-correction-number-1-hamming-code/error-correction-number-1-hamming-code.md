# 6 kyu - Error correction #1 - Hamming Code

##### **ID**: [5ef9ca8b76be6d001d5e1c3e](https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e) | **Slug**: [error-correction-number-1-hamming-code](https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2020-08-06 ***by*** [zLuki](https://www.codewars.com/users/zLuki) | **Approved**: 2020-08-27 ***by*** [user9644768](https://www.codewars.com/users/user9644768)

##### **Languages Available**: javascript, python, php, typescript, java, csharp, julia, coffeescript, rust, ruby, c, cpp, kotlin, go, dart, groovy, powershell, haskell, lua, clojure, nasm, d, shell

##### **My Completed Languages**: javascript, typescript, coffeescript, python ***as at*** 2022-10-08 | **Originally completed**: 2022-09-27

---

## Kata Description


*Translations appreciated*



## Background information



The Hamming Code is used to correct errors, so-called bit flips, in data transmissions. Later in the description follows a detailed explanation of how it works. <br>

In this Kata we will implement the Hamming Code with bit length 3; this has some advantages and disadvantages:

- **[ + ]** It's simple to implement

- **[ + ]** Compared to other versions of hamming code, we can correct more mistakes

- **[ - ]** The size of the input triples





## Task 1: Encode function



Implement the encode function, using the following steps:

* convert every letter of the text to its ASCII value; (ASCII value of space is 32)

* convert ASCII values to 8-bit binary;

* triple every bit;

* concatenate the result;



For example:

```c

input: "hey"

--> 104, 101, 121                  // ASCII values

--> 01101000, 01100101, 01111001   // binary

--> 000111111000111000000000 000111111000000111000111 000111111111111000000111  // tripled

--> "000111111000111000000000000111111000000111000111000111111111111000000111"  // concatenated

```



## Task 2: Decode function:



Check if any errors happened and correct them. Errors will be only bit flips, and not a loss of bits:



- ```111``` --> ```101``` : this can and will happen

- ```111``` --> ```11``` : this cannot happen



**Note**: the length of the input string is also always divisible by 24 so that you can convert it to an ASCII value.



Steps:



* Split the input into groups of three characters;

* Check if an error occurred: replace each group with the character that occurs most often, e.g. `010` --> `0`, `110` --> `1`, etc;

* Take each group of 8 characters and convert that binary number;

* Convert the binary values to decimal (ASCII);

* Convert the ASCII values to characters and concatenate the result



For example:

```c

input: "100111111000111001000010000111111000000111001111000111110110111000010111"

--> 100, 111, 111, 000, 111, 001, ...  // triples

-->  0,   1,   1,   0,   1,   0,  ...  // corrected bits

--> 01101000, 01100101, 01111001       // bytes

--> 104, 101, 121                      // ASCII values

--> "hey"

```



~~~if:shell

<br>

In <b>bash</b> you get two arguments, first one is "encode" or "decode" whether you should encode or decode and the second argument is the plain text or the encoded bits.  

<br>

~~~



If you liked this kata, please try out some of my other katas:

<br>

<a href="https://www.codewars.com/kata/5efae11e2d12df00331f91a6" target="_blank">Crack the PIN</a>

<br>

<a href="https://www.codewars.com/kata/5ef9c85dc41b4e000f9a645f" target="_blank">Decode the QR-Code</a>

<br>

<a href="https://www.codewars.com/kata/5f0795c6e45bc600247ab794" target="_blank">Hack the NSA</a>



---


🏷 `ALGORITHMS | BITS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
