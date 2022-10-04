// 5 kyu - Convert A Hex String To RGB  [ ID: 5282b48bb70058e4c4000fa7  (convert-a-hex-string-to-rgb) ]
// URL: https://www.codewars.com/kata/5282b48bb70058e4c4000fa7
// Category: undefined  |  Tags: PARSING | STRINGS | ALGORITHMS
// *****************************************************************************
import Foundation
  
  struct RGB: CustomStringConvertible, Equatable {
      var r:Int
      var g:Int
      var b:Int
      init(_ r:Int, _ g:Int, _ b:Int) {
          self.r = r
          self.g = g
          self.b = b
      }
      static func ==(left:RGB, right:RGB) -> Bool {
          return left.r == right.r && left.g == right.g && left.b == right.b
      }
      var description: String {
          return "{R:\(r), G:\(g), B:\(b)}"
      }
  }
  
  func hexStringToRGB(_ str:String) -> RGB {
      return RGB((Int(str.dropFirst(1).prefix(2), radix:16)!), (Int(str.dropFirst(3).prefix(2), radix:16)!), (Int(str.dropFirst(5).prefix(2), radix:16)!))
  }
