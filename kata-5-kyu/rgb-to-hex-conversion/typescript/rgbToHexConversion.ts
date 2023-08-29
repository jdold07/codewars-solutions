//+ ====================================================================================================================
//+
//+ 5 kyu - RGB To Hex Conversion  [ ID: 513e08acc600c94f01000001 ] (rgb-to-hex-conversion)
//+ URL: https://www.codewars.com/kata/513e08acc600c94f01000001
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS
//+
//+ ====================================================================================================================

export function rgb(r: number, g: number, b: number) {
  const toHex = (num: number) => {
    if (num < 0) num = 0
    if (num > 255) num = 255
    return num.toString(16).toUpperCase().padStart(2, "0")
  }
  return toHex(r) + toHex(g) + toHex(b)
}
