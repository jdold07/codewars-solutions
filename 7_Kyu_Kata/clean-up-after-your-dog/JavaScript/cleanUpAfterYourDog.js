// [object Object] - Clean up after your dog  [ ID: 57faa6ff9610ce181b000028  (clean-up-after-your-dog) ]
// URL: https://www.codewars.com/kata/57faa6ff9610ce181b000028
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS | MATHEMATICS
// *****************************************************************************
const crap = (x, bags, cap) =>
    ((x = x
      .flat()
      .filter((v) => v === "@" || v === "D"))
      .includes("D") ? "Dog!!" : x.length > bags * cap ? "Cr@p" : "Clean")
// *****************************************************************************
// *****************************************************************************
const crap = (x, bags, cap) => {
    x = x.flat().reduce((a, c) => ({ ...a, [c]: a[c] + 1 || 1 }), {})
    return x["D"] ? "Dog!!" : x["@"] > bags * cap ? "Cr@p" : "Clean"
  }

