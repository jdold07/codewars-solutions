# 7 kyu - Alphabet symmetry

##### **ID**: [59d9ff9f7905dfeed50000b0](https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0) | **Slug**: [alphabet-symmetry](https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2017-10-08 ***by*** [KenKamau](https://www.codewars.com/users/KenKamau) | **Approved**: 2017-10-09 ***by*** [arhigod](https://www.codewars.com/users/arhigod)

##### **Languages Available**: python, javascript, lua, csharp, ruby, haskell, crystal, cpp, fortran, coffeescript, dart, php, typescript, go, java, rust, prolog, clojure, julia, nim, c

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-09-09

---

## Kata Description


Consider the word `"abode"`. We can see that the letter `a` is in position `1` and `b` is in position `2`. In the alphabet, `a` and `b` are also in positions `1` and `2`. Notice also that `d` and `e` in `abode` occupy the positions they would occupy in the alphabet, which are positions `4` and `5`. 



Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

```

solve(["abode","ABc","xyzD"]) = [4, 3, 1]

```

See test cases for more examples.



Input will consist of alphabet characters, both uppercase and lowercase. No spaces.



Good luck!



If you like this Kata, please try: 



[Last digit symmetry](https://www.codewars.com/kata/59a9466f589d2af4c50001d8)



[Alternate capitalization](https://www.codewars.com/kata/59cfc000aeb2844d16000075)



~~~if:fortran

## Fortran-Specific Notes



Due to how strings and arrays work in Fortran, some of the strings in the input array will inevitably contain trailing whitespace.  **For this reason, please [trim](https://gcc.gnu.org/onlinedocs/gcc-4.3.4/gfortran/TRIM.html) your input strings before processing them.**

~~~

---


🏷 `STRINGS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
