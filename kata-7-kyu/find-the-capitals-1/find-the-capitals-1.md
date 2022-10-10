# 7 kyu - Find the capitals

##### **ID**: [539ee3b6757843632d00026b](https://www.codewars.com/kata/539ee3b6757843632d00026b) | **Slug**: [find-the-capitals-1](https://www.codewars.com/kata/539ee3b6757843632d00026b) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2014-06-16 ***by*** [ankr](https://www.codewars.com/users/ankr) | **Approved**: 2014-06-29 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, coffeescript, python, haskell, csharp, c

##### **My Completed Languages**: python ***as at*** 2022-10-08 | **Originally completed**: 2022-04-23

---

## Kata Description


# Instructions 



Write a function that takes a single string (`word`) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.



# Example



```javascript

Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

```

```ruby

Test.assert_equals( capitals('CodEWaRs'), [0,3,4,6] );

```

```haskell

capitals ""         `shouldBe` []

capitals "CodEWaRs" `shouldBe` [0,3,4,6]

capitals "aAbB"     `shouldBe` [1,3]

capitals "4ysdf4"   `shouldBe` []

capitals "ABCDEF"   `shouldBe` [0..5]

```

```csharp

Assert.AreEqual(Kata.Capitals("CodEWaRs"), new int[]{0,3,4,6});

```

---


🏷 `STRINGS | ARRAYS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/539ee3b6757843632d00026b)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
