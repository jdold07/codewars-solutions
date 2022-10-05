// [object Object] - How good are you really?  [ ID: 5601409514fc93442500010b  (how-good-are-you-really) ]
// URL: https://www.codewars.com/kata/5601409514fc93442500010b
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
export function betterThanAverage(classPoints: number[], yourPoints: number): boolean {
    return (yourPoints + classPoints.reduce((a, c) => a + c, 0)) / (classPoints.length + 1) < yourPoints
  }
