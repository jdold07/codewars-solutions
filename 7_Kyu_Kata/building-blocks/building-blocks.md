# 7 kyu - Building blocks

##### **ID**: [55b75fcf67e558d3750000a3](https://www.codewars.com/kata/55b75fcf67e558d3750000a3) | **Slug**: [building-blocks](https://www.codewars.com/kata/55b75fcf67e558d3750000a3) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2015-07-28 ***by*** [NaMe613](https://www.codewars.com/users/NaMe613) | **Approved**: 2015-08-03 ***by*** [MMMAAANNN](https://www.codewars.com/users/MMMAAANNN)

##### **Languages Available**: python, javascript, haskell, ruby, coffeescript, csharp, java, rust

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-09-10

---

## Kata Description


Write a class `Block` that creates a block (Duh..)



##Requirements



The constructor should take an array as an argument,

this will contain 3 integers of the form `[width, length, height]` from which the `Block` should be created.



Define these methods:



```python

`get_width()` return the width of the `Block`



`get_length()` return the length of the `Block`



`get_height()` return the height of the `Block`



`get_volume()` return the volume of the `Block`



`get_surface_area()` return the surface area of the `Block`

```



```ruby

`get_width()` return the width of the `Block`



`get_length()` return the length of the `Block`



`get_height()` return the height of the `Block`



`get_volume()` return the volume of the `Block`



`get_surface_area()` return the surface area of the `Block`

```

```java

`getWidth()` return the width of the `Block`



`getLength()` return the length of the `Block`



`getHeight()` return the height of the `Block`



`getVolume()` return the volume of the `Block`



`getSurfaceArea()` return the surface area of the `Block`

```

```javascript

`getWidth()` return the width of the `Block`



`getLength()` return the length of the `Block`



`getHeight()` return the height of the `Block`



`getVolume()` return the volume of the `Block`



`getSurfaceArea()` return the surface area of the `Block`

```

```coffeescript

`getWidth()` return the width of the `Block`



`getLength()` return the length of the `Block`



`getHeight()` return the height of the `Block`



`getVolume()` return the volume of the `Block`



`getSurfaceArea()` return the surface area of the `Block`

```

```haskell

`getWidth()` return the width of the `Block`



`getLength()` return the length of the `Block`



`getHeight()` return the height of the `Block`



`getVolume()` return the volume of the `Block`



`getSurfaceArea()` return the surface area of the `Block`

```

```csharp

`GetWidth()` return the width of the `Block`



`GetLength()` return the length of the `Block`



`GetHeight()` return the height of the `Block`



`GetVolume()` return the volume of the `Block`



`GetSurfaceArea()` return the surface area of the `Block`

```

```rust

new -> initialize the `Block` from the provided array of u32



// all the methods must return a u32

get_width() -> width of the `Block`



get_length() -> length of the `Block`



get_height() -> height of the `Block`



get_volume() -> volume of the `Block`



get_surface_area() -> surface area of the `Block`

```



## Examples



```python

    b = Block([2,4,6]) -> create a `Block` object with a width of `2` a length of `4` and a height of `6`

    

    b.get_width() -> return 2

    

    b.get_length() -> return 4

    

    b.get_height() -> return 6

    

    b.get_volume() -> return 48

    

    b.get_surface_area() -> return 88

```

```javascript

    let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`

    b.getWidth() // -> 2

    

    b.getLength() // -> 4

    

    b.getHeight() // -> 6

    

    b.getVolume() // -> 48

    

    b.getSurfaceArea() // -> 88

```

```coffeescript

    b = new Block [2,4,6] #  creates a `Block` object with width of `2`,

                          #  length of `4`, and height of `6`

    b.getWidth()          # 2

    b.getLength()         # 4

    b.getHeight()         # 6

    b.getVolume()         # 48

    b.getSurfaceArea()    # 88

```

```ruby

    b = Block.new([2,4,6]) -> create a `Block` object with a width of `2` a length of `4` and a height of `6`

    

    b.get_width() -> return 2

    

    b.get_length() -> return 4

    

    b.get_height() -> return 6

    

    b.get_volume() -> return 48

    

    b.get_surface_area() -> return 88

```

```haskell

  b = Block([2,4,6]) -> create a `Block` object with a width of `2` a length of `4` and a height of `6`

```

```csharp

    Block b = new Block(new int[]{2,4,6}) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`

    b.GetWidth() // -> 2

    

    b.GetLength() // -> 4

    

    b.GetHeight() // -> 6

    

    b.GetVolume() // -> 48

    

    b.GetSurfaceArea() // -> 88

```

```java

    Block b = new Block(new int[]{2,4,6}) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`

    b.getWidth() // -> 2

    

    b.getLength() // -> 4

    

    b.getHeight() // -> 6

    

    b.getVolume() // -> 48

    

    b.getSurfaceArea() // -> 88

```

```rust

    let b = Block::new(&[2,4,6]) -> create a `Block` object with a width of `2` a length of `4` and a height of `6`

    

    b.get_width() -> return 2

    

    b.get_length() -> return 4

    

    b.get_height() -> return 6

    

    b.get_volume() -> return 48

    

    b.get_surface_area() -> return 88

```



Note: no error checking is needed



Any feedback would be much appreciated



---


🏷 `OBJECT-ORIENTED PROGRAMMING | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/55b75fcf67e558d3750000a3)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
