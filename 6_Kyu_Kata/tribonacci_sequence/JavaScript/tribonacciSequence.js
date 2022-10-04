// 6 kyu - Tribonacci Sequence  [ ID: 556deca17c58da83c00002db  (tribonacci-sequence) ]
// URL: https://www.codewars.com/kata/556deca17c58da83c00002db
// Category: undefined  |  Tags: NUMBER THEORY | ARRAYS | LISTS | FUNDAMENTALS
// *****************************************************************************
function tribonacci(signature, n) {
      while (signature.length < n) {
          signature.push((signature[signature.length-1] + signature[signature.length-2] + signature[signature.length-3]))
      }
      switch(n){
          case 0: return []
          case 1: signature.pop(); signature.pop(); return signature
          case 2: signature.pop(); return signature
          default: return signature
      }
  }
