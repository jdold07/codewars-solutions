# 8 kyu - Sleigh Authentication

##### **ID**: [52adc142b2651f25a8000643](https://www.codewars.com/kata/52adc142b2651f25a8000643) | **Slug**: [sleigh-authentication](https://www.codewars.com/kata/52adc142b2651f25a8000643) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2013-12-15 **_by_** [BattleRattle](https://www.codewars.com/users/BattleRattle) | **Approved**: 2013-12-16 **_by_** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, coffeescript, ruby, python, haskell, elixir, csharp, java

##### **My Completed Languages**: javascript **_as at_** 2022-10-08 | **Originally completed**: 2022-08-25

---

## Kata Description

Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.

Your task is to implement the `authenticate()` method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" _(yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D)_, the return value must be `true`. Otherwise it should return `false`.

Examples:

```javascript
let sleigh = new Sleigh()

sleigh.authenticate("Santa Claus", "Ho Ho Ho!") // must return TRUE

sleigh.authenticate("Santa", "Ho Ho Ho!") // must return FALSE

sleigh.authenticate("Santa Claus", "Ho Ho!") // must return FALSE

sleigh.authenticate("jhoffner", "CodeWars") // Nope, even Jake is not allowed to use the sleigh ;)
```

```python

sleigh = Sleigh()

sleigh.authenticate('Santa Claus', 'Ho Ho Ho!') # must return True



sleigh.authenticate('Santa', 'Ho Ho Ho!') # must return False

sleigh.authenticate('Santa Claus', 'Ho Ho!') # must return False

sleigh.authenticate('jhoffner', 'CodeWars') # Nope, even Jake is not allowed to use the sleigh ;)

```

```haskell

authenticate "Santa Claus" "Ho Ho Ho!" -- True

authenticate "Santa"       "Ho Ho Ho!" -- False

authenticate "Santa Claus" "Ho Ho!"    -- False

authenticate "jhoffner"    "CodeWars"  -- False

```

```elixir

authenticate? "Santa Claus", "Ho Ho Ho!" #=> true

authenticate? "Santa",       "Ho Ho Ho!" #=> false

authenticate? "Santa Claus", "Ho Ho!"    #=> false

authenticate? "jhoffner",    "CodeWars"  #=> false

```

```java

sleigh.authenticate("Santa Claus", "Ho Ho Ho!") # must return True

sleigh.authenticate("Santa', 'Ho Ho Ho!") # must return False

sleigh.authenticate("Santa Claus", "Ho Ho!") # must return False

sleigh.authenticate("jhoffner", "CodeWars") # Nope, even Jak

```

---

🏷 `FUNDAMENTALS`

[View this Kata on Codewars.com](https://www.codewars.com/kata/52adc142b2651f25a8000643)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### _This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API. The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file. Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution. My solutions are not always commented as the solutions are rarely submitted with comments._
