# 6 kyu - Triple trouble

##### **ID**: [55d5434f269c0c3f1b000058](https://www.codewars.com/kata/55d5434f269c0c3f1b000058) | **Slug**: [triple-trouble-1](https://www.codewars.com/kata/55d5434f269c0c3f1b000058) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-08-20 ***by*** [joh_pot](https://www.codewars.com/users/joh_pot) | **Approved**: 2015-09-05 ***by*** [g964](https://www.codewars.com/users/g964)

##### **Languages Available**: javascript, csharp, python, ruby, java, scala

##### **My Completed Languages**: python ***as at*** 2022-10-08 | **Originally completed**: 2022-04-29

---

## Kata Description


Write a function 

```csharp

TripleDouble(long num1, long num2)

```

```java

TripleDouble(long num1, long num2)

```

```javascript 

tripledouble(num1,num2)

```

```python

triple_double(num1, num2)

```

```ruby

triple_double(num1, num2)

```

```scala

tripleDouble(num1: Long, num2: Long): Int

```

which takes numbers `num1` and `num2` and returns `1` if there is a straight triple of a number at any place in `num1` and also a straight double of the **same** number in `num2`.



If this isn't the case, return `0`





## Examples



```javascript

tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 

                                          // num2 has straight double 99s



tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2



tripledouble(12345, 12345) == 0



tripledouble(666789, 12345667) == 1

```



```csharp

TripleDouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 

                                          // num2 has straight double 99s



TripleDouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2



TripleDouble(12345, 12345) == 0



TripleDouble(666789, 12345667) == 1

```



```java

TripleDouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 

                                          // num2 has straight double 99s



TripleDouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2



TripleDouble(12345, 12345) == 0



TripleDouble(666789, 12345667) == 1

```



```python

triple_double(451999277, 41177722899) == 1

# num1 has straight triple 999s and num2 has straight double 99s



triple_double(1222345, 12345) == 0

# num1 has straight triple 2s but num2 has only a single 2



triple_double(12345, 12345) == 0



triple_double(666789, 12345667) == 1

```



```ruby

triple_double(451999277, 41177722899) == 1

# num1 has straight triple 999s and  num2 has straight double 99s



triple_double(1222345, 12345) == 0

# num1 has straight triple 2s but num2 has only a single 2



triple_double(12345, 12345) == 0



triple_double(666789, 12345667) == 1

```



```scala

// num1 has straight triple 999s and num2 has straight double 99s

tripleDouble(451999277, 41177722899) == 1



// num1 has straight triple 2s but num2 has only a single 2:

tripleDouble(1222345, 12345) == 0



tripleDouble(12345, 12345) == 0



tripleDouble(666789, 12345667) == 1

```

---


🏷 `ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/55d5434f269c0c3f1b000058)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
