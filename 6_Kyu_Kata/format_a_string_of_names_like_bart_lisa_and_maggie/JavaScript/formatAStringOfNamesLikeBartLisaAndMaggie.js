// 6 kyu - Format a string of names like 'Bart, Lisa & Maggie'.  [ ID: 53368a47e38700bd8300030d  (format-a-string-of-names-like-bart-lisa-and-maggie) ]
// URL: https://www.codewars.com/kata/53368a47e38700bd8300030d
// Category: undefined  |  Tags: FUNDAMENTALS | STRINGS | DATA TYPES | FORMATTING | ALGORITHMS | LOGIC
// *****************************************************************************
const list = (names) => {
  switch (names.length) {
    case 0:
      return ""
    case 1:
      return names[0].name
    case 2:
      return `${names[0].name} & ${names[1].name}`
    default: {
      let namesComma = ""
      for (i = 0; i < names.length - 2; i++) namesComma += `${names[i].name}, `
      return `${namesComma}${names[names.length - 2].name} & ${names[names.length - 1].name}`
    }
  }
}
