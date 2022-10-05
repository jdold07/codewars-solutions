# 8 kyu - Convert to Binary

##### **ID**: [59fca81a5712f9fa4700159a](https://www.codewars.com/kata/59fca81a5712f9fa4700159a) | **Slug**: [convert-to-binary](https://www.codewars.com/kata/59fca81a5712f9fa4700159a) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2017-11-03 ***by*** [JapaX](https://www.codewars.com/users/JapaX) | **Approved**: 2017-11-03 ***by*** [ZED.CWT](https://www.codewars.com/users/ZED.CWT)

##### **Languages Available**: javascript, csharp, java, c, nasm, ruby, racket, python

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-09-11

---

## Kata Description


# Task Overview



Given a non-negative integer `n`, write a function `to_binary`/`ToBinary` which returns that number in a binary format.



<!-- C# documentation -->

```if:csharp

<h1>Documentation:</h1>

<h2>Kata.ToBinary Method (Int32)</h2>



Returns the binary representation of a non-negative integer as an integer.



<span style="font-size:20px">Syntax</span>

<div style="margin-top:-10px;padding:2px;background-color:Grey;position:relative;left:20px;width:600px;">

  <div style="background-color:White;color:Black;border:1px;display:block;padding:10px;padding-left:18px;font-family:Consolas,Courier,monospace;">

    <span style="color:Blue;">public</span>

    <span style="color:Blue;">static</span>

    <span style="color:Blue;">int</span> ToBinary(</br>

    <span style="position:relative;left:62px;">int n</span></br>

    )

  </div>

</div>

</br>

<div style="position:relative;left:20px;">

  **Parameters**

  </br>

  <i>n</i>

  </br>

  <span style="position:relative;left:50px;">Type: <a href="https://msdn.microsoft.com/en-us/library/system.int32(v=vs.110).aspx">System.Int32</a></span></br>

  <span style="position:relative;left:50px;">The integer to convert.</span>

  </br></br>

  **Return Value**

  </br>

  <span>Type: <a href="https://msdn.microsoft.com/en-us/library/system.int32(v=vs.110).aspx">System.Int32</a></span></br>

  The binary representation of the argument as an integer.

</div>

```

<!-- end C# documentation -->



<!-- C -->

```if:c

Example:

```

```c

to_binary(1)  /* should return 1 */

to_binary(5)  /* should return 101 */

to_binary(11) /* should return 1011 */

```

<!-- end of C -->



<!-- Javascript-->

```if:javascript

Example:

```

```javascript

toBinary(1)  /* should return 1 */

toBinary(5)  /* should return 101 */

toBinary(11) /* should return 1011 */

```

<!-- end of Javascript -->



<!-- NASM -->

```if:nasm

Example:

```

```nasm

mov di, 1

call to_binary    ; RAX <- 1



mov di, 5

call to_binary    ; RAX <- 101



mov di, 11

call to_binary    ; RAX <- 1011

```

<!-- end of NASM -->



<!-- Python -->

```if:Python

Example:

```

```python

to_binary(1)  # should return 1 

to_binary(5)  # should return 101

to_binary(11) # should return 1011

```

<!-- end of Python -->



<!-- Ruby-->

```if:ruby

Example:

```

```ruby

to_binary(1)  # should return 1

to_binary(5)  # should return 101

to_binary(11) # should return 1011

```

<!-- end of Ruby -->



<!-- Racket-->

```racket

(->binary 1)  ; 1

(->binary 5)  ; 101

(->binary 11) ; 1011

```

<!-- end of Racket -->





---


🏷 `MATHEMATICS | ALGORITHMS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/59fca81a5712f9fa4700159a)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
