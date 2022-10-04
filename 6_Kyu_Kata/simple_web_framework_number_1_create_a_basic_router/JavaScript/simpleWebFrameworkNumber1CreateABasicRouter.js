// 6 kyu - Simple Web Framework #1: Create  a basic router  [ ID: 588a00ad70720f2cd9000005  (simple-web-framework-number-1-create-a-basic-router) ]
// URL: https://www.codewars.com/kata/588a00ad70720f2cd9000005
// Category: undefined  |  Tags: OBJECT-ORIENTED PROGRAMMING | ARRAYS | FUNDAMENTALS
// *****************************************************************************
class Router {
    constructor() {
      this.routes = {}
    }
    runRequest(route, method) {
      try {
        return this.routes[method][route]()
      } catch (err) {
        return "Error 404: Not Found"
      }
    }
    bind(path, method, func) {
      this.routes = { ...this.routes, [method]: { ...this.routes[method], [path]: func } }
    }
  }
