// 7 kyu - Complementary DNA  [ ID: 554e4a2f232cdd87d9000038  (complementary-dna) ]
// URL: https://www.codewars.com/kata/554e4a2f232cdd87d9000038
// Category: undefined  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
function DNAStrand(dna){
      let dnaMap = {
          "A":"T",
          "T":"A",
          "C":"G",
          "G":"C"
      }
      return (typeof dna === "string")
          ? dna
              .split("")
              .map(value => value = dnaMap[value])
              .join("")
          : dna
              .map(value => value = dnaMap[value])
  }
