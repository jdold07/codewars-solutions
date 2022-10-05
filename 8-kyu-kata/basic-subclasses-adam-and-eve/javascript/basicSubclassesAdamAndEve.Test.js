// 8 kyu - Basic subclasses - Adam and Eve  [ ID: 547274e24481cfc469000416  (basic-subclasses-adam-and-eve) ]
// URL: https://www.codewars.com/kata/547274e24481cfc469000416
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("GodTest", function() {
    it("Adam should be a Man", function() {
      let humans = God.create()
      Test.assertEquals(humans[0] instanceof Man, true, 'Expected Adam to be a Man');
    });   
    it("Eva should be a Woman", function() {
      let humans = God.create()
      Test.assertEquals(humans[1] instanceof Woman, true, 'Expected Eva to be a Woman');
    });    
    it("Adam should be a Human", function() {
      let humans = God.create()
      Test.assertEquals(humans[0] instanceof Human, true, 'Expected Adam to be a Human');
    });   
    it("Eva should be a Human", function() {
      let humans = God.create()
      Test.assertEquals(humans[1] instanceof Human, true, 'Expected Eva to be a Human');
    });    
    it("Array should only contain two items", function() {
      let humans = God.create()
      Test.assertEquals(humans.length, 2, 'Expected there to only be two humans in array');
    });  
});
