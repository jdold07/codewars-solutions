# 8 kyu - The 'if' function

##### **ID**: [54147087d5c2ebe4f1000805](https://www.codewars.com/kata/54147087d5c2ebe4f1000805) | **Slug**: [the-if-function](https://www.codewars.com/kata/54147087d5c2ebe4f1000805) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2014-09-13 ***by*** [user578387](https://www.codewars.com/users/user578387) | **Approved**: 2014-09-27 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, ruby, python, coffeescript, haskell, elixir, cpp, rust, csharp, lua, c, nasm

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-08-23

---

## Kata Description


Create a function called `_if` which takes 3 arguments: a boolean value `bool` and 2 functions (which do not take any parameters): `func1` and `func2`



When `bool` is truth-ish, `func1` should be called, otherwise call the `func2`.





### Example:



```coffeescript

_if(true, (() -> console.log 'true'), (() -> console.log 'false'))

// Logs 'true' to the console.

```

```c

void the_true() { printf("true"); }

void the_false() { printf("false"); }

_if(true, the_true, the_false);

/* Logs "true" to the console */

```

```nasm

the_true:

    mov rdi .true

    jmp printf

.true:   db  `true\0`



the_false:

    mov rdi, .false

    jmp printf

.false:  db  `false\0`



mov dil, 1

mov rsi, the_true

mov rdx, the_false

call _if            ; Logs "true" to the console

```

```cpp

void TheTrue() { std::cout << "true" }

void TheFalse() { std::cout << "false" }

_if(true, TheTrue, TheFalse);

// Logs 'true' to the console.

```

``` csharp

Kata.If(true, () => Console.WriteLine("True"), () => Console.WriteLine("False"));

// write "True" to console

```

```elixir

_if(true, fn -> IO.puts "true" end, fn -> IO.puts "false" end)

# prints "true" to the console

```

```haskell

main = _if True (putStrLn "You spoke the truth") (putStrLn "liar")

-- puts "You spoke the truth" to the console.



_if False "Hello" "Goodbye" -- "Goodbye"

```

```javascript

_if(true, function(){console.log("True")}, function(){console.log("false")})

// Logs 'True' to the console.

```

```ruby

_if(true, proc{puts "True"}, proc{puts "False"})

# Logs 'True' to the console.

```

```python

def truthy(): 

  print("True")

  

def falsey(): 

  print("False")

  

_if(True, truthy, falsey)

# prints 'True' to the console

```

```rust

_if(true, || println!("true"), || println!("false"))

# prints "true" to the console

```

```lua

kata._if(true, function() print("true") end, function() print("false") end)

-- prints "true" to the console

```

---


🏷 `FUNCTIONAL PROGRAMMING | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/54147087d5c2ebe4f1000805)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
