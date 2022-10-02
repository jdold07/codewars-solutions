# 6 kyu - Image host filename generator

##### **ID**: [586a933fc66d187b6e00031a](https://www.codewars.com/kata/586a933fc66d187b6e00031a) | **Slug**: [image-host-filename-generator](https://www.codewars.com/kata/586a933fc66d187b6e00031a) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2017-01-02 ***by*** [int3_0xcc](https://www.codewars.com/users/int3_0xcc) | **Approved**: 2017-06-05 ***by*** [Voile](https://www.codewars.com/users/Voile)

##### **Languages Available**: javascript, python, java, cpp

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-09-16

---

## Kata Description


You are developing an image hosting website.



You have to create a function for generating random and unique image filenames.



Create a function for generating a random 6 character string which will be used to access the photo URL. 



To make sure the name is not already in use, you are given access to an PhotoManager object.



You can call it like so to make sure the name is unique



```javascript

// at this point, the website has only one photo, hosted on the 'ABCDEF' url

photoManager.nameExists('ABCDEF'); // returns true

photoManager.nameExists('BBCDEF'); // returns false

```

```java

// at this point, the website has only one photo, hosted on the 'ABCDEF' url

photoManager.nameExists("ABCDEF"); // returns true

photoManager.nameExists("BBCDEF"); // returns false

```

```cpp

// at this point, the website has only one photo, hosted on the 'ABCDEF' url

photoManager.nameExists("ABCDEF"); // returns true

photoManager.nameExists("BBCDEF"); // returns false

```



**Note:** We consider two names with same letters but different cases to be unique.

---


🏷 `LOGIC | OBJECT-ORIENTED PROGRAMMING | STRINGS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/586a933fc66d187b6e00031a)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
