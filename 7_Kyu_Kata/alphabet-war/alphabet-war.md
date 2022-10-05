# 7 kyu - Alphabet war

##### **ID**: [59377c53e66267c8f6000027](https://www.codewars.com/kata/59377c53e66267c8f6000027) | **Slug**: [alphabet-war](https://www.codewars.com/kata/59377c53e66267c8f6000027) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2017-06-07 ***by*** [dcieslak](https://www.codewars.com/users/dcieslak) | **Approved**: 2017-06-07 ***by*** [JohanWiltink](https://www.codewars.com/users/JohanWiltink)

##### **Languages Available**: csharp, javascript, cpp, python, ruby, crystal, haskell, php, c, nasm, kotlin, java, julia

##### **My Completed Languages**: python ***as at*** 2022-10-05 | **Originally completed**: 2022-04-24

---

## Kata Description


# Introduction



There is a war and nobody knows - the alphabet war!  

There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.



# Task



Write a function that accepts `fight` string consists of only small letters and return who wins the fight. When the left side wins return `Left side wins!`, when the right side wins return `Right side wins!`, in other case return `Let's fight again!`.



The left side letters and their power:

```

 w - 4

 p - 3

 b - 2

 s - 1

```

The right side letters and their power:

```

 m - 4

 q - 3

 d - 2

 z - 1

```

The other letters don't have power and are only victims.



# Example



```csharp

AlphabetWar("z");        //=> Right side wins!

AlphabetWar("zdqmwpbs"); //=> Let's fight again!

AlphabetWar("zzzzs");    //=> Right side wins!

AlphabetWar("wwwwwwz");  //=> Left side wins!

```

```javascript

alphabetWar("z");        //=> Right side wins!

alphabetWar("zdqmwpbs"); //=> Let's fight again!

alphabetWar("zzzzs");    //=> Right side wins!

alphabetWar("wwwwwwz");  //=> Left side wins!

```



# Alphabet war Collection



<table border="0" cellpadding="0" cellspacing="0">

<tr>

<td ><a href="https://www.codewars.com/kata/59377c53e66267c8f6000027" target="_blank">Alphavet war </a></td>

</tr>

<tr>

<td ><a href="https://www.codewars.com/kata/5938f5b606c3033f4700015a" target="_blank">Alphabet war - airstrike - letters massacre</a></td>

</tr>

<tr>

<td ><a href="https://www.codewars.com/kata/alphabet-wars-reinforces-massacre" target="_blank">Alphabet wars - reinforces massacre</a></td>

</tr>

<tr>

<td ><a href="https://www.codewars.com/kata/59437bd7d8c9438fb5000004" target="_blank">Alphabet wars - nuclear strike</a></td>

</tr>

<tr>

<td ><a href="https://www.codewars.com/kata/59473c0a952ac9b463000064" target="_blank">Alphabet war - Wo lo loooooo priests join the war</a></td>

</tr>

</table>





---


🏷 `FUNDAMENTALS | STRINGS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/59377c53e66267c8f6000027)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
