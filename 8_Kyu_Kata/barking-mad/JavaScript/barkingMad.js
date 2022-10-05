// [object Object] - Barking mad  [ ID: 54dba07f03e88a4cec000caf  (barking-mad) ]
// URL: https://www.codewars.com/kata/54dba07f03e88a4cec000caf
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
class Dog {
    constructor(breed) {
      this.breed = breed
    }
  
    bark() {
      return "Woof"
    }
  }
  
  var snoopy = new Dog("Beagle")
  
  snoopy.bark = function () {
    return "Woof"
  }
  
  var scoobydoo = new Dog("Great Dane")
