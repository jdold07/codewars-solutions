// 7 kyu - Drone Fly-By  [ ID: 58356a94f8358058f30004b5  (drone-fly-by) ]
// URL: https://www.codewars.com/kata/58356a94f8358058f30004b5
// Category: undefined  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
// *****************************************************************************
export function flyBy(l: string, d: string): string {
    return l.replace(RegExp("x{" + Math.min(l.length, d.length) + "}"), "o".repeat(Math.min(l.length, d.length)))
  }
