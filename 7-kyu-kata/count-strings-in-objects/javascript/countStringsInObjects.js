// 7 kyu - Count strings in objects  [ ID: 565b3542af398bfb50000003  (count-strings-in-objects) ]
// URL: https://www.codewars.com/kata/565b3542af398bfb50000003
// Category: REFERENCE  |  Tags: STRINGS | ARRAYS | FUNDAMENTALS
// *****************************************************************************
function strCount(obj) {
  let count = 0
  for (objects in obj) {
    if (typeof obj[objects] === "string") count++
    if (typeof obj[objects] === "object") count += strCount(obj[objects])
  }
  return count
}
// *****************************************************************************
// *****************************************************************************
function strCount(obj) {
  // Object.entries(obj).forEach(item => typeof item === 'string')
  let count = 0
  for (objects in obj) {
    if (typeof obj[objects] === "object") {
      for (objectNested in obj[objects]) {
        if (typeof obj[objects][objectNested] === "object") {
          for (objectNested2 in obj[objects][objectNested]) {
            if (typeof obj[objects][objectNested][objectNested2] === "object") {
              for (objectNested3 in obj[objects][objectNested][objectNested2]) {
                if (typeof obj[objects][objectNested][objectNested2][objectNested3] === "string") count++
              }
            } else if (typeof obj[objects][objectNested] === "string") count++
            if (typeof obj[objects][objectNested][objectNested2] === "string") count++
          }
        } else if (typeof obj[objects][objectNested] === "string") count++
      }
    } else if (typeof obj[objects] === "string") count++
  }
  return count
}
