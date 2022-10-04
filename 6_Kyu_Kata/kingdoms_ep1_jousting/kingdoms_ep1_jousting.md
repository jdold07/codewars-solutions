# 6 kyu - Kingdoms Ep1: Jousting

##### **ID**: [6138ee916cb50f00227648d9](https://www.codewars.com/kata/6138ee916cb50f00227648d9) | **Slug**: [kingdoms-ep1-jousting](https://www.codewars.com/kata/6138ee916cb50f00227648d9) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2021-09-08 ***by*** [Schulzkafer](https://www.codewars.com/users/Schulzkafer) | **Approved**: 2021-10-01 ***by*** [Elfein7Night](https://www.codewars.com/users/Elfein7Night)

##### **Languages Available**: javascript, typescript, java, python, c, cobol

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-09-04

---

## Kata Description


The King organizes the jousting. You are a young human lady and your fiancé is an ogre. Today is his anniversary and he would love to visit the tournament, but it's forbidden for ogres to visit the Kingdom. So you decided to go there, to paint the exact moments of clash of cavalry and to present these paintings to your beloved.



You are given the array / tuple (`listField`) of two strings of equal length.

Each the string contains `"$->"` and `"<-P"`(knight with lance) respectively.

The knights move towards each other and they can only take simultaneous steps of length `vKnightLeft` and `vKnightRight`.

When the index of `">"` is equal or more than the index of `"<"`, return the array / tuple representing the knights' positions.



Some examples of the collision:

``` 

  ["$->  ",  

   "  <-P"]     

```

 

```

  ["   $-> ",

   "    <-P"]

```

 

```

  ["   $-> ",

   "   <-P "]

```

## Notes:

- "The knight `"$->"` always starts in the position 0 of the first string; 

- "The knight `"<-P"` always starts in the last position of the second string;

- Velocity of knights can be different from 0 to 3 inclusive;

- Sometimes the collision can happen immediately;

- Sometimes there is no an immediate collision and velocitity of both knights is 0. At this case return an original array / tuple.



Example 1:

```

given

listField = ["$->    ",

             "    <-P"]

             

vKnightLeft = 1

vKnightRight = 1  



return

 [" $->   ", 

  "   <-P "]

```



Example 2:

```

given

listField = ["$->",

             "<-P"]

             

vKnightLeft = 1

vKnightRight = 1  



return

 ["$->", 

  "<-P"]

```



If you like this kata, check out the another one: [Kingdoms Ep2: The curse (simplified)](https://www.codewars.com/kata/6159dda246a119001a7de465)



![create the issue if you don's see the image](https://upload.wikimedia.org/wikipedia/commons/d/d0/Paulus_Hector_Mair_Tjost_fig2.jpg)

_One of your beautiful paintings for your Ogre_











---


🏷 `FUNDAMENTALS | ARRAYS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/6138ee916cb50f00227648d9)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
