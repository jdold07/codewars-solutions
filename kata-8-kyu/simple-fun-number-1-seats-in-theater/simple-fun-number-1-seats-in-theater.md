# 8 kyu - Simple Fun #1: Seats in Theater

##### **ID**: [588417e576933b0ec9000045](https://www.codewars.com/kata/588417e576933b0ec9000045) | **Slug**: [simple-fun-number-1-seats-in-theater](https://www.codewars.com/kata/588417e576933b0ec9000045) | **Category**: `GAMES` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2017-01-22 ***by*** [myjinxin2015](https://www.codewars.com/users/myjinxin2015) | **Approved**: 2017-02-04 ***by*** [smile67](https://www.codewars.com/users/smile67)

##### **Languages Available**: javascript, csharp, objc, python, ruby, crystal, haskell, cpp, java, powershell, scala, julia, php, groovy, kotlin, c, elm, nasm, coffeescript, dart, elixir, factor, go, clojure, typescript, lua

##### **My Completed Languages**: python ***as at*** 2022-10-08 | **Originally completed**: 2022-04-20

---

## Kata Description


### Task

Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left. All you need to do is climb over your seat and make your way to the exit.



 The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people who sit behind you and in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.



 Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.



### Example



 For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be



```elm

Theater.seats nCols nRows col row == 96

```

```groovy

Kata.seatsInTheater(nCols, nRows, col, row) == 96

```

```javascript

seatsInTheater(nCols, nRows, col, row) === 96

```

```coffeescript

seatsInTheater(nCols, nRows, col, row) is 96

```

```dart

seatsInTheater(nCols, nRows, col, row) == 96

```

```elixir

SeatsInTheater.seats_in_theater(nCols, nRows, col, row) == 96

```

```java

Kata.seatsInTheater(nCols, nRows, col, row) == 96

```

```csharp

Kata.SeatsInTheater(nCols, nRows, col, row); // --> 96

```

```julia

seatsintheater(ncols, nrows, col, row) # --> 96

```

```c

seats_in_theater(nCols, nRows, col, row) == 96

```

```cpp

seats_in_theater(nCols, nRows, col, row) == 96

```

```shell

run_shell(args: [nCols, nRows, col, row]).to_i == 96

```

```typescript

seatsInTheater(nCols, nRows, col, row) == 96

```

```racket

(seats-in-theater n-cols n-rows col row) ; 96

```

```clojure

(seats-in-theater n-cols n-rows col row) ; 96

```

```lua

seatsInTheater(nCols, nRows, col, row) == 96

```



```asm

mov rdi, 16

mov rsi, 11

mov rdx, 5

mov rcx, 3

call seats_in_theather    ; RAX <- 96

```

```factor

n-cols n-rows col row seats-in-theater ! 96

```



 Here is what the theater looks like:



 ![](https://files.gitter.im/myjinxin2015/eAjZ/blob)



### Input/Output





 - `[input]` integer `nCols`



   An integer, the number of theater's columns.



   Constraints: 1 ≤ `nCols` ≤ 1000.



 - `[input]` integer `nRows`



   An integer, the number of theater's rows.



   Constraints: 1 ≤ `nRows` ≤ 1000.



 - `[input]` integer `col`



   An integer, the column number of your own seat (with the rightmost column having index 1).



   Constraints: 1 ≤ `col` ≤ `nCols`.



 - `[input]` integer `row`



  An integer, the row number of your own seat (with the front row having index 1).



  Constraints: 1 ≤ `row` ≤ `nRows`.



 - `[output]` an integer



  The number of people who sit strictly behind you and in your column or to the left.



---


🏷 `PUZZLES`


[View this Kata on Codewars.com](https://www.codewars.com/kata/588417e576933b0ec9000045)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
