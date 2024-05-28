//+ ====================================================================================================================
//+
//+ 7 kyu - Area of a Circle  [ ID: 537baa6f8f4b300b5900106c ] (area-of-a-circle)
//+ URL: https://www.codewars.com/kata/537baa6f8f4b300b5900106c
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ALGORITHMS | GEOMETRY | MATHEMATICS
//+
//+ ====================================================================================================================

export const circleArea = (radius: number) => {
  const pi = 3.1415926535897932384626433832795028841971693993751
  if (radius <= 0) throw new Error("Radius can't be negative.")
  return pi * radius ** 2
}