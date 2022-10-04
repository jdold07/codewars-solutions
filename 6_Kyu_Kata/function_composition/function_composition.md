# 6 kyu - Function Composition

##### **ID**: [5421c6a2dda52688f6000af8](https://www.codewars.com/kata/5421c6a2dda52688f6000af8) | **Slug**: [function-composition](https://www.codewars.com/kata/5421c6a2dda52688f6000af8) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2014-09-25 ***by*** [user578387](https://www.codewars.com/users/user578387) | **Approved**: 2014-10-07 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: clojure, ruby, python, javascript, coffeescript, lambdacalc

##### **My Completed Languages**: python ***as at*** 2022-10-04 | **Originally completed**: 2022-04-30

---

## Kata Description


__Function composition__ is a mathematical operation that mainly presents itself in lambda calculus and computability. It is explained well [here](http://www.mathsisfun.com/sets/functions-composition.html), but this is my explanation, in simple mathematical notation:



```

f3 = compose( f1 f2 )

   Is equivalent to...

f3(a) = f1( f2( a ) )

```

~~~if-not:lambdacalc,ruby

Your task is to create a `compose` function to carry out this task, which will be passed two functions or lambdas. Ruby functions will be passed, and should return, either a proc or a lambda. Remember that the resulting composed function may be passed multiple arguments!

~~~

~~~if:ruby

Your task is to create a `compose` function to carry out this task, which will be passed two functions, and should return either a proc or a lambda. Remember that the resulting composed function may be passed multiple arguments!

~~~

~~~if:lambdacalc

Your task is to create a `compose` function to carry out this task.

~~~

```javascript

compose(f , g)(x)

=> f( g( x ) )

```

```ruby

compose(f , g).(x)

=> f.( g.( x ) )

```

```coffeescript

compose(f , g)(x)

=> f( g( x ) )

```

```clojure

((compose f  g) x)

=> (f (g x) )

```

```python

compose(f , g)(x)

=> f( g( x ) )

```

```lambdacalc

h = compose f g

h x # f (g x)

```





This kata is not available in haskell; that would be too easy!

---


🏷 `FUNCTIONAL PROGRAMMING | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5421c6a2dda52688f6000af8)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
