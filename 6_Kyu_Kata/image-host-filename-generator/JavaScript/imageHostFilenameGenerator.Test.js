// [object Object] - Image host filename generator  [ ID: 586a933fc66d187b6e00031a  (image-host-filename-generator) ]
// URL: https://www.codewars.com/kata/586a933fc66d187b6e00031a
// Category: REFERENCE  |  Tags: LOGIC | OBJECT-ORIENTED PROGRAMMING | STRINGS | FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
for(let i = 0;i<10;i++)
{
  let name = generateName();

  Test.assertEquals(typeof name, "string" , "Name has to be a string.");
  Test.assertEquals(photoManager.nameWasUnique(name), true, "Name has to be unique.");
  Test.assertEquals(name.length, 6, "Name has to be 6 digits long.");
}
  });
});

