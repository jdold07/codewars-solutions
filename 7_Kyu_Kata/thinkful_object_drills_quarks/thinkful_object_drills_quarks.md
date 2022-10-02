# 7 kyu - Thinkful - Object Drills: Quarks

##### **ID**: [5882b052bdeafec15e0000e6](https://www.codewars.com/kata/5882b052bdeafec15e0000e6) | **Slug**: [thinkful-object-drills-quarks](https://www.codewars.com/kata/5882b052bdeafec15e0000e6) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2017-01-21 ***by*** [Grae-Drake](https://www.codewars.com/users/Grae-Drake) | **Approved**: 2017-06-27 ***by*** [anter69](https://www.codewars.com/users/anter69)

##### **Languages Available**: python, javascript, csharp, factor, rust

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-09-15

---

## Kata Description


## Background



You're modelling the interaction between a large number of quarks and have decided to create a `Quark` class so you can generate your own quark objects.



[Quarks](https://en.wikipedia.org/wiki/Quark) are fundamental particles and the only fundamental particle to experience all four fundamental forces.



## Your task



Your `Quark` class should allow you to create quarks of any valid color (`"red"`, `"blue"`, and `"green"`) and any valid flavor (`'up'`, `'down'`, `'strange'`, `'charm'`, `'top'`, and `'bottom'`).



Every quark has the same `baryon_number` (`BaryonNumber` in `C#`): 1/3.



```if:factor

In Factor, the `<quark>` constructor should be defined. This will be tested to ensure quark objects are initialized correctly.

```



Every quark should have an `.interact()` (`.Interact()` in `C#`) method that allows any quark to interact with another quark via the strong force. When two quarks interact they exchange colors.



## Example



```python

>>> q1 = Quark("red", "up")

>>> q1.color

"red"

>>> q1.flavor

"up"

>>> q2 = Quark("blue", "strange")

>>> q2.color

"blue"

>>> q2.baryon_number

0.3333333333333333

>>> q1.interact(q2)

>>> q1.color

"blue"

>>> q2.color

"red"

```

```csharp

>>> Quark q1 = new Quark("red", "up");

>>> q1.Color;

"red"

>>> Quark q2 = new Quark("blue", "strange");

>>> q2.Color;

"blue"

>>> q2.BaryonNumber;

0.3333333333333333

>>> q1.Interact(q2);

>>> q1.Color;

"blue"

>>> q2.Color;

"red"

```

```factor

[let

  "red" "up" <quark> :> q1

  q1 color>> .  ! "red"

  "blue" "strange" <quark> :> q2

  q2 color>> .  ! "blue"

  q2 baryon-number>> .  ! 1/3

  q1 q2 interact

  q1 color>> .  ! "blue"

  q2 color>> .  ! "red"

]

```

```rust

>>> q1 = Quark::new("red", "up")

>>> q1.color()

"red"

>>> q1.flavor()

"up"

>>> q2 = Quark::new("blue", "strange")

>>> q2.color()

"blue"

>>> q2.baryon_number()

0.3333333333333333_f64

>>> q1.interact(q2)

>>> q1.color

"blue"

>>> q2.color

"red"

```

---


🏷 `FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5882b052bdeafec15e0000e6)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
