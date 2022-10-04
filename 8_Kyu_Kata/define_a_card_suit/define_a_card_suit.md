# 8 kyu - Define a card suit

##### **ID**: [5a360620f28b82a711000047](https://www.codewars.com/kata/5a360620f28b82a711000047) | **Slug**: [define-a-card-suit](https://www.codewars.com/kata/5a360620f28b82a711000047) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2017-12-17 ***by*** [Dmitry Kudla](https://www.codewars.com/users/Dmitry%20Kudla) | **Approved**: 2017-12-17 ***by*** [JohanWiltink](https://www.codewars.com/users/JohanWiltink)

##### **Languages Available**: javascript, ruby, python, csharp, c, lua

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-08-25

---

## Kata Description


You get any card as an argument. Your task is to return the suit of this card (in lowercase).



Our deck (is preloaded):

```javascript,c

deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',

        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',

        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',

        '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];

```

```ruby

DECK = ['2S','3S','4S','5S','6S','7S','8S','9S','10S','JS','QS','KS','AS',

        '2D','3D','4D','5D','6D','7D','8D','9D','10D','JD','QD','KD','AD',

        '2H','3H','4H','5H','6H','7H','8H','9H','10H','JH','QH','KH','AH',

        '2C','3C','4C','5C','6C','7C','8C','9C','10C','JC','QC','KC','AC']

```

```python

DECK = ['2S','3S','4S','5S','6S','7S','8S','9S','10S','JS','QS','KS','AS',

        '2D','3D','4D','5D','6D','7D','8D','9D','10D','JD','QD','KD','AD',

        '2H','3H','4H','5H','6H','7H','8H','9H','10H','JH','QH','KH','AH',

        '2C','3C','4C','5C','6C','7C','8C','9C','10C','JC','QC','KC','AC']

```

```csharp

string[] Deck =

{

    "2♣", "3♣", "4♣", "5♣", "6♣", "7♣", "8♣", "9♣", "10♣", "J♣", "Q♣", "K♣", "A♣",

    "2♦", "3♦", "4♦", "5♦", "6♦", "7♦", "8♦", "9♦", "10♦", "J♦", "Q♦", "K♦", "A♦",

    "2♥", "3♥", "4♥", "5♥", "6♥", "7♥", "8♥", "9♥", "10♥", "J♥", "Q♥", "K♥", "A♥",

    "2♠", "3♠", "4♠", "5♠", "6♠", "7♠", "8♠", "9♠", "10♠", "J♠", "Q♠", "K♠", "A♠"

};

```

```lua

local DECK = {'2S','3S','4S','5S','6S','7S','8S','9S','10S','JS','QS','KS','AS',

              '2D','3D','4D','5D','6D','7D','8D','9D','10D','JD','QD','KD','AD',

              '2H','3H','4H','5H','6H','7H','8H','9H','10H','JH','QH','KH','AH',

              '2C','3C','4C','5C','6C','7C','8C','9C','10C','JC','QC','KC','AC'}

```



```javascript

('3♣') -> return 'clubs'

('3♦') -> return 'diamonds'

('3♥') -> return 'hearts'

('3♠') -> return 'spades'

```

```ruby

('3C') -> return 'clubs'

('3D') -> return 'diamonds'

('3H') -> return 'hearts'

('3S') -> return 'spades'

```

```python

('3C') -> return 'clubs'

('3D') -> return 'diamonds'

('3H') -> return 'hearts'

('3S') -> return 'spades'

```

```csharp

DefineSuit("3♣") -> return "clubs"

DefineSuit("3♦") -> return "diamonds"

DefineSuit("3♥") -> return "hearts"

DefineSuit("3♠") -> return "spades"

```

```lua

('3C') -> return 'clubs'

('3D') -> return 'diamonds'

('3H') -> return 'hearts'

('3S') -> return 'spades'

```

---


🏷 `FUNDAMENTALS | STRINGS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5a360620f28b82a711000047)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
