//+ ====================================================================================================================
//+
//+ 6 kyu - Who likes it?  [ ID: 5266876b8f4bf2da9b000362 ] (who-likes-it)
//+ URL: https://www.codewars.com/kata/5266876b8f4bf2da9b000362
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function likes(a: string[]): string {
  return (
    (a.length > 3
      ? `${a.slice(0, 2).join(", ")} and ${a.length - 2} others like `
      : a.length > 1
      ? `${a.slice(0, -1).join(", ")} and ${a.slice(-1)} like `
      : a.length
      ? `${a[0]} likes `
      : "no one likes ") + "this"
  )
}

export { likes }
