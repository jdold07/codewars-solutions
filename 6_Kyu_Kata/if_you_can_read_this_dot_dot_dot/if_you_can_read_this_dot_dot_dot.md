# 6 kyu - If you can read this...

##### **ID**: [586538146b56991861000293](https://www.codewars.com/kata/586538146b56991861000293) | **Slug**: [if-you-can-read-this-dot-dot-dot](https://www.codewars.com/kata/586538146b56991861000293) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2016-12-29 ***by*** [henryhamon](https://www.codewars.com/users/henryhamon) | **Approved**: 2017-01-07 ***by*** [user5036852](https://www.codewars.com/users/user5036852)

##### **Languages Available**: ruby, javascript, php, python, crystal, go, coffeescript, swift, rust, c

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-08-25

---

## Kata Description


The idea for this kata came from 9gag today:



[![The lyrics to "Never gonna give you up" by Rick Astley encoded in the NATO phonetic alphabet](https://9gag.com/photo/amrb4r9_700b.jpg)](http://9gag.com/gag/amrb4r9)



## Task 



You'll have to translate a string to Pilot's alphabet ([NATO phonetic alphabet](https://en.wikipedia.org/wiki/NATO_phonetic_alphabet)).



**Input:**



`If, you can read?`



**Output:**



`India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?`



**Note:**



* There are preloaded dictionary you can use, named `NATO`

* The set of used punctuation is `,.!?`.

* Punctuation should be kept in your return string, but spaces should not.

* __Xray__ should not have a dash within.

* Every word and punctuation mark should be seperated by a space ' '.

* There should be no trailing whitespace



~~~if:php

<span style="color:red">Although the proper alphabet for j is </span>`Juliett`<span style="color:red"> you have to use </span>`Juliet`<span style="color:red"> here</span>

~~~



~~~if:rust

The NATO phonetic alphabet (A–Z) is preloaded:



```rust

use preloaded::NATO;



NATO[&'R']; // Romeo

NATO[&'U']; // Uniform

NATO[&'S']; // Sierra

NATO[&'T']; // Tango

```



<details>

<summary>Click to see the preloaded code</summary>



```rust

use std::collections::HashMap;

use once_cell::sync::Lazy;



#[rustfmt::skip]

pub static NATO: Lazy<HashMap<char, &'static str>> = Lazy::new(|| {

    [

        ('A', "Alfa"), ('B', "Bravo"), ('C', "Charlie"), ('D', "Delta"),

        ('E', "Echo"), ('F', "Foxtrot"), ('G', "Golf"), ('H', "Hotel"),

        ('I', "India"), ('J', "Juliett"), ('K', "Kilo"), ('L', "Lima"),

        ('M', "Mike"), ('N', "November"), ('O', "Oscar"), ('P', "Papa"),

        ('Q', "Quebec"), ('R', "Romeo"), ('S', "Sierra"), ('T', "Tango"),

        ('U', "Uniform"), ('V', "Victor"), ('W', "Whiskey"), ('X', "Xray"),

        ('Y', "Yankee"), ('Z', "Zulu"),

    ]

    .iter()

    .copied()

    .collect()       

});

```



</details>

~~~

---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/586538146b56991861000293)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
