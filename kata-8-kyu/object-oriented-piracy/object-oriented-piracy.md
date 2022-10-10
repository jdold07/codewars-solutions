# 8 kyu - Object Oriented Piracy

##### **ID**: [54fe05c4762e2e3047000add](https://www.codewars.com/kata/54fe05c4762e2e3047000add) | **Slug**: [object-oriented-piracy](https://www.codewars.com/kata/54fe05c4762e2e3047000add) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2015-03-09 **_by_** [By-The-Ocean](https://www.codewars.com/users/By-The-Ocean) | **Approved**: 2015-03-17 **_by_** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, python, ruby, csharp, rust

##### **My Completed Languages**: javascript **_as at_** 2022-10-08 | **Originally completed**: 2022-08-27

---

## Kata Description

Ahoy matey!

You are a leader of a small pirate crew. And you have a plan.

With the help of OOP you wish to make a pretty efficient system to identify ships with a heavy booty on board.

Unfortunattely for you, people weigh a lot this days, so how do you know if a ship if full of gold and not people?

You begin with writing a generic Ship class / struct:

```javascript
function Ship(draft, crew) {
  this.draft = draft

  this.crew = crew
}
```

```python

class Ship:

    def __init__(self, draft, crew):

        self.draft = draft

        self.crew = crew

```

```csharp

public class Ship

{

  public int Draft;

  public int Crew;



  public Ship(int draft, int crew)

  {

    Draft = draft;

    Crew = crew;

  }

}

```

```rust

struct Ship {

  draft: u32,

  crew: u32,

}

```

Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

- draft - an estimate of the ship's weight based on how low it is in the water

- crew - the count of crew on board

```javascript
let titanic = new Ship(15, 10)
```

```python

Titanic = Ship(15, 10)

```

```csharp

Ship titanic = new Ship(15, 10);

```

```rust

  let titanic = Ship {

      draft : 15,

      crew : 10,

  };

```

Taking into account that an average crew member on board adds `1.5` units to the draft, a ship that has a draft of more than `20` without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!

Add the method

```javascript
isWorthIt
```

```python

is_worth_it

```

```rust

is_worth_it(&self)

```

```csharp

IsWorthIt

```

to decide if the ship is worthy to loot. For example:

```javascript
titanic.isWorthIt() // return false
```

```python

Titanic.is_worth_it()

False

```

```csharp

titanic.IsWorthIt() => false

```

```rust

titanic.is_worth_it() -> false

```

This Kata teaches you the very basic of method creation.

Good luck!

---

🏷 `OBJECT-ORIENTED PROGRAMMING | FUNDAMENTALS`

[View this Kata on Codewars.com](https://www.codewars.com/kata/54fe05c4762e2e3047000add)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### _This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API. The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file. Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution. My solutions are not always commented as the solutions are rarely submitted with comments._
