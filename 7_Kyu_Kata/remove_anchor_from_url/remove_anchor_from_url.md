# 7 kyu - Remove anchor from URL

##### **ID**: [51f2b4448cadf20ed0000386](https://www.codewars.com/kata/51f2b4448cadf20ed0000386) | **Slug**: [remove-anchor-from-url](https://www.codewars.com/kata/51f2b4448cadf20ed0000386) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2013-07-26 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner) | **Approved**: *not available* ***by*** [*not available*](*https://www.codewars.com*)

##### **Languages Available**: javascript, coffeescript, ruby, python, shell, csharp, php, lua, haskell, c, nasm, clojure, cpp

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-06-12

---

## Kata Description


Complete the function/method so that it returns the url with anything after the anchor (`#`) removed. 



## Examples



~~~if-not:nasm

```

"www.codewars.com#about" --> "www.codewars.com"

"www.codewars.com?page=1" -->"www.codewars.com?page=1"

```

~~~



~~~if:nasm

```

url1:  db    `www.codewars.com#about\0`

url2:  db    `www.codewars.com?page=1\0`

    

    mov rdi, url1

    call rmurlahr    ; RAX <- `www.codewars.com\0`

    

    mov rdi, url2

    call rmurlahr    ; RAX <- `www.codewars.com?page=1\0`

```

~~~



---


🏷 `REGULAR EXPRESSIONS | STRINGS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/51f2b4448cadf20ed0000386)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
