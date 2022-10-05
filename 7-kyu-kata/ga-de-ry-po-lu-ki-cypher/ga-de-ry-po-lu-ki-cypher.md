# 7 kyu - GA-DE-RY-PO-LU-KI cypher

##### **ID**: [592a6ad46d6c5a62b600003f](https://www.codewars.com/kata/592a6ad46d6c5a62b600003f) | **Slug**: [ga-de-ry-po-lu-ki-cypher](https://www.codewars.com/kata/592a6ad46d6c5a62b600003f) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2017-05-28 ***by*** [dcieslak](https://www.codewars.com/users/dcieslak) | **Approved**: 2017-05-29 ***by*** [adrian.eyre](https://www.codewars.com/users/adrian.eyre)

##### **Languages Available**: javascript, csharp, ruby, crystal, python, typescript, cpp

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-09-21

---

## Kata Description


<h2> Introduction </h2>



The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages. The encryption is based on short, easy to remember key. The key is written as paired letters, which are in the cipher simple replacement.



The most frequently used key is "GA-DE-RY-PO-LU-KI".



```

 G => A

 g => a

 a => g

 A => G

 D => E

  etc.

```



The letters, which are not on the list of substitutes, stays in the encrypted text without changes.



<h2>Task</h2>



Your task is to help scouts to encrypt and decrypt thier messages.

Write the `Encode` and `Decode` functions.



<h2>Input/Output</h2>



The input string consists of lowercase and uperrcase characters and white .

The substitution has to be case-sensitive. 



<h2>Example</h2>



```csharp

 Encode("ABCD")          // => GBCE 

 Encode("Ala has a cat") // => Gug hgs g cgt 

 Encode("gaderypoluki"); // => agedyropulik

 Decode("Gug hgs g cgt") // => Ala has a cat 

 Decode("agedyropulik")  // => gaderypoluki

 Decode("GBCE")          // => ABCD

 ```

```javascript

 encode("ABCD")          // => GBCE 

 encode("Ala has a cat") // => Gug hgs g cgt 

 encode("gaderypoluki"); // => agedyropulik

 decode("Gug hgs g cgt") // => Ala has a cat 

 decode("agedyropulik")  // => gaderypoluki

 decode("GBCE")          // => ABCD

 ```

```ruby

 encode("ABCD")          // => GBCE 

 encode("Ala has a cat") // => Gug hgs g cgt 

 encode("gaderypoluki"); // => agedyropulik

 decode("Gug hgs g cgt") // => Ala has a cat 

 decode("agedyropulik")  // => gaderypoluki

 decode("GBCE")          // => ABCD

 ```



# GADERYPOLUKI collection



<table border="0" cellpadding="0" cellspacing="0">

<tr>

<td ><a href="https://www.codewars.com/kata/592a6ad46d6c5a62b600003f" target="_blank">GADERYPOLUKI cypher vol 1</a></td>

</tr>

<tr>

<td ><a href="https://www.codewars.com/kata/592b7b16281da94068000107" target="_blank">GADERYPOLUKI cypher vol 2</a></td>

</tr>

<tr>

<td ><a href="https://www.codewars.com/kata/592bdf59912f2209710000e9" target="_blank">GADERYPOLUKI cypher vol 3 - Missing Key</a></td>

</tr>

<tr>

<td ><a href="https://www.codewars.com/kata/592ceef6af58a64c7f00003c" target="_blank">GADERYPOLUKI cypher vol 4 - Missing key madness</a></td>

</tr>

</table>

      

---


🏷 `FUNDAMENTALS | CIPHERS | CRYPTOGRAPHY`


[View this Kata on Codewars.com](https://www.codewars.com/kata/592a6ad46d6c5a62b600003f)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
