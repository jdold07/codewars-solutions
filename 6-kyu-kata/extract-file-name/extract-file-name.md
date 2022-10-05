# 6 kyu - extract file name

##### **ID**: [597770e98b4b340e5b000071](https://www.codewars.com/kata/597770e98b4b340e5b000071) | **Slug**: [extract-file-name](https://www.codewars.com/kata/597770e98b4b340e5b000071) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2017-07-25 ***by*** [Javatlacati](https://www.codewars.com/users/Javatlacati) | **Approved**: 2017-07-29 ***by*** [ZozoFouchtra](https://www.codewars.com/users/ZozoFouchtra)

##### **Languages Available**: java, coffeescript, javascript, php, crystal, ruby, python, kotlin, clojure, csharp

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-09-11

---

## Kata Description


You have to extract a portion of the file name as follows:



* Assume it will start with date represented as long number

* Followed by an underscore

* You'll have then a filename with an extension

* it will always have an extra extension at the end



Inputs:

---

```

1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION



1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34



1231231223123131_myFile.tar.gz2

```



Outputs

---



```

FILE_NAME.EXTENSION



This_is_an_otherExample.mpg



myFile.tar

```



Acceptable characters for random tests:



`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789`



The recommended way to solve it is using RegEx and specifically groups.

---


🏷 `REGULAR EXPRESSIONS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/597770e98b4b340e5b000071)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
