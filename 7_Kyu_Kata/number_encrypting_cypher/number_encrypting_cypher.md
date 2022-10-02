# 7 kyu - Number encrypting: cypher

##### **ID**: [57aa3927e298a757820000a8](https://www.codewars.com/kata/57aa3927e298a757820000a8) | **Slug**: [number-encrypting-cypher](https://www.codewars.com/kata/57aa3927e298a757820000a8) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2016-08-09 ***by*** [dgrcode](https://www.codewars.com/users/dgrcode) | **Approved**: 2016-08-11 ***by*** [donaldsebleung](https://www.codewars.com/users/donaldsebleung)

##### **Languages Available**: javascript, python, ruby

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-09-21

---

## Kata Description


# Number encrypting: cypher

## Part I of Number encrypting Katas

***



## Introduction

Back then when the internet was coming up, most search functionalities simply looked for keywords in text to show relevant documents. Hackers weren't very keen on having their information displayed on websites, bulletin boards, newsgroups or any other place, so they started to replace certain letters in words. It started out with simple vowel substitutions like a 4 instead of an A, or a 3 instead of an E. This meant that topics like cracking or hacking remained undetected.



Here we will use a reduced version of the *Leet Speak alphabet*, but you can find more information [here](http://www.gamehouse.com/blog/leet-speak-cheat-sheet/) or at [Wikipedia](https://en.wikipedia.org/wiki/Leet).



## Task

You will receive a string composed by English words, `string`. You will have to return a cyphered version of that string.



The numbers corresponding to each letter are represented at the table below. Notice that different letters can share the same number. In those cases, one letter will be upper case and the other one lower case.



<style>

  .cell {

    border: 1px solid white;

    text-align: center;

    width: 7%;

  }

  

  .title {

    border: 1px solid white;

    border-bottom: 1px solid white;

    text-align: center;

    min-width: 11em;

  }

  

  .no-border {border: none}

  

  table {

    margin-bottom: 10px

  }

</style>



<pre>

<table>

  <tr >

    <td class="no-border"></td>

    <td class="cell">1</td>

    <td class="cell">2</td>

    <td class="cell">3</td>

    <td class="cell">4</td>

    <td class="cell">5</td>

    <td class="cell">6</td>

    <td class="cell">7</td>

    <td class="cell">8</td>

    <td class="cell">9</td>

    <td class="cell">0</td>

  </tr>

  <tr >

    <td class="title">Upper case</td>

    <td class="cell">I</td>

    <td class="cell">R</td>

    <td class="cell">E</td>

    <td class="cell">A</td>

    <td class="cell">S</td>

    <td class="cell">G</td>

    <td class="cell">T</td>

    <td class="cell">B</td>

    <td class="cell"></td>

    <td class="cell">O</td>

  </tr>

  <tr >

    <td class="title">Lower case</td>

    <td class="cell">l</td>

    <td class="cell">z</td>

    <td class="cell">e</td>

    <td class="cell">a</td>

    <td class="cell">s</td>

    <td class="cell">b</td>

    <td class="cell">t</td>

    <td class="cell"></td>

    <td class="cell">g</td>

    <td class="cell">o</td>

  </tr>

  <tr></tr>

</table>

</pre>



Any character that is not at the table, does not change when cyphered.



## Examples



  * **Input:** "Hello World". **Output**: "H3110 W0r1d"

  * **Input:** "I am your father". **Output**: "1 4m y0ur f47h3r"

  * **Input:** "I do not know what else I can test. Be cool. Good luck". **Output**: "1 d0 n07 kn0w wh47 3153 1 c4n 7357. 83 c001. 600d 1uck"



## Part II

If you liked this Kata, you can find the [part II: *Number encrypting: decypher*](https://www.codewars.com/kata/number-encrypting-decypher), where your goal is to decypher the strings.





---


🏷 `FUNDAMENTALS | STRINGS | CIPHERS | CRYPTOGRAPHY`


[View this Kata on Codewars.com](https://www.codewars.com/kata/57aa3927e298a757820000a8)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
