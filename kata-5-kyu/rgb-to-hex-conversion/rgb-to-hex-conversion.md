# 5 kyu - RGB To Hex Conversion

##### **ID**: [513e08acc600c94f01000001](https://www.codewars.com/kata/513e08acc600c94f01000001) | **Slug**: [rgb-to-hex-conversion](https://www.codewars.com/kata/513e08acc600c94f01000001) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">5 kyu</span>

##### **First Published**: 2013-03-13 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner) | **Approved**: *not available* ***by*** [*not available*](*https://www.codewars.com*)

##### **Languages Available**: javascript, coffeescript, ruby, python, csharp, cpp, r, dart, fsharp, c, swift, nasm, lua, julia, kotlin, scala, rust, php, elixir, racket, clojure, factor, go, java, typescript

##### **My Completed Languages**: javascript, python, swift, coffeescript, typescript ***as at*** 2023-03-05 | **Originally completed**: 2021-11-28

---

## Kata Description


The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.



Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.



The following are examples of  expected output values:

```lua

kata.rgb(255, 255, 255) -- returns FFFFFF

kata.rgb(255, 255, 300) -- returns FFFFFF

kata.rgb(0, 0, 0) -- returns 000000

kata.rgb(148, 0, 211) -- returns 9400D3

```

```javascript

rgb(255, 255, 255) // returns FFFFFF

rgb(255, 255, 300) // returns FFFFFF

rgb(0,0,0) // returns 000000

rgb(148, 0, 211) // returns 9400D3

```

```typescript

rgb(255, 255, 255) // returns FFFFFF

rgb(255, 255, 300) // returns FFFFFF

rgb(0,0,0) // returns 000000

rgb(148, 0, 211) // returns 9400D3

```

```coffeescript

rgb(255, 255, 255) # returns FFFFFF

rgb(255, 255, 300) # returns FFFFFF

rgb(0,0,0) # returns 000000

rgb(148, 0, 211) # returns 9400D3

```

```ruby

rgb(255, 255, 255) # returns FFFFFF

rgb(255, 255, 300) # returns FFFFFF

rgb(0,0,0) # returns 000000

rgb(148, 0, 211) # returns 9400D3

```

```python

rgb(255, 255, 255) # returns FFFFFF

rgb(255, 255, 300) # returns FFFFFF

rgb(0,0,0) # returns 000000

rgb(148, 0, 211) # returns 9400D3

```

```elixir

Kata.rgb(255, 255, 255) # returns FFFFFF

Kata.rgb(255, 255, 300) # returns FFFFFF

Kata.rgb(0,0,0) # returns 000000

Kata.rgb(148, 0, 211) # returns 9400D3

```

```csharp

Rgb(255, 255, 255) # returns FFFFFF

Rgb(255, 255, 300) # returns FFFFFF

Rgb(0,0,0) # returns 000000

Rgb(148, 0, 211) # returns 9400D3

```

```fsharp

rgb 255  255  255 // returns FFFFFF

rgb 255  255  300 // returns FFFFFF

rgb 0 0 0 // returns 000000

rgb 148  0  211 // returns 9400D3

```

```c

char output[7] = {0};



rgb(255, 255, 255, output); 

output == "FFFFFF";



rgb(255, 255, 300, output); 

output == "FFFFFF";



rgb(0, 0, 0, output); 

output == "000000";



rgb(148, 0, 211, output);

output == "9400D3";

```

```cpp

rgb(255, 255, 255) # returns FFFFFF

rgb(255, 255, 300) # returns FFFFFF

rgb(0,0,0) # returns 000000

rgb(148, 0, 211) # returns 9400D3

```

```r

rgb(255, 255, 255)

[1] "FFFFFF"



rgb(255, 255, 300)

[1] "FFFFFF"



rgb(0, 0, 0)

[1] "000000"



rgb(148, 0, 211)

[1] "9400D3"

```

```dart

rgb(255, 255, 255) // returns FFFFFF

rgb(255, 255, 300) // returns FFFFFF

rgb(0, 0, 0)       // returns 000000

rgb(148, 0, 211)   // returns 9400D3

```

```java

RgbToHex.rgb(255, 255, 255) // returns FFFFFF

RgbToHex.rgb(255, 255, 300) // returns FFFFFF

RgbToHex.rgb(0, 0, 0)       // returns 000000

RgbToHex.rgb(148, 0, 211)   // returns 9400D3

```

```nasm

mov edi, 255

mov esi, 255

mov edx, 255

mov rcx, outp

call rgb        ; The string in outp should be "FFFFFF"



mov edi, 255

mov esi, 255

mov edx, 300

mov rcx, outp

call rgb        ; The string in outp should be "FFFFFF"



mov edi, 0

mov esi, 0

mov edx, 0

mov rcx, outp

call rgb        ; The string in outp should be "000000"



mov edi, 148

mov esi,   0

mov edx, 211

mov rcx, outp

call rgb        ; The string in outp should be "9400D3"



The function should return the address of the string

```

```julia

rgb(255, 255, 255) # returns FFFFFF

rgb(255, 255, 300) # returns FFFFFF

rgb(0, 0, 0) # returns 000000

rgb(148, 0, 211) # returns 9400D3

```

```kotlin

rgb(255, 255, 255) // returns FFFFFF

rgb(255, 255, 300) // returns FFFFFF

rgb(0, 0, 0) // returns 000000

rgb(148, 0, 211) // returns 9400D3

```

```racket

(rgb 255 255 255) ;; returns FFFFFF

(rgb 255 255 300) ;; returns FFFFFF

(rgb 0 0 0) ;; returns 000000

(rgb 148 0 211) ;; returns 9400D3

```

```scala

rgb(255, 255, 255) // FFFFFF

rgb(255, 255, 300) // FFFFFF

rgb(0, 0, 0)       // 000000

rgb(148, 0, 211)   // 9400D3

```

```php

rgb(255, 255, 255); // returns FFFFFF

rgb(255, 255, 300); // returns FFFFFF

rgb(0, 0, 0); // returns 000000

rgb(148, 0, 211); // returns 9400D3

```

```clojure

(rgb 255 255 255) ;; returns FFFFFF

(rgb 255 255 300) ;; returns FFFFFF

(rgb 0 0 0) ;; returns 000000

(rgb 148 0 211) ;; returns 9400D3

```

```factor

255 255 255 rgb ! returns FFFFFF

255 255 300 rgb ! returns FFFFFF

0 0 0 rgb ! returns 000000

148 0 211 rgb ! returns 9400D3

```



---


🏷 `ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/513e08acc600c94f01000001)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
