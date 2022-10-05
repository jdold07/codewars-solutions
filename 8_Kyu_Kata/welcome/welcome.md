# 8 kyu - Welcome!

##### **ID**: [577ff15ad648a14b780000e7](https://www.codewars.com/kata/577ff15ad648a14b780000e7) | **Slug**: [welcome](https://www.codewars.com/kata/577ff15ad648a14b780000e7) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2016-07-08 ***by*** [lucymonie](https://www.codewars.com/users/lucymonie) | **Approved**: 2016-07-11 ***by*** [donaldsebleung](https://www.codewars.com/users/donaldsebleung)

##### **Languages Available**: javascript, ruby, python, csharp, coffeescript, java, elixir, c, rust

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2021-12-04

---

## Kata Description


Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win. 



### The Task

- Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!

- Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.



### The Database



```javascript

english: 'Welcome',

czech: 'Vitejte',

danish: 'Velkomst',

dutch: 'Welkom',

estonian: 'Tere tulemast',

finnish: 'Tervetuloa',

flemish: 'Welgekomen',

french: 'Bienvenue',

german: 'Willkommen',

irish: 'Failte',

italian: 'Benvenuto',

latvian: 'Gaidits',

lithuanian: 'Laukiamas',

polish: 'Witamy',

spanish: 'Bienvenido',

swedish: 'Valkommen',

welsh: 'Croeso'

```

```python

'english': 'Welcome',

'czech': 'Vitejte',

'danish': 'Velkomst',

'dutch': 'Welkom',

'estonian': 'Tere tulemast',

'finnish': 'Tervetuloa',

'flemish': 'Welgekomen',

'french': 'Bienvenue',

'german': 'Willkommen',

'irish': 'Failte',

'italian': 'Benvenuto',

'latvian': 'Gaidits',

'lithuanian': 'Laukiamas',

'polish': 'Witamy',

'spanish': 'Bienvenido',

'swedish': 'Valkommen',

'welsh': 'Croeso'

```

```ruby

'english'=>'Welcome',

'czech'=>'Vitejte',

'danish'=>'Velkomst',

'dutch'=>'Welkom',

'estonian'=>'Tere tulemast',

'finnish'=>'Tervetuloa',

'flemish'=>'Welgekomen',

'french'=>'Bienvenue',

'german'=>'Willkommen',

'irish'=>'Failte',

'italian'=>'Benvenuto',

'latvian'=>'Gaidits',

'lithuanian'=>'Laukiamas',

'polish'=>'Witamy',

'spanish'=>'Bienvenido',

'swedish'=>'Valkommen',

'welsh'=>'Croeso'

```

```csharp

{"english", "Welcome"},

{"czech", "Vitejte"},

{"danish", "Velkomst"},

{"dutch", "Welkom"},

{"estonian", "Tere tulemast"},

{"finnish", "Tervetuloa"},

{"flemish", "Welgekomen"},

{"french", "Bienvenue"},

{"german", "Willkommen"},

{"irish", "Failte"},

{"italian", "Benvenuto"},

{"latvian", "Gaidits"},

{"lithuanian", "Laukiamas"},

{"polish", "Witamy"},

{"spanish", "Bienvenido"},

{"swedish", "Valkommen"},

{"welsh", "Croeso"}

```

```elixir

english: "Welcome",

czech: "Vitejte",

danish: "Velkomst",

dutch: "Welkom",

estonian: "Tere tulemast",

finnish: "Tervetuloa",

flemish: "Welgekomen",

french: "Bienvenue",

german: "Willkommen",

irish: "Failte",

italian: "Benvenuto",

latvian: "Gaidits",

lithuanian: "Laukiamas",

polish: "Witamy",

spanish: "Bienvenido",

swedish: "Valkommen",

welsh: "Croeso"

```

``` java

english: "Welcome",

czech: "Vitejte",

danish: "Velkomst",

dutch: "Welkom",

estonian: "Tere tulemast",

finnish: "Tervetuloa",

flemish: "Welgekomen",

french: "Bienvenue",

german: "Willkommen",

irish: "Failte",

italian: "Benvenuto",

latvian: "Gaidits",

lithuanian: "Laukiamas",

polish: "Witamy",

spanish: "Bienvenido",

swedish: "Valkommen",

welsh: "Croeso"

```

```rust

("english", "Welcome"),

("czech", "Vitejte"),

("danish", "Velkomst"),

("dutch", "Welkom"),

("estonian", "Tere tulemast"),

("finnish", "Tervetuloa"),

("flemish", "Welgekomen"),

("french", "Bienvenue"),

("german", "Willkommen"),

("irish", "Failte"),

("italian", "Benvenuto"),

("latvian", "Gaidits"),

("lithuanian", "Laukiamas"),

("polish", "Witamy"),

("spanish", "Bienvenido"),

("swedish", "Valkommen"),

("welsh", "Croeso")

```





Possible invalid inputs include:

~~~~

IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address

IP_ADDRESS_NOT_FOUND - ip address not in the database

IP_ADDRESS_REQUIRED - no ip address was supplied

~~~~



---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/577ff15ad648a14b780000e7)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
