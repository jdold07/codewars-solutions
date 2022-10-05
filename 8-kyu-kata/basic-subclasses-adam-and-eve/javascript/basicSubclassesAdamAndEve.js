// 8 kyu - Basic subclasses - Adam and Eve  [ ID: 547274e24481cfc469000416  (basic-subclasses-adam-and-eve) ]
// URL: https://www.codewars.com/kata/547274e24481cfc469000416
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
class God{
  /**
   * @returns Human[]
   */
    static create(){
      return [Adam, Eve]
    }
  }
  class Human{
    constructor(name){
      this.name = name
    }
  }
  class Man extends Human{
    constructor(name){
      super(name)
      this.sex = "Male"
    }
  }
  class Woman extends Human{
    constructor(name){
      super(name)
      this.sex = "Female"
    }
  }
  const Adam = new Man("Adam")
  const Eve = new Woman("Eve")
