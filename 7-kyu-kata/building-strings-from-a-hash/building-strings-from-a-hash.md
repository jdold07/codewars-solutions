# 7 kyu - Building Strings From a Hash

##### **ID**: [51c7d8268a35b6b8b40002f2](https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2) | **Slug**: [building-strings-from-a-hash](https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2013-06-24 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner) | **Approved**: *not available* ***by*** [*not available*](*https://www.codewars.com*)

##### **Languages Available**: javascript, coffeescript, ruby, csharp, fsharp, python

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-09-10

---

## Kata Description


Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs. 



The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.



**Example:**

```javascript

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

```

```coffeescript

solution({a: 1, b: '2'}) # should return "a = 1,b = 2"

```

```ruby

solution({"a" => 1, "b" => '2'}) # should return "a = 1,b = 2"

```

```csharp

Kata.StringifyDict(new Dictionary<char, int> {{'a', 1}, {'b', 2}}) => "a = 1,b = 2";

```

```fsharp

let dict = [

    'a',1

] |> dict

let dictionary = new Dictionary<char,int>(dict)

solution dictionary == "a = 1"

```

```python

solution({"a": 1, "b": '2'}) # should return "a = 1,b = 2"

```



---


🏷 `STRINGS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
