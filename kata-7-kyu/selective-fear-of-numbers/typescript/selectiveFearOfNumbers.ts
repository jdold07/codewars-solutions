//+ ====================================================================================================================
//+
//+ 7 kyu - Selective fear of numbers  [ ID: 55b1fd84a24ad00b32000075 ] (selective-fear-of-numbers)
//+ URL: https://www.codewars.com/kata/55b1fd84a24ad00b32000075
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const amIAfraid = (day: string, num: number) => {
  switch (day) {
    case "Monday":
      return num === 12
    case "Tuesday":
      return num > 95
    case "Wednesday":
      return num === 34
    case "Thursday":
      return num === 0
    case "Friday":
      return num % 2 === 0
    case "Saturday":
      return num === 56
    case "Sunday":
      return Math.abs(num) === 666
  }
}

export { amIAfraid }
