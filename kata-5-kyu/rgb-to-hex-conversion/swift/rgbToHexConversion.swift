//+ ====================================================================================================================
//+
//+ 5 kyu - RGB To Hex Conversion  [ ID: 513e08acc600c94f01000001 ] (rgb-to-hex-conversion)
//+ URL: https://www.codewars.com/kata/513e08acc600c94f01000001
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS
//+
//+ ====================================================================================================================

func rgb(_ r: Int, _ g: Int, _ b: Int) -> String {
    func toHex(num: Int) -> String {
      var n: Int = num
      if num < 0 { n = 0 }
      if num > 255 { n = 255 }
      let result = ("0" + String(n, radix: 16).uppercased())
      return String(result[result.index(result.endIndex, offsetBy: -2)...])
    }
    return toHex(num: r) + toHex(num: g) + toHex(num: b)
  }
