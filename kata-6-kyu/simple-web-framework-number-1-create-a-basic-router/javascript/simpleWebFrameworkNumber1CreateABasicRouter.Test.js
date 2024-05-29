//+ ====================================================================================================================
//+
//+ 6 kyu - Simple Web Framework #1: Create  a basic router  [ ID: 588a00ad70720f2cd9000005 ] (simple-web-framework-number-1-create-a-basic-router)
//+ URL: https://www.codewars.com/kata/588a00ad70720f2cd9000005
//+ Category: REFERENCE  |  Tags: OBJECT-ORIENTED PROGRAMMING | ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { Router } = require("./simpleWebFrameworkNumber1CreateABasicRouter")

it("Should handle GET routes", function () {
  for (let i = 0; i < 3; i++) {
    let router = new Router()

    let route1Name = "/" + getRandomString()
    let route2Name = "/" + getRandomString()
    let route1Response = getRandomString()
    let route2Response = getRandomString()
    let route1Method = "GET"
    let route2Method = "GET"

    router.bind(route1Name, route1Method, function () {
      return route1Response
    })
    router.bind(route2Name, route2Method, function () {
      return route2Response
    })

    assert.strictEqual(router.runRequest(route1Name, route1Method), route1Response)
    assert.strictEqual(router.runRequest(route2Name, route2Method), route2Response)
  }
})

it("Should handle POST routes", function () {
  for (let i = 0; i < 3; i++) {
    let router = new Router()

    let route1Name = "/" + getRandomString()
    let route2Name = "/" + getRandomString()
    let route1Response = getRandomString()
    let route2Response = getRandomString()
    let route1Method = "POST"
    let route2Method = "POST"

    router.bind(route1Name, route1Method, function () {
      return route1Response
    })
    router.bind(route2Name, route2Method, function () {
      return route2Response
    })

    assert.strictEqual(router.runRequest(route1Name, route1Method), route1Response)
    assert.strictEqual(router.runRequest(route2Name, route2Method), route2Response)
  }
})

it("Should handle mixed routes.", function () {
  for (let i = 0; i < 3; i++) {
    let router = new Router()

    let route1Name = "/" + getRandomString()
    let route2Name = route1Name
    let route1Response = getRandomString()
    let route2Response = getRandomString()
    let route1Method = "GET"
    let route2Method = "POST"

    router.bind(route1Name, route1Method, function () {
      return route1Response
    })
    router.bind(route2Name, route2Method, function () {
      return route2Response
    })

    assert.strictEqual(router.runRequest(route1Name, route1Method), route1Response)
    assert.strictEqual(router.runRequest(route2Name, route2Method), route2Response)
  }
})

it("Should return 404 for non-existing routes.", function () {
  for (let i = 0; i < 3; i++) {
    let router = new Router()

    let nonExistingUrl = "/" + getRandomString()

    assert.strictEqual(router.runRequest(nonExistingUrl, "GET"), "Error 404: Not Found")
    assert.strictEqual(router.runRequest(nonExistingUrl, "POST"), "Error 404: Not Found")
  }
})

it("Should modify existing routes", function () {
  for (let i = 0; i < 3; i++) {
    let router = new Router()

    let route1Name = "/" + getRandomString()
    let response1 = getRandomString()
    let response2 = getRandomString()

    router.bind(route1Name, "GET", function () {
      return response1
    })
    router.bind(route1Name, "GET", function () {
      return response2
    })

    assert.strictEqual(router.runRequest(route1Name, "GET"), response2)
  }
})

// function getRandomMethod() {
//   let rand = Math.floor(Math.random() * 2) + 1

//   return rand > 1 ? "GET" : "POST"
// }

function getRandomString() {
  return Math.random().toString(36).slice(2)
}
