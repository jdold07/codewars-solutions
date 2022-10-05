# 8 kyu - Thinkful - Number Drills: Pixelart planning

##### **ID**: [58630e2ae88af44d2b0000ea](https://www.codewars.com/kata/58630e2ae88af44d2b0000ea) | **Slug**: [thinkful-number-drills-pixelart-planning](https://www.codewars.com/kata/58630e2ae88af44d2b0000ea) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2016-12-28 ***by*** [Grae-Drake](https://www.codewars.com/users/Grae-Drake) | **Approved**: 2017-10-24 ***by*** [ZED.CWT](https://www.codewars.com/users/ZED.CWT)

##### **Languages Available**: python, ruby, crystal, javascript, csharp, r, elixir, haskell, java, scala, rust, groovy

##### **My Completed Languages**: python ***as at*** 2022-10-05 | **Originally completed**: 2022-04-26

---

## Kata Description


You're laying out a rad pixel art mural to paint on your living room wall in homage to [Paul Robertson](http://68.media.tumblr.com/0f55f7f3789a354cfcda7c2a64f501d1/tumblr_o7eq3biK9s1qhccbco1_500.png), your favorite pixel artist.



You want your work to be perfect down to the millimeter. You haven't decided on the dimensions of your piece, how large you want your pixels to be, or which wall you want to use. You just know that you want to fit an exact number of pixels.



To help decide those things you've decided to write a function, `is_divisible()` that will tell you whether a wall of a certain length can exactly fit an integer number of pixels of a certain length.



Your function should take two arguments: the size of the wall in millimeters and the size of a pixel in millimeters. It should return `True` if you can fit an exact number of pixels on the wall, otherwise it should return `False`. For example `is_divisible(4050, 27)` should return `True`, but `is_divisible(4066, 27)` should return `False`.

```if:python

Note: you don't need to use an `if` statement here. Remember that in Python an expression using the `==` comparison operator will evaluate to either `True` or `False`:

```

```python

>>> def equals_three(num):

>>>     return num == 3

>>> equals_three(5)

False

>>> equals_three(3)

True

```



<!-- C# Documentation -->

```if:csharp

<h1>Documentation:</h1>

<h2>Kata.IsDivisible Method (Int32, Int32)</h2>



Returns a boolean representing if the first argument is perfectly divisible by the second argument.



<span style="font-size:20px">Syntax</span>

<div style="margin-top:-10px;padding:2px;background-color:Grey;position:relative;left:20px;width:600px;">

  <div style="background-color:White;color:Black;border:1px;display:block;padding:10px;padding-left:18px;font-family:Consolas,Courier,monospace;">

    <span style="color:Blue;">public</span>

    <span style="color:Blue;">static</span>

    <span style="color:Blue;">bool</span> IsDivisible(</br>

    <span style="position:relative;left:62px;">int wallLength,</span></br>

    <span style="position:relative;left:62px;">int pixelSize,</span></br>

    )

  </div>

</div>

</br>

<div style="position:relative;left:20px;">

  **Parameters**

  </br>

  <i>wallLength</i>

  </br>

  <span style="position:relative;left:50px;">Type: <a href="https://msdn.microsoft.com/en-us/library/system.int32(v=vs.110).aspx">System.Int32</a></span></br>

  <span style="position:relative;left:50px;">The length of the wall in millimeters.</span>

  </br></br>

  <i>pixelSize</i>

  </br>

  <span style="position:relative;left:50px;">Type: <a href="https://msdn.microsoft.com/en-us/library/system.int32(v=vs.110).aspx">System.Int32</a></span></br>

  <span style="position:relative;left:50px;">The length of a pixel in millimeters.</span>

  </br></br>

  **Return Value**

  </br>

  <span>Type: <a href="https://msdn.microsoft.com/en-us/library/system.boolean(v=vs.110).aspx">System.Boolean</a></span></br>

  A boolean value representing if the first argument is perfectly divisible by the second.

</div>

```

<!-- End C# Documentation -->

---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/58630e2ae88af44d2b0000ea)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
