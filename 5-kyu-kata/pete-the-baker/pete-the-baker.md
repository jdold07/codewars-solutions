# 5 kyu - Pete, the baker

##### **ID**: [525c65e51bf619685c000059](https://www.codewars.com/kata/525c65e51bf619685c000059) | **Slug**: [pete-the-baker](https://www.codewars.com/kata/525c65e51bf619685c000059) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">5 kyu</span>

##### **First Published**: 2013-10-14 ***by*** [BattleRattle](https://www.codewars.com/users/BattleRattle) | **Approved**: *not available* ***by*** [*not available*](*https://www.codewars.com*)

##### **Languages Available**: javascript, haskell, coffeescript, python, ruby, go, factor

##### **My Completed Languages**: python ***as at*** 2022-10-05 | **Originally completed**: 2022-05-02

---

## Kata Description


Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?



~~~if-not:factor

Write a function `cakes()`, which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

~~~

~~~if:factor

Write a word `cakes`, which takes a recipe (assoc) and the available ingredients (also an assoc) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients for the recipe that are not present can be considered as 0.

~~~



Examples:



```javascript

// must return 2

cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 

// must return 0

cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

```

```coffeescript

# must return 2

cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}) 

# must return 0

cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}) 

```

```python

# must return 2

cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})

# must return 0

cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})

```

```haskell

cakes [("flour",500), ("sugar",200), ("eggs",1)] [("flour",1200), ("sugar",1200), ("eggs",5), ("milk",200)]  `shouldBe` 2

cakes [("apples",3), ("flour",300), ("sugar",150), ("milk",100), ("oil",100)] [("sugar",500), ("flour",2000), ("milk",2000)] `shouldBe` 0

```

```factor

{ { "flour" 500 } { "sugar" 200 } { "eggs" 1 } } { { "flour" 1200 } { "sugar" 1200 } { "eggs" 5 } { "milk" 200 } } cakes ->  2

{ { "apples" 3 } { "flour" 300 } { "sugar" 150 } { "milk" 100 } { "oil" 100 } } { { "sugar" 500 } { "flour" 2000 } { "milk" 2000 } } cakes -> 0

```

---


🏷 `ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/525c65e51bf619685c000059)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
