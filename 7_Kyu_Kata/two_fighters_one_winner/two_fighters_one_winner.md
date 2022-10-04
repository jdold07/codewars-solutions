# 7 kyu - Two fighters, one winner.

##### **ID**: [577bd8d4ae2807c64b00045b](https://www.codewars.com/kata/577bd8d4ae2807c64b00045b) | **Slug**: [two-fighters-one-winner](https://www.codewars.com/kata/577bd8d4ae2807c64b00045b) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2016-07-05 ***by*** [Scopula](https://www.codewars.com/users/Scopula) | **Approved**: 2016-08-03 ***by*** [suic](https://www.codewars.com/users/suic)

##### **Languages Available**: python, javascript, java, csharp, clojure, cpp, go

##### **My Completed Languages**: python ***as at*** 2022-10-04 | **Originally completed**: 2022-04-22

---

## Kata Description


Create a function that returns the name of the winner in a fight between two fighters.



Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having `health <= 0`.



Each fighter will be a `Fighter` object/instance. See the Fighter class below in your chosen language.



Both `health` and `damagePerAttack` (`damage_per_attack` for python) will be integers larger than `0`. You can mutate the `Fighter` objects.



## Example:

```

  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

  

  Lew attacks Harry; Harry now has 3 health.

  Harry attacks Lew; Lew now has 6 health.

  Lew attacks Harry; Harry now has 1 health.

  Harry attacks Lew; Lew now has 2 health.

  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

```



```javascript

function Fighter(name, health, damagePerAttack) {

		this.name = name;

		this.health = health;

		this.damagePerAttack = damagePerAttack;

		this.toString = function() { return this.name; }

}

```

```python

class Fighter(object):

    def __init__(self, name, health, damage_per_attack):

        self.name = name

        self.health = health

        self.damage_per_attack = damage_per_attack

        

    def __str__(self): return "Fighter({}, {}, {})".format(self.name, self.health, self.damage_per_attack)

    __repr__=__str__

```

```java

public class Fighter {

  public String name;

  public int health, damagePerAttack;

  public Fighter(String name, int health, int damagePerAttack) {

    this.name = name;

    this.health = health;

    this.damagePerAttack = damagePerAttack;

  }

}

```

```csharp

public class Fighter {

  public string Name;

  public int Health, DamagePerAttack;

  public Fighter(string name, int health, int damagePerAttack) {

    this.Name = name;

    this.Health = health;

    this.DamagePerAttack = damagePerAttack;

  }

}

```

```clojure

Technical note: The second fighter argument (f2) always attacks first.



(defrecord Fighter [name hp attack])

```

```cpp

class Fighter

{

private:

    std::string name;

    

    int health;

    

    int damagePerAttack;



public:

    Fighter(std::string name, int health, int damagePerAttack)

    {

        this->name = name;

        this->health = health;

        this->damagePerAttack = damagePerAttack;

    }

    

    ~Fighter() { };

    

    std::string getName()

    {

        return name;

    }

    

    int getHealth()

    {

        return health;

    }

    

    int getDamagePerAttack()

    {

        return damagePerAttack;

    }

    

    void setHealth(int value)

    {

        health = value;

    }

};

```

```go

type Fighter struct {

	Name            string

	Health          int

	DamagePerAttack int

}

```



---


🏷 `GAMES | ALGORITHMS | LOGIC | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/577bd8d4ae2807c64b00045b)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
