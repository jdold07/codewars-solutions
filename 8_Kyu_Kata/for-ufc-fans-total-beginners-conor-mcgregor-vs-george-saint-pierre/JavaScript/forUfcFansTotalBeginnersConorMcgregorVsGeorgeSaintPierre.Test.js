// [object Object] - For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre  [ ID: 582dafb611d576b745000b74  (for-ufc-fans-total-beginners-conor-mcgregor-vs-george-saint-pierre) ]
// URL: https://www.codewars.com/kata/582dafb611d576b745000b74
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Uppercase Forms", function() {
  it("Normal", function() {
    Test.assertEquals(quote('George Saint Pierre'), "I am not impressed by your performance.")
    Test.assertEquals(quote('Conor McGregor'), "I'd like to take this chance to apologize.. To absolutely NOBODY!")
  })
  it("Full", function() {
    Test.assertEquals(quote('GEORGE SAINT PIERRE'), "I am not impressed by your performance.")
    Test.assertEquals(quote('CONOR MCGREGOR'), "I'd like to take this chance to apologize.. To absolutely NOBODY!")
  })
})

describe("Lowercase Forms", function() {
  Test.assertEquals(quote('george saint pierre'), "I am not impressed by your performance.")
  Test.assertEquals(quote('conor mcgregor'), "I'd like to take this chance to apologize.. To absolutely NOBODY!")
})
