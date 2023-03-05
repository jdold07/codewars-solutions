# 4 kyu - Strip Comments

##### **ID**: [51c8e37cee245da6b40000bd](https://www.codewars.com/kata/51c8e37cee245da6b40000bd) | **Slug**: [strip-comments](https://www.codewars.com/kata/51c8e37cee245da6b40000bd) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:blue">4 kyu</span>

##### **First Published**: 2013-06-25 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner) | **Approved**: *not available* ***by*** [*not available*](*https://www.codewars.com*)

##### **Languages Available**: javascript, coffeescript, ruby, python, java, clojure, kotlin, csharp, crystal, julia, vb, factor

##### **My Completed Languages**: javascript ***as at*** 2023-03-05 | **Originally completed**: 2023-03-04

---

## Kata Description


Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out. 



**Example:**



Given an input string of:

```

apples, pears # and bananas

grapes

bananas !apples

```



The output expected would be:

```

apples, pears

grapes

bananas

```



The code would be called like so:



```javascript

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])

// result should == "apples, pears\ngrapes\nbananas"



```



```kotlin

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", charArrayOf('#', '!'))

// result should == "apples, pears\ngrapes\nbananas"



```



```coffeescript

result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])

# result should == "apples, pears\nograpes\nbananas"



```



```ruby

result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])

# result should == "apples, pears\ngrapes\nbananas"



```



```crystal

result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])

# result should == "apples, pears\ngrapes\nbananas"



```



```python

result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])

# result should == "apples, pears\ngrapes\nbananas"



```



```csharp

string stripped = StripCommentsSolution.StripComments("apples, pears # and bananas\ngrapes\nbananas !apples", new [] { "#", "!" })

// result should == "apples, pears\ngrapes\nbananas"

```



```julia

result = stripcomments("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])

# result should == "apples, pears\ngrapes\nbananas"

```



```factor

"apples, pears # and bananas\ngrapes\nbananas !apples"

"#!"

strip-comments ! "apples, pears\ngrapes\nbananas"

```

---


🏷 `STRINGS | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/51c8e37cee245da6b40000bd)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
