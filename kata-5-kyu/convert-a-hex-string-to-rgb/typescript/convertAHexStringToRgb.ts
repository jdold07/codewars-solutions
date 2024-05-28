//+ ====================================================================================================================
//+
//+ 5 kyu - Convert A Hex String To RGB  [ ID: 5282b48bb70058e4c4000fa7 ] (convert-a-hex-string-to-rgb)
//+ URL: https://www.codewars.com/kata/5282b48bb70058e4c4000fa7
//+ Category: ALGORITHMS  |  Tags: PARSING | STRINGS | ALGORITHMS
//+
//+ ====================================================================================================================


export function hexStringToRGB(hexString: string): { r: number, g: number, b: number } {
  const [r, g, b] = hexString!.match(/\w\w/g)!.map((v) => parseInt(v, 16))
  return { r, g, b }
}