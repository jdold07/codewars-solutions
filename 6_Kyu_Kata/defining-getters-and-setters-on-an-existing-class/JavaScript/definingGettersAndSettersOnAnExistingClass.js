// [object Object] - Defining getters and setters on an existing class  [ ID: 55bcf04de45497c54a0000d0  (defining-getters-and-setters-on-an-existing-class) ]
// URL: https://www.codewars.com/kata/55bcf04de45497c54a0000d0
// Category: REFERENCE  |  Tags: OBJECT-ORIENTED PROGRAMMING | FUNDAMENTALS
// *****************************************************************************
Object.defineProperty(Person.prototype, "name", {
    get: function name() {
      return this.getName()
    },
    set: function name(fullName) {
      this.firstName = fullName.split(" ")[0]
      this.lastName = fullName.split(" ")[1]
    },
  })
