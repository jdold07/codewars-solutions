# 7 kyu - Over The Road

##### **ID**: [5f0ed36164f2bc00283aed07](https://www.codewars.com/kata/5f0ed36164f2bc00283aed07) | **Slug**: [over-the-road-1](https://www.codewars.com/kata/5f0ed36164f2bc00283aed07) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2020-07-15 ***by*** [rge123](https://www.codewars.com/users/rge123) | **Approved**: 2020-08-05 ***by*** [user9644768](https://www.codewars.com/users/user9644768)

##### **Languages Available**: python, julia, javascript, php, cfml, prolog, c, kotlin, ruby, coffeescript, java, typescript, powershell, shell, dart, vb, csharp, cpp, crystal, swift, rust, r, ocaml, groovy, go, elixir, lua, scala, cobol

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-08-26

---

## Kata Description


### Task

You've just moved into a perfectly straight street with exactly ```n``` identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:





--------------------

### Street

```

1|   |6

3|   |4

5|   |2

  you

```



Evens increase on the right; odds decrease on the left. House numbers start at ```1``` and increase without gaps.

When ```n = 3```, ```1``` is opposite ```6```, ```3``` opposite ```4```, and ```5``` opposite ```2```. 



-----------------

### Example (address, n --> output)

Given your house number ```address``` and length of street ```n```, give the house number on the opposite side of the street.



~~~if-not:shell

```

1, 3 --> 6

3, 3 --> 4

2, 3 --> 5

3, 5 --> 8

```

~~~



~~~if:shell

```

over_the_road args: [ address, street ]

over_the_road: [ 1, 3 ] = 6

over_the_road: [ 3, 3 ] = 4

over_the_road: [ 2, 3 ] = 5

over_the_road: [ 3, 5 ] = 8

```

~~~



## Note about errors

If you are timing out, running out of memory, or get any kind of "error", read on.

Both n and address could get upto 500 billion with over 200 random tests. If you try to store the addresses of 500 billion houses in a list then you will run out of memory and the tests will crash. This is not a kata problem so please don't post an issue. Similarly if the tests don't complete within 12 seconds then you also fail. 



To solve this, you need to think of a way to do the kata without making massive lists or huge for loops. Read the discourse for some inspiration :)







---


🏷 `FUNDAMENTALS | MATHEMATICS | PERFORMANCE`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5f0ed36164f2bc00283aed07)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
