//+ ====================================================================================================================
//+
//+ 8 kyu - Printing Array elements with Comma delimiters  [ ID: 56e2f59fb2ed128081001328 ] (printing-array-elements-with-comma-delimiters)
//+ URL: https://www.codewars.com/kata/56e2f59fb2ed128081001328
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { expect } = require("chai")
const { printArray } = require("./printingArrayElementsWithCommaDelimiters")

describe("Tests", () => {
  let data
  it("test", () => {
    data = [2]
    expect(printArray(data) == "2", "single int test failed 2!=" + printArray(data))

    data = [2, 4, 5, 2]
    expect(printArray(data) == "2,4,5,2", "int test failed 2,4,5,2 !=" + printArray(data))

    data = [2.0, 4.2, 5.1, 2.2]
    expect(printArray(data) == "2,4.2,5.1,2.2", "floats test failed 2,4.2,5.1,2.2 !=" + printArray(data))

    data = ["2", "4", "5", "2"]
    expect(printArray(data) == "2,4,5,2", "String test failed 2,4,5,2" + printArray(data))

    let array1 = ["hello", "this", "is", "an", "array!"]
    let array2 = ["a", "b", "c", "d", "e!"]
    data = [array1, array2]
    expect(
      printArray(data) == "hello,this,is,an,array!,a,b,c,d,e!",
      "Array of array test failed hello,this,is,an,array!,a,b,c,d,e! !=" + printArray(data)
    )

    array1 = ["hello", "this", "is", "an", "array!"]
    array2 = [1, 2, 3, 4, 5]
    data = [array1, array2]
    expect(
      printArray(data) == "hello,this,is,an,array!,1,2,3,4,5",
      "arrays of different type array test failed hello,this,is,an,array!,1,2,3,4,5 !=" + printArray(data)
    )

    let x = { firstName: "John", lastName: "Doe" }
    let y = { firstName: "Ruslan", lastName: "López" }

    data = [x, y]
    expect(
      printArray(data) == "[object Object],[object Object]",
      "object test failed [object Object],[object Object] != " + printArray(data)
    )

    x = true
    y = false
    data = [x, y]
    expect(printArray(data) == "true,false", "boolean test failed true,false" + printArray(data))

    data = [
      Math.random(9) * 10,
      Math.random(9) * 10,
      Math.random(9) * 10,
      Math.random(9) * 10,
      Math.random(9) * 10,
      Math.random(9) * 10
    ]
    expect(data.join() == printArray(data), "#{data.join()} != #{printArray( data )}")
  })
})
