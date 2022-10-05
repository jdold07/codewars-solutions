// [object Object] - Add property to every object in array   [ ID: 54e8c3e89e2ae6f4900005a1  (add-property-to-every-object-in-array) ]
// URL: https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
Test.expect(questions[0].usersAnswer === null);  
questions.forEach(function(i){
Test.expect(i.usersAnswer === null, 'Should have usersAnswer property set to null');
Test.expect(Object.keys(i).length === 5, 'The number of properties is not what is expected');
Test.expect(i.hasOwnProperty("usersAnswer"),'Should have own property "usersAnswer"');
});
Test.expect(questions.length === 11,'The length of the array should not be modified');  

  });
});

