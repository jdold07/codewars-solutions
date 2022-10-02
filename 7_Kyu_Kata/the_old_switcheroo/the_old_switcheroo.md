# 7 kyu - The old switcheroo

##### **ID**: [55d410c492e6ed767000004f](https://www.codewars.com/kata/55d410c492e6ed767000004f) | **Slug**: [the-old-switcheroo](https://www.codewars.com/kata/55d410c492e6ed767000004f) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2015-08-19 ***by*** [joh_pot](https://www.codewars.com/users/joh_pot) | **Approved**: 2015-09-01 ***by*** [g964](https://www.codewars.com/users/g964)

##### **Languages Available**: javascript, csharp, coffeescript, python, ruby, java, haskell, julia

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-08-31

---

## Kata Description


Write a function 



```javascript

vowel2index(str)

```

```coffeescript

vowel2index(str)

```

```python

vowel_2_index

```

```ruby

vowel_2_index

```

```csharp

Vowel2Index(string s)

  ```

```java

vowel2Index(String s)

```

```julia

vowel2index(str::String)::String

```



that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string. <br/>

E.g: <br/>



```javascript

vowel2index('this is my string') == 'th3s 6s my str15ng'

vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'

vowel2index('') == ''

```

```python

vowel_2_index('this is my string') == 'th3s 6s my str15ng'

vowel_2_index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'

vowel_2_index('') == ''

```

```ruby

vowel_2_index('this is my string') == 'th3s 6s my str15ng'

vowel_2_index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'

vowel_2_index('') == ''

```

```coffeescript

vowel2index 'this is my string' == 'th3s 6s my str15ng'

vowel2index 'Codewars is the best site in the world' == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'

vowel2index '' == ''

```

```csharp

Kata.Vowel2Index("this is my string") == "th3s 6s my str15ng"

Kata.Vowel2Index("Codewars is the best site in the world") == "C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld"

```

```java

Kata.Vowel2Index("this is my string") == "th3s 6s my str15ng"

Kata.Vowel2Index("Codewars is the best site in the world") == "C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld"

```

```haskell

vowel2Index "this is my string"  == "th3s 6s my str15ng"

vowel2Index "Codewars is the best site in the world"  == "C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld"

```

```julia

vowel2index("this is my string") == "th3s 6s my str15ng"

vowel2index("Codewars is the best site in the world") == "C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld"

```

<b> Your function should be case insensitive to the vowels.



---


🏷 `STRINGS | REGULAR EXPRESSIONS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/55d410c492e6ed767000004f)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
