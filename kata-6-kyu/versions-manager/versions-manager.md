# 6 kyu - Versions manager

##### **ID**: [5bc7bb444be9774f100000c3](https://www.codewars.com/kata/5bc7bb444be9774f100000c3) | **Slug**: [versions-manager](https://www.codewars.com/kata/5bc7bb444be9774f100000c3) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2018-10-19 ***by*** [bedis-elacheche](https://www.codewars.com/users/bedis-elacheche) | **Approved**: 2018-10-30 ***by*** [JohanWiltink](https://www.codewars.com/users/JohanWiltink)

##### **Languages Available**: javascript, java, php, python, rust

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-09-15

---

## Kata Description


In this kata we are going to mimic a software versioning system.



```if:javascript

You have to implement a `vm` function returning an object.

```

```if:java,php,python

You have to implement a `VersionManager` class.

```

```if:rust

You have to implement a `VersionManager` struct.

```



It should accept an optional parameter that represents the initial version. The input will be in one of the following formats: `"{MAJOR}"`, `"{MAJOR}.{MINOR}"`, or `"{MAJOR}.{MINOR}.{PATCH}"`. More values may be provided after `PATCH` but they should be ignored. If these 3 parts are not decimal values, an exception with the message `"Error occured while parsing version!"` should be thrown. If the initial version is not provided or is an empty string, use `"0.0.1"` by default.



This class should support the following methods, all of which should be chainable (except `release`):



* `major()` - increase `MAJOR` by `1`, set `MINOR` and `PATCH` to `0`

* `minor()` - increase `MINOR` by `1`, set `PATCH` to `0`

* `patch()` - increase `PATCH` by `1`

* `rollback()` - return the `MAJOR`, `MINOR`, and `PATCH` to their values before the previous `major`/`minor`/`patch` call, or throw an exception with the message `"Cannot rollback!"` if there's no version to roll back to

* `release()` - return a string in the format `"{MAJOR}.{MINOR}.{PATCH}"`



May the binary force be with you!



~~~if:rust

# Notes for Rust

### API

Rust is strictly typed and thus imposes restrictions and idioms that don't apply to some other languages, particularly for concepts like method chaining and optional parameters. To allow the tests to interface with your solution, an API has been chosen and set up in the initial solution which you **must not alter** (you are free to declare and use custom structs and methods outside and within the given API as you see fit).\

The constructor functions are as follows:

* `new`: takes no arguments and creates a VersionManager with the  default initial version as described above

* `from_version`: takes a string representing the initial version and attempts to parse it into a VersionManager (see below)





### Errors

In Rust, we don't throw and (maybe) catch Exceptions, and as *competent* Rustaceans we certainly don't `panic!` when we encounter an error we can recover from. Accordingly, the two methods that can potentially fail return a `Result<VersionManager, VMError>`.\

The error type `VMError` has been preloaded for you and replaces the string messages in the original description:

```rust

pub enum VMError {

  InvalidVersion, // for the `from_version` function

  NoHistory,      // for the `rollback` method

}

```

~~~

---


🏷 `ALGORITHMS | ARRAYS | STRINGS | OBJECT-ORIENTED PROGRAMMING`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5bc7bb444be9774f100000c3)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
