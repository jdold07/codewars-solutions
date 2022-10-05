// [object Object] - Parse float  [ ID: 57a386117cb1f31890000039  (parse-float) ]
// URL: https://www.codewars.com/kata/57a386117cb1f31890000039
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const parseF = (s) => typeof s === "boolean" ? null : Number(s) === 0 ? 0 : Number(s) || null
// *****************************************************************************
// *****************************************************************************
const parseF = (s) => {
    console.log(s)
    return typeof s === "boolean" ? null : Number(s) === 0 ? 0 : Number(s) || null
  }

