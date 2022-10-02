# 6 kyu - Simple Web Framework #1: Create  a basic router

##### **ID**: [588a00ad70720f2cd9000005](https://www.codewars.com/kata/588a00ad70720f2cd9000005) | **Slug**: [simple-web-framework-number-1-create-a-basic-router](https://www.codewars.com/kata/588a00ad70720f2cd9000005) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2017-01-26 ***by*** [int3_0xcc](https://www.codewars.com/users/int3_0xcc) | **Approved**: 2017-02-12 ***by*** [matt c](https://www.codewars.com/users/matt%20c)

##### **Languages Available**: javascript, coffeescript, python, groovy, scala

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-09-17

---

## Kata Description


In this Kata, you have to design a simple routing class for a web framework.



The router should accept bindings for a given url, http method and an action. 



Then, when a request with a bound url and method comes in, it should return the result of the action.



Example usage:



```python

router = Router()

router.bind('/hello', 'GET', lambda: 'hello world')



router.runRequest('/hello', 'GET') // returns 'hello world'

```

```javascript

var router = new Router;

router.bind('/hello', 'GET', function(){ return 'hello world'; });



router.runRequest('/hello', 'GET') // returns 'hello world';

```

```coffeescript

router = new Router

router.bind '/hello', 'GET', -> 'hello world'



router.runRequest '/hello', 'GET' # returns 'hello world'

```

```groovy

router = new Router()

router.bind("/hello", "GET", { -> "hello world" })

router.runRequest("/hello", "GET")  // returns "hello world"

```



```scala

router = new Router()

router.bind("/hello", "GET", () => "hello world")

router.runRequest("/hello", "GET")  // returns "hello world"

```



When asked for a route that doesn't exist, router should return:



```javascript

'Error 404: Not Found'

```

```python

'Error 404: Not Found'

```

```groovy

"Error 404: Not Found"

```

```scala

"Error 404: Not Found"

```



The router should also handle modifying existing routes. See the example tests for more details.



---


🏷 `OBJECT-ORIENTED PROGRAMMING | ARRAYS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/588a00ad70720f2cd9000005)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
